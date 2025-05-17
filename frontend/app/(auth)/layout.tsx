import type { ReactNode } from "react"
import { SiteHeader } from "@/components/layout/site-header"

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1 flex items-center justify-center">
        <main className="w-full max-w-md py-8 px-4 md:px-6">{children}</main>
      </div>
    </div>
  )
}
