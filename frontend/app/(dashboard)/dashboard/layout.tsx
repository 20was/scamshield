import type { ReactNode } from "react"

interface DashboardNestedLayoutProps {
  children: ReactNode
}

export default function DashboardNestedLayout({ children }: DashboardNestedLayoutProps) {
  return <div className="space-y-6">{children}</div>
}
