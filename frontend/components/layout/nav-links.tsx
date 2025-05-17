"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavLinks() {
  const pathname = usePathname()

  // Define navigation categories and their items
  const navCategories = [
    {
      label: "Core",
      items: [
        { href: "/dashboard", label: "Dashboard", active: pathname === "/dashboard" },
        {
          href: "/dashboard/scams",
          label: "Scam Reports",
          active: pathname === "/dashboard/scams" || pathname?.startsWith("/dashboard/scams/"),
        },
        { href: "/dashboard/report", label: "Report Scam", active: pathname === "/dashboard/report", highlight: true },
      ],
    },
    {
      label: "Resources",
      items: [
        { href: "/dashboard/education", label: "Education", active: pathname === "/dashboard/education" },
        {
          href: "/dashboard/simulations",
          label: "Scam Simulations",
          active: pathname === "/dashboard/simulations" || pathname?.startsWith("/dashboard/simulations/"),
        },
        {
          href: "/dashboard/security-hub",
          label: "Security Hub",
          active: pathname === "/dashboard/security-hub" || pathname?.startsWith("/dashboard/security-hub/"),
        },
      ],
    },
    {
      label: "Tools",
      items: [
        {
          href: "/dashboard/risk-assessment",
          label: "Risk Assessment",
          active: pathname === "/dashboard/risk-assessment",
        },
        {
          href: "/dashboard/security-checkup",
          label: "Security Check-up",
          active: pathname === "/dashboard/security-checkup",
        },
        {
          href: "/dashboard/recovery-guide",
          label: "Recovery Guide",
          active: pathname === "/dashboard/recovery-guide",
        },
      ],
    },
    {
      label: "Community",
      items: [
        { href: "/dashboard/leaderboard", label: "Leaderboard", active: pathname === "/dashboard/leaderboard" },
        { href: "/dashboard/community", label: "Community", active: pathname === "/dashboard/community" },
        { href: "/dashboard/analytics", label: "Analytics", active: pathname === "/dashboard/analytics" },
      ],
    },
  ]

  // Primary navigation items to always show
  const primaryNavItems = [
    { href: "/dashboard", label: "Dashboard", active: pathname === "/dashboard" },
    { href: "/dashboard/report", label: "Report Scam", active: pathname === "/dashboard/report", highlight: true },
    {
      href: "/dashboard/scams",
      label: "Scam Reports",
      active: pathname === "/dashboard/scams" || pathname?.startsWith("/dashboard/scams/"),
    },
  ]

  return (
    <div className="flex items-center space-x-1">
      {/* Primary nav items always visible */}
      {primaryNavItems.map((item) => (
        <Button
          key={item.href}
          variant={item.active ? "secondary" : item.highlight ? "default" : "ghost"}
          size="sm"
          asChild
          className={cn("text-sm", item.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : "")}
        >
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}

      {/* Mega menu dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="text-sm">
            More <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80">
          <div className="grid grid-cols-2 gap-3 p-4">
            {navCategories.map((category) => (
              <div key={category.label}>
                <DropdownMenuLabel className="text-xs font-medium text-muted-foreground">
                  {category.label}
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="mb-1" />
                <DropdownMenuGroup>
                  {category.items.map((item) => (
                    <DropdownMenuItem key={item.href} asChild className={item.active ? "bg-accent" : ""}>
                      <Link href={item.href} className="w-full">
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </div>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
