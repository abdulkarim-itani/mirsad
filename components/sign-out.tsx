"use client";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function SignOut() {
  return (
    <Button
      variant="outline"
      className="text-muted-foreground hover:text-destructive hover:border-destructive"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      <LogOut className="h-4 w-4 ml-2" />
      تسجيل الخروج
    </Button>
  );
}
