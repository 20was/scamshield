import type React from "react"
import type { LucideIcon } from "lucide-react"

interface PageHeaderProps {
  heading: string
  subheading?: string
  icon?: LucideIcon
  children?: React.ReactNode
}

export function PageHeader({ heading, subheading, icon: Icon, children }: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-1 mb-6">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-6 w-6 text-primary" />}
        <h1 className="text-3xl font-bold tracking-tight">{heading}</h1>
      </div>
      {subheading && <p className="text-muted-foreground">{subheading}</p>}
      {children}
    </div>
  )
}
