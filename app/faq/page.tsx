import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import { HelpCircle, Search, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { getServerSession } from "next-auth/next";
import Image from "next/image";
import Link from "next/link";

export default async function FAQ() {
  const session = await getServerSession();

  const faqs = [
    {
      question: "ما هي خدمة التفتيش الذاتي الرقمي؟",
      answer: "هي خدمة مبتكرة تتيح للمنشآت تقييم مدى التزامها باللوائح والأنظمة ذاتياً عبر منصة مرصاد. تقوم الخدمة بتحليل مدخلات المنشأة ومقارنتها بالمتطلبات النظامية، ومن ثم إصدار تقرير فوري يوضح نقاط الامتثال والمخالفات المحتملة مع توصيات للتصحيح."
    },
    {
      question: "هل تغني خدمة التفتيش الذاتي عن الزيارات الرقابية الرسمية؟",
      answer: "التفتيش الذاتي هو أداة مساندة تهدف لرفع مستوى الامتثال وتقليل المخالفات، لكنها لا تغني عن الزيارات الرقابية التي تقوم بها الجهات المختصة. ومع ذلك، فإن الالتزام بالتفتيش الذاتي وتصحيح الأوضاع يقلل بشكل كبير من احتمالية رصد مخالفات أثناء الزيارات الرسمية."
    },
    {
      question: "كيف يمكنني التسجيل في منصة مرصاد؟",
      answer: "يمكنك التسجيل بسهولة عبر النقر على زر 'تسجيل الدخول' في أعلى الصفحة، ثم اختيار 'إنشاء حساب جديد'. ستحتاج إلى إدخال بيانات المنشأة الأساسية ورقم السجل التجاري للتحقق من الهوية."
    },
    {
      question: "هل الخدمة مجانية؟",
      answer: "توفر منصة مرصاد باقة أساسية مجانية تتيح الوصول للوائح والأنظمة وإجراء تفتيش ذاتي محدود. كما تتوفر باقات متقدمة بمميزات إضافية مثل التحليلات التفصيلية والدعم الاستشاري للمنشآت الكبيرة."
    },
    {
      question: "ما هي الجهات التي تغطيها منصة مرصاد؟",
      answer: "تغطي المنصة حالياً اللوائح الصادرة عن معظم الجهات التشريعية والرقابية الرئيسية، بما في ذلك وزارة الشؤون البلدية والقروية والإسكان، وزارة الصحة، هيئة الغذاء والدواء، والدفاع المدني، ويجري العمل باستمرار على إضافة المزيد من الجهات."
    },
    {
      question: "كيف أضمن سرية بيانات منشأتي؟",
      answer: "نحن في مرصاد نولي أقصى درجات الأهمية لأمن المعلومات. جميع البيانات المدخلة يتم تشفيرها ومعالجتها وفقاً لأعلى معايير الأمن السيبراني المعتمدة في المملكة، ولا يتم مشاركتها مع أي طرف ثالث دون موافقة صريحة."
    }
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar session={session} />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden border-b border-border/40 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                <HelpCircle className="ml-2 h-4 w-4" />
                مركز المساعدة
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
                كيف يمكننا <span className="text-primary">مساعدتك؟</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                إجابات وافية على الأسئلة الأكثر شيوعاً حول خدمات مرصاد والتفتيش الذاتي.
              </p>
              
              <div className="relative max-w-md">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  type="text" 
                  placeholder="ابحث عن سؤال..." 
                  className="pr-10 h-12 text-lg bg-background border-primary/20 focus:border-primary"
                />
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <Image 
                src="/images/faq-support.png" 
                alt="مركز المساعدة" 
                width={400}
                height={400}
                className="w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border border-border/50 rounded-lg px-4 bg-card hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="text-lg font-bold text-foreground hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still have questions? */}
      <section className="py-20 bg-primary/5 border-t border-border/40">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold">لم تجد إجابة لسؤالك؟</h2>
            <p className="text-lg text-muted-foreground">
              فريق الدعم لدينا جاهز دائماً لمساعدتك والإجابة على كافة استفساراتك.
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">تواصل معنا</Button>
              <Button size="lg" variant="outline">زيارة مركز الدعم</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

