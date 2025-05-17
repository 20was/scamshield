"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Activity, LifeBuoy, Lock, ShieldCheck, LifeBuoyIcon as Lifebuoy } from "lucide-react"

export function QuickActions() {
  const actions = [
    {
      title: "Report a Scam",
      description: "Submit details about a scam you've encountered",
      icon: <AlertTriangle className="h-5 w-5 text-primary" />,
      href: "/dashboard/report",
    },
    {
      title: "Risk Assessment",
      description: "Check your vulnerability to different types of scams",
      icon: <Activity className="h-5 w-5 text-primary" />,
      href: "/dashboard/risk-assessment",
    },
    {
      title: "Try a Simulation",
      description: "Practice identifying scams in a safe environment",
      icon: <LifeBuoy className="h-5 w-5 text-primary" />,
      href: "/dashboard/simulations",
    },
    {
      title: "Security Hub",
      description: "Step-by-step guides to secure your accounts",
      icon: <Lock className="h-5 w-5 text-primary" />,
      href: "/dashboard/security-hub",
    },
    {
      title: "Security Check-up",
      description: "Perform a comprehensive security audit",
      icon: <ShieldCheck className="h-5 w-5 text-primary" />,
      href: "/dashboard/security-checkup",
    },
    {
      title: "Recovery Guide",
      description: "Get help if you've been scammed",
      icon: <Lifebuoy className="h-5 w-5 text-primary" />,
      href: "/dashboard/recovery-guide",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks and resources</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {actions.map((action) => (
            <Button
              key={action.title}
              variant="outline"
              className="h-auto justify-start gap-2 px-3 py-2 text-left"
              asChild
            >
              <Link href={action.href}>
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border bg-muted">
                  {action.icon}
                </div>
                <div className="flex flex-col">
                  <span>{action.title}</span>
                  <span className="text-xs text-muted-foreground">{action.description}</span>
                </div>
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
