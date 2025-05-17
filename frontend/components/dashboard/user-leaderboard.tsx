import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface UserLeaderboardProps {
  className?: string
}

export function UserLeaderboard({ className }: UserLeaderboardProps) {
  // Mock data for the leaderboard
  const topUsers = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 1250,
      badge: "Expert",
      rank: 1,
    },
    {
      id: 2,
      name: "Sarah Williams",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 980,
      badge: "Veteran",
      rank: 2,
    },
    {
      id: 3,
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 840,
      badge: "Guardian",
      rank: 3,
    },
    {
      id: 4,
      name: "Emily Davis",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 720,
      badge: "Protector",
      rank: 4,
    },
    {
      id: 5,
      name: "David Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      points: 650,
      badge: "Sentinel",
      rank: 5,
    },
  ]

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Top Contributors</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topUsers.map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                  {user.rank}
                </div>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium leading-none">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.points} points</p>
                </div>
              </div>
              <Badge variant="secondary">{user.badge}</Badge>
            </div>
          ))}
          <div className="pt-2">
            <Link href="/dashboard/leaderboard" className="text-sm font-medium text-primary hover:underline">
              View full leaderboard
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
