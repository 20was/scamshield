import { Button } from "@/components/ui/button"
import { Activity, LifeBuoy, Lock } from "lucide-react"
import Link from "next/link"

export function WelcomeBanner() {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold tracking-tight">Welcome to ScamShield</h1>
        <p className="text-muted-foreground">Your community-powered platform for scam awareness and prevention.</p>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/dashboard/risk-assessment">
            <Button className="gap-2">
              <Activity className="h-4 w-4" />
              Take Risk Assessment
            </Button>
          </Link>
          <Link href="/dashboard/report">
            <Button variant="outline" className="gap-2">
              Report a Scam
            </Button>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Link
            href="/dashboard/risk-assessment"
            className="flex flex-col items-center gap-2 rounded-lg border p-3 text-center hover:bg-accent transition-all"
          >
            <Activity className="h-8 w-8 text-teal-700" />
            <h3 className="font-medium">Risk Assessment</h3>
            <p className="text-xs text-muted-foreground">Get your personal vulnerability score</p>
          </Link>

          <Link
            href="/dashboard/simulations"
            className="flex flex-col items-center gap-2 rounded-lg border p-3 text-center hover:bg-accent transition-all"
          >
            <LifeBuoy className="h-8 w-8 text-teal-700" />
            <h3 className="font-medium">Scam Simulations</h3>
            <p className="text-xs text-muted-foreground">Practice identifying scams safely</p>
          </Link>

          <Link
            href="/dashboard/security-hub"
            className="flex flex-col items-center gap-2 rounded-lg border p-3 text-center hover:bg-accent transition-all"
          >
            <Lock className="h-8 w-8 text-teal-700" />
            <h3 className="font-medium">Security Hub</h3>
            <p className="text-xs text-muted-foreground">Platform-specific security guides</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
