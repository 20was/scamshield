"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Award, ChevronRight, Medal, Trophy } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock leaderboard data
const topContributors = [
  {
    id: "user-1",
    name: "Sarah Johnson",
    avatar: "/placeholder-user.jpg",
    points: 1250,
    rank: 1,
    badge: "Guardian",
  },
  {
    id: "user-2",
    name: "Michael Chen",
    avatar: "/placeholder-user.jpg",
    points: 980,
    rank: 2,
    badge: "Protector",
  },
  {
    id: "user-3",
    name: "Priya Patel",
    avatar: "/placeholder-user.jpg",
    points: 845,
    rank: 3,
    badge: "Sentinel",
  },
]

export function TopContributors() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-4 w-4 text-yellow-500" />
      case 2:
        return <Medal className="h-4 w-4 text-gray-400" />
      case 3:
        return <Medal className="h-4 w-4 text-amber-700" />
      default:
        return <span className="text-xs font-medium w-4 h-4 flex items-center justify-center">{rank}</span>
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Award className="h-4 w-4 text-primary" />
          Top Contributors
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2 pb-0">
        <div className="space-y-3">
          {topContributors.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="flex items-center gap-3"
            >
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-muted">
                {getRankIcon(user.rank)}
              </div>
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium truncate">{user.name}</p>
                  <p className="text-sm font-medium">{user.points}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Badge variant="outline" className="text-[10px] h-4 px-1">
                    {user.badge}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button variant="ghost" size="sm" className="w-full text-primary" asChild>
          <Link href="/dashboard/leaderboard" className="flex items-center justify-center gap-1">
            <span>View Full Leaderboard</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
