"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Shield, Search, Bell, Menu, UserCircle, Settings, HelpCircle, LogOut, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "@/components/mode-toggle"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function SiteHeader() {
  const pathname = usePathname()
  const isAuthPage = pathname?.includes("/login") || pathname?.includes("/register")
  const isLoggedIn = true // This would be determined by your auth state

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

  const MobileNav = () => (
    <div className="flex h-full flex-col border-r bg-background">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-bold">ScamShield</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto p-4">
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
          </div>
        </div>

        <div className="space-y-1">
          {/* Show all navigation items in mobile view */}
          {navCategories
            .flatMap((category) => category.items)
            .map((item) => (
              <Button
                key={item.href}
                variant={item.active ? "secondary" : "ghost"}
                className="w-full justify-start"
                asChild
              >
                <Link href={item.href} className="relative">
                  {item.label}
                  {item.highlight && (
                    <Badge variant="default" className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] px-1 h-4">
                      Earn Points
                    </Badge>
                  )}
                </Link>
              </Button>
            ))}
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard/profile">
              <UserCircle className="mr-2 h-4 w-4" />
              Profile
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/dashboard/settings">
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/help">
              <HelpCircle className="mr-2 h-4 w-4" />
              Help & Support
            </Link>
          </Button>
          <Button variant="ghost" className="w-full justify-start text-destructive" asChild>
            <Link href="/logout">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] p-0">
              <MobileNav />
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg hidden sm:inline-block">ScamShield</span>
          </Link>
        </div>

        <TooltipProvider delayDuration={300}>
          <nav className="hidden md:flex items-center gap-1 mx-4">
            {/* Primary nav items always visible */}
            {primaryNavItems.map((item) => (
              <Tooltip key={item.href}>
                <TooltipTrigger asChild>
                  <Button
                    variant={item.active ? "secondary" : item.highlight ? "default" : "ghost"}
                    size="sm"
                    asChild
                    className={item.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="lg:hidden">
                  {item.label}
                </TooltipContent>
              </Tooltip>
            ))}

            {/* Mega menu dropdown */}
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      More <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[500px]">
                    <div className="grid grid-cols-2 gap-3 p-4">
                      {navCategories.map((category) => (
                        <div key={category.label}>
                          <DropdownMenuLabel className="text-xs font-medium text-muted-foreground">
                            {category.label}
                          </DropdownMenuLabel>
                          <DropdownMenuSeparator className="mb-1" />
                          <DropdownMenuGroup>
                            {category.items
                              .filter((item) => !primaryNavItems.some((pi) => pi.href === item.href))
                              .map((item) => (
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
              </TooltipTrigger>
              <TooltipContent side="bottom" className="lg:hidden">
                More Options
              </TooltipContent>
            </Tooltip>
          </nav>
        </TooltipProvider>

        <div className="flex-1 max-w-md mx-4 hidden sm:block">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search scams..." className="w-full pl-8 pr-10" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {isLoggedIn ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="relative">
                    <Bell className="h-4 w-4" />
                    <Badge
                      className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] p-0"
                      variant="default"
                    >
                      3
                    </Badge>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="max-h-[300px] overflow-auto">
                    <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer">
                      <div className="font-medium">New scam reported in your area</div>
                      <div className="text-xs text-muted-foreground mt-1">2 hours ago</div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer">
                      <div className="font-medium">Your report was verified by 5 users</div>
                      <div className="text-xs text-muted-foreground mt-1">Yesterday</div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex flex-col items-start p-3 cursor-pointer">
                      <div className="font-medium">Urgent alert: Banking scam on the rise</div>
                      <div className="text-xs text-muted-foreground mt-1">2 days ago</div>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-center justify-center text-primary" asChild>
                    <Link href="/dashboard/notifications">View all notifications</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <ModeToggle />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col">
                      <span>John Doe</span>
                      <span className="text-xs text-muted-foreground">720 points</span>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/profile" className="flex items-center">
                        <UserCircle className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard/settings" className="flex items-center">
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <HelpCircle className="mr-2 h-4 w-4" />
                        <span>Help & Support</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem asChild>
                            <Link href="/faq">FAQ</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/contact">Contact Us</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/tutorials">Tutorials</Link>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild className="text-destructive focus:text-destructive">
                    <Link href="/logout" className="flex items-center">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Logout</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <ModeToggle />
              {!isAuthPage && (
                <>
                  <Button variant="ghost" asChild className="hidden sm:flex">
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/register">Register</Link>
                  </Button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  )
}
