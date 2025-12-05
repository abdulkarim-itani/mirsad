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
        toast.error(data.error || "Failed to send OTP");
        setLoading(false);
        return;
      }

      toast.success("OTP sent to your mobile");
      setStep("otp");
      setCountdown(60);
    } catch (error) {
      toast.error("Something went wrong");
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
      toast.error("Something went wrong");
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
        toast.error(data.error || "Failed to resend OTP");
        return;
      }

      toast.success("OTP resent to your mobile");
      setCountdown(60);
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  if (step === "mobile") {
    return (
      <form onSubmit={handleSendOTP} className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16">
        <div>
          <label htmlFor="mobile" className="block text-xs text-gray-600 uppercase">
            Mobile Number
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            placeholder="+1234567890"
            autoComplete="tel"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
          <p className="mt-1 text-xs text-gray-500">Include country code (e.g., +1 for US)</p>
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
          {loading ? <LoadingDots color="#808080" /> : "Send OTP"}
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={handleVerifyOTP} className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16">
      <div>
        <label htmlFor="otp" className="block text-xs text-gray-600 uppercase">
          Verification Code
        </label>
        <input
          id="otp"
          name="otp"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={6}
          placeholder="Enter 6-digit code"
          required
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm text-center tracking-widest text-lg"
        />
        <p className="mt-1 text-xs text-gray-500">
          Code sent to {mobile}
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
        {loading ? <LoadingDots color="#808080" /> : "Verify & Sign In"}
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
          {countdown > 0 ? `Resend OTP in ${countdown}s` : "Resend OTP"}
        </button>
        <button
          type="button"
          onClick={() => {
            setStep("mobile");
            setOtp("");
          }}
          className="text-sm text-gray-600 hover:text-black"
        >
          Change mobile number
        </button>
      </div>
    </form>
  );
}
