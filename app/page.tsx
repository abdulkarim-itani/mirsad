import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession();

  return (
    <div className="flex h-screen bg-white">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Image
          width={512}
          height={512}
          src="/logo.png"
          alt="مرصاد"
          className="w-48 h-48"
        />
        <div className="text-center max-w-screen-sm mb-10">
          <h1 className="text-stone-200 font-bold text-2xl">
            مرحباً بك في مرصاد
          </h1>
          <p className="text-stone-400 mt-5">
            منصة متكاملة لإدارة أعمالك ومشاريعك بكل سهولة ويسر
          </p>
        </div>
        <div className="flex space-x-3 space-x-reverse">
          <Link
            href="/protected"
            prefetch={false}
            className="text-stone-400 underline hover:text-stone-200 transition-all"
          >
            لوحة التحكم
          </Link>
          {!session?.user && (
            <>
              <p className="text-white">·</p>
              <Link
                href="/login"
                className="text-stone-400 underline hover:text-stone-200 transition-all"
              >
                تسجيل الدخول
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
