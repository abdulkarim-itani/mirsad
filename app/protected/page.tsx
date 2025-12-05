import Navbar from "@/components/landing/navbar";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileText, BarChart3, CheckCircle2 } from "lucide-react";

export default async function ProtectedPage() {
  const session = await getServerSession();
  
  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navbar session={session} />
      
      <main className="container mx-auto px-4 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">لوحة التحكم</h1>
          <p className="text-muted-foreground">مرحباً بك في منصة مرصاد للتفتيش الذاتي</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">حالة الامتثال</CardTitle>
              <Shield className="h-5 w-5 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">98%</div>
              <p className="text-xs text-muted-foreground">+2% من الشهر الماضي</p>
            </CardContent>
          </Card>
          
          <Card className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">اللوائح المراجعة</CardTitle>
              <FileText className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">145</div>
              <p className="text-xs text-muted-foreground">من أصل 150 لائحة</p>
            </CardContent>
          </Card>
          
          <Card className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">التقارير المنجزة</CardTitle>
              <BarChart3 className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">12</div>
              <p className="text-xs text-muted-foreground">هذا الشهر</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>النشاط الأخير</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { title: "تم مراجعة لائحة السلامة المهنية", time: "منذ ساعتين" },
                { title: "اكتمال تقرير الامتثال الشهري", time: "منذ 5 ساعات" },
                { title: "تحديث متطلبات البيئة والاستدامة", time: "منذ يوم واحد" },
              ].map((activity, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 rounded-lg bg-muted/30">
                  <div className="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
