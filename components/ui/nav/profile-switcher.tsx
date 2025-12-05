"use client"

import * as React from "react"
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const groups = [
  {
    label: "الحساب الشخصي",
    teams: [
      {
        label: "حسابي",
        value: "personal",
      },
    ],
  },
  {
    label: "الفرق",
    teams: [
      {
        label: "شركة أكمي",
        value: "acme-inc",
      },
      {
        label: "شركة مونسترز",
        value: "monsters",
      },
    ],
  },
]

type Team = (typeof groups)[number]["teams"][number]

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface ProfileSwitcherProps extends PopoverTriggerProps {}

export default function ProfileSwitcher({ className }: ProfileSwitcherProps & { session: any }) {
  const [open, setOpen] = React.useState(false)
  const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false)
  const [selectedTeam, setSelectedTeam] = React.useState<Team>(
    groups[0].teams[0]
  )

  return (
    <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="اختر فريقاً"
            className={cn("w-[200px] justify-between gap-2", className)}
          >
            <div className="flex items-center gap-2">
              <Avatar className="h-5 w-5">
                <AvatarImage
                  src={`https://avatar.vercel.sh/${selectedTeam.value}.png`}
                  alt={selectedTeam.label}
                />
                <AvatarFallback>ف</AvatarFallback>
              </Avatar>
              {selectedTeam.label}
            </div>
            <CaretSortIcon className="h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandList>
              <CommandInput placeholder="ابحث عن فريق..." />
              <CommandEmpty>لم يتم العثور على فريق.</CommandEmpty>
              {groups.map((group) => (
                <CommandGroup key={group.label} heading={group.label}>
                  {group.teams.map((team) => (
                    <CommandItem
                      key={team.value}
                      onSelect={() => {
                        setSelectedTeam(team)
                        setOpen(false)
                      }}
                      className="text-sm flex items-center gap-2"
                    >
                      <Avatar className="h-5 w-5">
                        <AvatarImage
                          src={`https://avatar.vercel.sh/${team.value}.png`}
                          alt={team.label}
                          className="grayscale"
                        />
                        <AvatarFallback>ف</AvatarFallback>
                      </Avatar>
                      <span className="flex-1">{team.label}</span>
                      <CheckIcon
                        className={cn(
                          "h-4 w-4",
                          selectedTeam.value === team.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false)
                      setShowNewTeamDialog(true)
                    }}
                    className="flex items-center gap-2"
                  >
                    <PlusCircledIcon className="h-5 w-5" />
                    إنشاء فريق
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>إنشاء فريق</DialogTitle>
          <DialogDescription>
            أضف فريقاً جديداً لإدارة المنتجات والعملاء.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Label htmlFor="name">اسم الفريق</Label>
              <Input id="name" placeholder="شركة أكمي" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="plan">خطة الاشتراك</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="اختر خطة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">
                    <span className="font-medium">مجاني</span> -{" "}
                    <span className="text-muted-foreground">
                      تجربة لمدة أسبوعين
                    </span>
                  </SelectItem>
                  <SelectItem value="pro">
                    <span className="font-medium">احترافي</span> -{" "}
                    <span className="text-muted-foreground">
                      9$ شهرياً لكل مستخدم
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowNewTeamDialog(false)}>
            إلغاء
          </Button>
          <Button type="submit">متابعة</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}