"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Award, BookOpen, FileText, Home, Search, Settings, Shield, UserCircle, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function MobileSidebar() {
  const pathname = usePathname()

  const menuItems = [
    {
      title: "Home",
      icon: Home,
      href: "/",
    },
    {
      title: "Report Scam",
      icon: FileText,
      href: "/dashboard/report",
      badge: "Earn Points",
    },
    {
      title: "Scams Database",
      icon: Search,
      href: "/dashboard/scams",
    },
    {
      title: "Education",
      icon: BookOpen,
      href: "/dashboard/education",
    },
    {
      title: "Leaderboard",
      icon: Award,
      href: "/dashboard/leaderboard",
      badge: "New",
    },
    {
      title: "Community",
      icon: Users,
      href: "/dashboard/community",
    },
    {
      title: "Profile",
      icon: UserCircle,
      href: "/dashboard/profile",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
  ]

  return (
    <div className="flex h-full flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-bold">ScamShield</span>
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4 pb-12">
          <div className="flex items-center gap-4 mb-4 p-4 rounded-lg border bg-muted/50">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium">John Doe</p>
              <div className="flex items-center gap-2">
                <Badge variant="outline">Watchdog</Badge>
                <span className="text-xs text-muted-foreground">720 points</span>
              </div>
              <div className="mt-2 space-y-1">
                <div className="text-xs text-muted-foreground">280 points to next level</div>
                <Progress value={72} className="h-1" />
              </div>
            </div>
          </div>

          <div className="space-y-1">
            {menuItems.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="w-full justify-start"
                asChild
              >
                <Link href={item.href} className="relative">
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                  {item.badge && (
                    <Badge
                      variant={item.badge === "New" ? "default" : "outline"}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] px-1 h-4"
                    >
                      {item.badge}
                    </Badge>
                  )}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}
