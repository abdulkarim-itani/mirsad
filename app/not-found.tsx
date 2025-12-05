import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";
import { getServerSession } from "next-auth/next";

export default async function NotFound() {
  const session = await getServerSession();

  return (
    <div className="min-h-screen bg-background flex flex-col" dir="rtl">
      <Navbar session={session} />
      
      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-[12rem] md:text-[16rem] font-bold text-primary/10 leading-none select-none">
              404
            </h1>
            <div className="space-y-4 -mt-20 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                الصفحة غير موجودة
              </h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
              </p>
            </div>
            <div className="py-8">
              <Link href="/">
                <Button size="lg" className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                  <Home className="ml-2 h-5 w-5" />
                  العودة للرئيسية
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

