import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface UserContributionStatsProps {
  className?: string
}

export function UserContributionStats({ className }: UserContributionStatsProps) {
  // Mock data for user contributions
  const userStats = {
    level: 7,
    points: 840,
    nextLevel: 1000,
    progress: 84, // percentage to next level
    contributions: {
      scamsReported: 12,
      commentsPosted: 48,
      scamsVerified: 8,
      resourcesShared: 5,
    },
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Your Contributions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                  {userStats.level}
                </div>
                <span className="text-sm font-medium">Level {userStats.level}</span>
              </div>
              <span className="text-sm text-muted-foreground">
                {userStats.points} / {userStats.nextLevel} points
              </span>
            </div>
            <Progress value={userStats.progress} className="h-2" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Scams Reported</p>
              <p className="text-xl font-bold">{userStats.contributions.scamsReported}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Comments Posted</p>
              <p className="text-xl font-bold">{userStats.contributions.commentsPosted}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Scams Verified</p>
              <p className="text-xl font-bold">{userStats.contributions.scamsVerified}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Resources Shared</p>
              <p className="text-xl font-bold">{userStats.contributions.resourcesShared}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
