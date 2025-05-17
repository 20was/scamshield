import type { ReactNode } from "react"
import { SiteHeader } from "@/components/layout/site-header"
import { PageTransition } from "@/components/page-transition"

interface DashboardLayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">
        <PageTransition>
          <main className="container mx-auto py-8 px-4 md:px-6">{children}</main>
        </PageTransition>
      </div>
    </div>
  )
}
