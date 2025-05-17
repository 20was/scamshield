import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, LifeBuoy, Lock } from "lucide-react"

export function SidebarStats() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">Community Stats</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">2,345</div>
          <p className="text-xs text-muted-foreground">Active community members</p>
          <div className="mt-4 text-2xl font-bold">12,456</div>
          <p className="text-xs text-muted-foreground">Scams reported this month</p>
          <div className="mt-4 text-2xl font-bold">$1.2M</div>
          <p className="text-xs text-muted-foreground">Estimated savings from prevented scams</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium">New Features</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Link
            href="/dashboard/risk-assessment"
            className="flex items-center gap-2 rounded-md p-2 hover:bg-accent transition-colors"
          >
            <Activity className="h-5 w-5 text-teal-700" />
            <div>
              <p className="text-sm font-medium">Risk Assessment</p>
              <p className="text-xs text-muted-foreground">Check your vulnerability score</p>
            </div>
          </Link>

          <Link
            href="/dashboard/simulations"
            className="flex items-center gap-2 rounded-md p-2 hover:bg-accent transition-colors"
          >
            <LifeBuoy className="h-5 w-5 text-teal-700" />
            <div>
              <p className="text-sm font-medium">Scam Simulations</p>
              <p className="text-xs text-muted-foreground">Practice identifying scams</p>
            </div>
          </Link>

          <Link
            href="/dashboard/security-hub"
            className="flex items-center gap-2 rounded-md p-2 hover:bg-accent transition-colors"
          >
            <Lock className="h-5 w-5 text-teal-700" />
            <div>
              <p className="text-sm font-medium">Security Hub</p>
              <p className="text-xs text-muted-foreground">Platform security guides</p>
            </div>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
