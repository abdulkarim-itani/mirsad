import { ShieldCheck, Twitter, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border/40 pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-primary">مرصــاد</span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              المنصة الوطنية المختصة بجمع، فرز، تحليل، وتوحيد جميع اللوائح والأنظمة والقرارات الصادرة من مختلف الجهات التشريعية في المملكة.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                  عن المنصة
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                  التفتيش الذاتي
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  الأسئلة الشائعة
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@mirsaad.sa</span>
              </li>
              <li className="flex items-center gap-4 mt-4">
                <a 
                  href="#" 
                  className="bg-background border border-border p-2 rounded-full hover:border-primary hover:text-primary transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="bg-background border border-border p-2 rounded-full hover:border-primary hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 مرصاد. جميع الحقوق محفوظة.</p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              شروط الاستخدام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

