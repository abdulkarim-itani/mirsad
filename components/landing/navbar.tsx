"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { Session } from "next-auth";
import { UserNav } from "@/components/ui/nav/user-nav";

interface NavbarProps {
  session: Session | null;
}

export default function Navbar({ session }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="bg-primary/10 p-2 rounded-lg">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold tracking-tight text-primary">مرصــاد</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            عن مرصاد
          </Link>
          <Link href="/#services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            خدماتنا
          </Link>
          <Link href="/faq" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            الأسئلة الشائعة
          </Link>
          
          {session?.user ? (
            <UserNav />
          ) : (
            <Link href="/login">
              <Button variant="default" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                تسجيل الدخول
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {session?.user && <UserNav />}
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background p-4 space-y-4 animate-in slide-in-from-top-5">
          <Link 
            href="/about" 
            className="block text-sm font-medium text-muted-foreground hover:text-primary py-2" 
            onClick={() => setIsMenuOpen(false)}
          >
            عن مرصاد
          </Link>
          <Link 
            href="/#services" 
            className="block text-sm font-medium text-muted-foreground hover:text-primary py-2" 
            onClick={() => setIsMenuOpen(false)}
          >
            خدماتنا
          </Link>
          <Link 
            href="/faq" 
            className="block text-sm font-medium text-muted-foreground hover:text-primary py-2" 
            onClick={() => setIsMenuOpen(false)}
          >
            الأسئلة الشائعة
          </Link>
          {!session?.user && (
            <Link href="/login" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full bg-primary text-white">تسجيل الدخول</Button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}

