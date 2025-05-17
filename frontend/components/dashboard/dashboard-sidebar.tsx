"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Award, BarChart3, BookOpen, FileText, Home, Search, Settings, Shield, UserCircle, Users } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"

export function DashboardSidebar() {
  const pathname = usePathname()

  const menuItems = [
    {
      title: "Dashboard",
      icon: Home,
      href: "/dashboard",
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
      title: "Analytics",
      icon: BarChart3,
      href: "/dashboard/analytics",
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
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg">
              <Link href="/dashboard">
                <motion.div
                  className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Shield className="size-4" />
                </motion.div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">ScamShield</span>
                  <span className="text-xs text-muted-foreground">Dashboard</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                      <Link href={item.href} className="relative">
                        <item.icon className="size-4" />
                        <span>{item.title}</span>
                        {item.badge && (
                          <Badge
                            variant={item.badge === "New" ? "default" : "outline"}
                            className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 text-[10px] px-1 h-4"
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </motion.div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Your Stats</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="px-3 py-2">
              <div className="rounded-md border p-3 bg-muted/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Rank:</span>
                  <span className="text-xs font-medium">Watchdog</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Points:</span>
                  <span className="text-xs font-medium">720</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Reports:</span>
                  <span className="text-xs font-medium">24</span>
                </div>
                <div className="h-1 w-full bg-muted rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-primary" style={{ width: "72%" }} />
                </div>
                <div className="text-xs text-center text-muted-foreground">280 points to next level</div>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
