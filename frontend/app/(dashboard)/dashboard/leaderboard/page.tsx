import type { Metadata } from "next"
import { LeaderboardTabs } from "@/components/leaderboard/leaderboard-tabs"
import { LeaderboardStats } from "@/components/leaderboard/leaderboard-stats"
import { HallOfFame } from "@/components/leaderboard/hall-of-fame"

export const metadata: Metadata = {
  title: "Leaderboard - ScamShield",
  description: "Top contributors and scam fighters in the ScamShield community",
}

export default function LeaderboardPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Community Leaderboard</h1>
          <p className="text-muted-foreground mt-1">Recognizing our top contributors in the fight against scams</p>
        </div>
      </div>

      <LeaderboardStats />

      <div className="grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <LeaderboardTabs />
        </div>
        <div>
          <HallOfFame />
        </div>
      </div>
    </div>
  )
}
