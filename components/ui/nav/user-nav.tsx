"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { signOut } from "next-auth/react"
import { LogOut, User, CreditCard, Settings, Users } from "lucide-react"

export function UserNav() {
  return (
    <DropdownMenu dir="rtl">
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/avatars/01.png" alt="المستخدم" />
            <AvatarFallback>م</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium leading-none">المستخدم</p>
            <p className="text-xs leading-none text-muted-foreground">
              user@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="gap-2 cursor-pointer">
            <User className="h-4 w-4" />
            <span>الملف الشخصي</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 cursor-pointer">
            <CreditCard className="h-4 w-4" />
            <span>الفواتير</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 cursor-pointer">
            <Settings className="h-4 w-4" />
            <span>الإعدادات</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 cursor-pointer">
            <Users className="h-4 w-4" />
            <span>فريق جديد</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          className="gap-2 cursor-pointer text-destructive focus:text-destructive"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          <LogOut className="h-4 w-4" />
          <span>تسجيل الخروج</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}