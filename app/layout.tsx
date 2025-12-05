// These styles apply to every route in the application
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Almarai, IBM_Plex_Sans_Arabic } from "next/font/google";
import { Toaster } from "react-hot-toast";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-almarai",
  display: "swap",
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-arabic",
  display: "swap",
});

const title = "مرصاد - للوائح والقوانين";
const description =
  "المنصة الوطنية المختصة بجمع، فرز، تحليل، وتوحيد جميع اللوائح والأنظمة والقرارات الصادرة من مختلف الجهات التشريعية في المملكة.";

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL("https://mirsaad.sa"),
  creator: "Mirsaad",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${almarai.variable} ${ibmPlexSansArabic.variable}`}>
      <body className="min-h-screen bg-background antialiased">
        <Toaster />
        {children}
      </body>
    </html>
  );
}
