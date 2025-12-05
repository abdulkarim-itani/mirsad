import Form from "@/components/form";
import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { ShieldCheck } from "lucide-react";

export default async function Login() {
  const session = await getServerSession();
  
  if (session?.user) {
    redirect("/protected");
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-muted/30" dir="rtl">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-border shadow-xl bg-card">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-border bg-card px-4 py-6 pt-8 text-center sm:px-16">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-primary/10 p-2 rounded-lg">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">مرصــاد</span>
            </div>
          </Link>
          <h3 className="text-xl font-semibold text-foreground">أهلاً وسهلاً</h3>
          <p className="text-sm text-muted-foreground">
            سجّل دخولك باستخدام رقم الجوال
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}
