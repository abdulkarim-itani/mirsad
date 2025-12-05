"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import LoadingDots from "@/components/loading-dots";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type Step = "mobile" | "otp";

export default function Form() {
  const [step, setStep] = useState<Step>("mobile");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const router = useRouter();

  // Countdown timer effect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "فشل إرسال رمز التحقق");
        setLoading(false);
        return;
      }

      toast.success("تم إرسال رمز التحقق إلى جوالك");
      setStep("otp");
      setCountdown(60);
    } catch (error) {
      toast.error("حدث خطأ ما");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        mobile,
        otp,
      });

      if (result?.error) {
        toast.error(result.error);
        setLoading(false);
        return;
      }

      router.refresh();
      router.push("/protected");
    } catch (error) {
      toast.error("حدث خطأ ما");
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (countdown > 0) return;
    
    setLoading(true);
    try {
      const res = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "فشل إعادة إرسال رمز التحقق");
        return;
      }

      toast.success("تم إعادة إرسال رمز التحقق إلى جوالك");
      setCountdown(60);
    } catch (error) {
      toast.error("حدث خطأ ما");
    } finally {
      setLoading(false);
    }
  };

  if (step === "mobile") {
    return (
      <form onSubmit={handleSendOTP} className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16">
        <div>
          <label htmlFor="mobile" className="block text-xs text-gray-600">
            رقم الجوال
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            placeholder="+966512345678"
            autoComplete="tel"
            required
            dir="ltr"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
          <p className="mt-1 text-xs text-gray-500">أدخل رمز الدولة (مثال: +966 للسعودية)</p>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`${
            loading
              ? "cursor-not-allowed border-gray-200 bg-gray-100"
              : "border-black bg-black text-white hover:bg-white hover:text-black"
          } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
        >
          {loading ? <LoadingDots color="#808080" /> : "إرسال رمز التحقق"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleVerifyOTP} className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16">
      <div>
        <label htmlFor="otp" className="block text-xs text-gray-600">
          رمز التحقق
        </label>
        <input
          id="otp"
          name="otp"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={6}
          placeholder="أدخل الرمز المكون من 6 أرقام"
          required
          dir="ltr"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm text-center tracking-widest text-lg"
        />
        <p className="mt-1 text-xs text-gray-500">
          تم إرسال الرمز إلى {mobile}
        </p>
      </div>
      <button
        type="submit"
        disabled={loading || otp.length !== 6}
        className={`${
          loading || otp.length !== 6
            ? "cursor-not-allowed border-gray-200 bg-gray-100"
            : "border-black bg-black text-white hover:bg-white hover:text-black"
        } flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none`}
      >
        {loading ? <LoadingDots color="#808080" /> : "تحقق وسجّل الدخول"}
      </button>
      <div className="flex flex-col items-center space-y-2">
        <button
          type="button"
          onClick={handleResendOTP}
          disabled={countdown > 0 || loading}
          className={`text-sm ${
            countdown > 0 ? "text-gray-400" : "text-gray-600 hover:text-black"
          }`}
        >
          {countdown > 0 ? `إعادة الإرسال خلال ${countdown} ثانية` : "إعادة إرسال الرمز"}
        </button>
        <button
          type="button"
          onClick={() => {
            setStep("mobile");
            setOtp("");
          }}
          className="text-sm text-gray-600 hover:text-black"
        >
          تغيير رقم الجوال
        </button>
      </div>
    </form>
  );
}
