import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import { CheckCircle2, ArrowLeft, Shield, FileText, BarChart3, Building2 } from "lucide-react";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar session={session} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32 border-b border-border/40">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('/images/hero-bg.png')] bg-cover bg-center bg-no-repeat mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                <span className="flex h-2 w-2 rounded-full bg-primary ml-2 animate-pulse"></span>
                المنصة الوطنية الموحدة
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                مرصــاد <br />
                <span className="text-primary">للوائح والقوانين</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                المنصة الوطنية المختصة بجمع، فرز، تحليل، وتوحيد جميع اللوائح والأنظمة والقرارات الصادرة من مختلف الجهات التشريعية في المملكة.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={session?.user ? "/protected" : "/login"}>
                  <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
                    ابدأ التفتيش الذاتي
                    <ArrowLeft className="mr-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/#about">
                  <Button size="lg" variant="outline" className="text-lg px-8 border-primary/20 hover:bg-primary/5">
                    تعرف على المزيد
                  </Button>
                </Link>
              </div>
              
              <div className="pt-8 border-t border-border/40 flex flex-wrap gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-secondary" />
                  <span>امتثال وطني</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-secondary" />
                  <span>دعم المنشآت</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-secondary" />
                  <span>تحليل بيانات</span>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/10 bg-card/50 backdrop-blur-sm p-2">
                <Image 
                  src="/images/hero-bg.png" 
                  alt="واجهة منصة مرصاد" 
                  width={600}
                  height={400}
                  className="rounded-xl w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Floating Card */}
              <Card className="absolute -bottom-6 -right-6 w-64 shadow-xl border-primary/10 animate-bounce-slow bg-card/95 backdrop-blur">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">حالة الامتثال</p>
                    <p className="text-lg font-bold text-foreground">98% مكتمل</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">رسالة مرصــاد</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              تمكين جميع المنشآت — بمختلف أحجامها وقطاعاتها — من الوصول السلس للمعلومات النظامية، وفهم اللوائح بشكل مبسّط، وتحويل الالتزام من عبء إداري إلى قيمة تشغيلية ترفع الجودة والكفاءة.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="h-8 w-8 text-primary" />,
                title: "مكتبة رقمية متكاملة",
                desc: "تسهّل على المنشآت فهم المتطلبات النظامية والبقاء على اطلاع دائم بأحدث اللوائح."
              },
              {
                icon: <Shield className="h-8 w-8 text-primary" />,
                title: "رفع مستوى الامتثال",
                desc: "تقليل المخاطر وتهيئة بيئة تمكّن المنشآت من التطوّر والنمو بثقة وأمان."
              },
              {
                icon: <BarChart3 className="h-8 w-8 text-primary" />,
                title: "دعم اتخاذ القرار",
                desc: "توفير بيانات دقيقة وتحليلات تساعد الجهات الحكومية والخاصة في تحسين الحوكمة."
              }
            ].map((item, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors duration-300 bg-card">
                <CardContent className="p-6 pt-8 text-center">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section: Self Inspection */}
      <section id="services" className="py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <Image 
                  src="/images/inspection-feature.png" 
                  alt="التفتيش الذاتي الرقمي" 
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 blur-3xl rounded-full"></div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center rounded-full border border-secondary/20 bg-secondary/5 px-3 py-1 text-sm font-medium ">
                خدمة جديدة
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">التفتيش الذاتي الرقمي</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                خدمة مبتكرة تسمح للمنشآت بتقييم مدى امتثالها للوائح والقوانين المعمول بها، وتحديد المخالفات المحتملة قبل وقوعها.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "تحديد المخالفات استباقياً",
                    desc: "اكتشاف الفجوات التشغيلية قبل أن تتحول إلى غرامات."
                  },
                  {
                    title: "توصيات فورية للتحسين",
                    desc: "خطوات إجرائية مقترحة لتصحيح كل مخالفة."
                  },
                  {
                    title: "لوائح موحّدة ومبسطة",
                    desc: "عرض المعلومات بشكل مترابط وسهل التنقل بدلاً من البحث المعقد."
                  },
                  {
                    title: "تقليل التكلفة والمخاطر",
                    desc: "الامتثال المبكر يعني توفيراً مالياً وتقليل احتمالية العقوبات."
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 h-6 w-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link href={session?.user ? "/protected" : "/login"}>
                <Button size="lg" className="mt-4 bg-primary hover:bg-primary/90">
                  جرب الخدمة الآن
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/vision-abstract.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">ماذا تخلق مرصاد للسوق؟</h2>
              <ul className="space-y-6">
                {[
                  "رفع نسبة الامتثال الوطني في كافة القطاعات.",
                  "خلق بيئة أعمال أكثر نضجاً وتنظيماً.",
                  "مساعدة الجهات الحكومية في الوصول لبيانات دقيقة حول مستوى الامتثال.",
                  "دعم رؤية 2030 في تحسين الحوكمة ورفع جودة الحياة."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-lg font-medium bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <div className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-full min-h-[300px] flex items-center justify-center">
              <div className="text-center space-y-4 p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md">
                <h3 className="text-6xl font-bold text-secondary">2030</h3>
                <p className="text-xl font-medium opacity-90">رؤية طموحة، وامتثال ذكي.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
