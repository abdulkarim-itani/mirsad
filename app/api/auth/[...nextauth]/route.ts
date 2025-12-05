import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { verifyOTP } from "@/lib/twilio";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "OTP",
      credentials: {
        mobile: { label: "Mobile", type: "tel" },
        otp: { label: "OTP", type: "text" },
      },
      async authorize(credentials) {
        const { mobile, otp } = credentials ?? {};

        if (!mobile || !otp) {
          throw new Error("Mobile number and OTP are required");
        }

        // Verify OTP with Twilio
        const verification = await verifyOTP(mobile, otp);

        if (!verification.success) {
          throw new Error("Invalid OTP");
        }

        // Find or create user
        let user = await prisma.user.findUnique({
          where: { mobile },
        });

        if (!user) {
          // Auto-register new user
          user = await prisma.user.create({
            data: { mobile },
          });
        }

        return {
          id: String(user.id),
          mobile: user.mobile,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.mobile = (user as any).mobile;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).mobile = token.mobile;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
