import { getServerSession } from "next-auth/next";
import ProfileSwitcher from "../ui/nav/profile-switcher";
import { UserNav } from "../ui/nav/user-nav";
import { NavElements } from "../ui/nav/nav-elements";
import { INavLink } from "../interface/INavLink";
import { Button } from "../ui/button";
import Link from "next/link";
import Router from "next/navigation";
import Image from "next/image";

export default async function Header() {
  const navigation = [
    { key: "الرئيسية", value: "" },
    { key: "المميزات", value: "features" },
    { key: "الأسعار", value: "pricing" },
  ] as INavLink[];

  const session = await getServerSession();

  return (
    <>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4 gap-6">
            {(session && session.user && (
              <>
                <ProfileSwitcher className="" session={session} />
                <NavElements navigationLinks={navigation} />
                <div className="flex-1" />
                <UserNav />
              </>
            )) || (
              <>
                <Image src="/logo.png" alt="الشعار" width={48} height={48} />
                <NavElements navigationLinks={navigation} />
                <div className="flex-1" />
                <Link href="/login">
                  <Button variant="brown">
                    تسجيل الدخول
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
