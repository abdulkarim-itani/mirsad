import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import { ShieldCheck, Target, Users, Lightbulb, Scale } from "lucide-react";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Link from "next/link";

export default async function About() {
  const session = await getServerSession();

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar session={session} />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              من نحن
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              شريكك الاستراتيجي <br />
              <span className="text-primary">للامتثال والنمو</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              نحن في مرصاد نؤمن بأن الامتثال ليس مجرد التزام قانوني، بل هو حجر الأساس لبناء بيئة أعمال مستدامة ومزدهرة.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <Image 
                src="/images/about-team.png" 
                alt="فريق مرصاد" 
                width={600}
                height={400}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">رؤيتنا</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed border-r-4 border-primary/20 pr-4">
                  أن نكون المرجع الوطني الأول والموثوق للامتثال التنظيمي، وممكناً رئيسياً لتحقيق مستهدفات رؤية المملكة 2030 في خلق بيئة استثمارية جاذبة وآمنة.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <ShieldCheck className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="text-3xl font-bold">رسالتنا</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed border-r-4 border-secondary/20 pr-4">
                  تمكين المنشآت من خلال توفير حلول ذكية ومبتكرة تبسط فهم اللوائح، وتعزز ثقافة الامتثال الذاتي، وتحول التحديات التنظيمية إلى فرص للتميز المؤسسي.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/about-values.png')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">قيمنا الجوهرية</h2>
            <p className="text-lg text-muted-foreground">
              المبادئ التي توجه عملنا وتشكل هويتنا في خدمة الوطن وقطاع الأعمال.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Scale className="h-8 w-8 text-primary" />,
                title: "النزاهة والشفافية",
                desc: "نلتزم بأعلى معايير المصداقية في نقل المعلومات وتوضيح الإجراءات."
              },
              {
                icon: <Lightbulb className="h-8 w-8 text-secondary" />,
                title: "الابتكار المستمر",
                desc: "نسعى دائماً لتطوير أدوات وحلول تقنية تسبق تطلعات عملائنا."
              },
              {
                icon: <Users className="h-8 w-8 text-primary" />,
                title: "الشراكة والتمكين",
                desc: "نعمل جنباً إلى جنب مع المنشآت والجهات الحكومية لتحقيق النجاح المشترك."
              }
            ].map((item, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur">
                <CardContent className="p-8 text-center">
                  <div className="mx-auto w-16 h-16 rounded-2xl bg-background shadow-sm border border-border flex items-center justify-center mb-6">
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

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">كن جزءاً من منظومة الامتثال الوطنية</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            انضم إلى آلاف المنشآت التي اختارت مرصاد كشريك للنجاح والنمو الآمن.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={session?.user ? "/protected" : "/login"}>
              <Button size="lg" variant="secondary" className="text-lg px-8 font-bold">
                ابدأ رحلتك معنا
              </Button>
            </Link>
            <Link href="/#contact">
              <Button size="lg" variant="outline" className="text-lg px-8 border-white/20 hover:bg-white/10 text-white">
                تواصل معنا
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

