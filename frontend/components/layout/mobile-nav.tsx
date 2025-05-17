"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Shield, Menu, X, ChevronRight, UserCircle, Settings, HelpCircle, LogOut } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function MobileNav() {
  const [open, setOpen] = useState(false)
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

  // User related links
  const userLinks = [
    { href: "/dashboard/profile", label: "Profile", icon: <UserCircle className="mr-2 h-5 w-5" /> },
    { href: "/dashboard/settings", label: "Settings", icon: <Settings className="mr-2 h-5 w-5" /> },
    { href: "/help", label: "Help & Support", icon: <HelpCircle className="mr-2 h-5 w-5" /> },
    { href: "/logout", label: "Logout", icon: <LogOut className="mr-2 h-5 w-5" />, destructive: true },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-semibold">ScamShield</span>
          </div>
          <Button variant="ghost" className="h-8 w-8 p-0" onClick={() => setOpen(false)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        <nav className="flex flex-col py-4">
          <Accordion type="multiple" className="w-full">
            {navCategories.map((category) => (
              <AccordionItem key={category.label} value={category.label}>
                <AccordionTrigger className="py-2 text-sm font-medium">{category.label}</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col space-y-1 pl-4">
                    {category.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "flex items-center py-2 text-sm",
                          item.active ? "font-medium text-primary" : "text-muted-foreground",
                          item.highlight ? "text-primary" : "",
                        )}
                        onClick={() => setOpen(false)}
                      >
                        <ChevronRight className="mr-1 h-4 w-4" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-4 border-t pt-4">
            <p className="mb-2 px-4 text-xs font-medium text-muted-foreground">User</p>
            {userLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center px-4 py-2 text-sm",
                  link.destructive ? "text-destructive" : "text-muted-foreground",
                )}
                onClick={() => setOpen(false)}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
