"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Trophy, Medal, Award, ThumbsUp, Shield, Calendar } from "lucide-react"

// Mock leaderboard data
const mockUsers = [
  {
    id: "user-1",
    name: "Sarah Johnson",
    avatar: "/placeholder-user.jpg",
    points: 1250,
    rank: 1,
    badge: "Guardian",
    scamsReported: 42,
    verifications: 156,
    joined: "Jan 2023",
  },
  {
    id: "user-2",
    name: "Michael Chen",
    avatar: "/placeholder-user.jpg",
    points: 980,
    rank: 2,
    badge: "Protector",
    scamsReported: 36,
    verifications: 124,
    joined: "Mar 2023",
  },
  {
    id: "user-3",
    name: "Priya Patel",
    avatar: "/placeholder-user.jpg",
    points: 845,
    rank: 3,
    badge: "Sentinel",
    scamsReported: 31,
    verifications: 98,
    joined: "Feb 2023",
  },
  {
    id: "user-4",
    name: "John Doe",
    avatar: "/placeholder-user.jpg",
    points: 720,
    rank: 4,
    badge: "Watchdog",
    scamsReported: 24,
    verifications: 156,
    joined: "Apr 2023",
  },
  {
    id: "user-5",
    name: "Emma Wilson",
    avatar: "/placeholder-user.jpg",
    points: 690,
    rank: 5,
    badge: "Defender",
    scamsReported: 22,
    verifications: 142,
    joined: "Dec 2022",
  },
  {
    id: "user-6",
    name: "David Kim",
    avatar: "/placeholder-user.jpg",
    points: 650,
    rank: 6,
    badge: "Defender",
    scamsReported: 20,
    verifications: 130,
    joined: "May 2023",
  },
  {
    id: "user-7",
    name: "Lisa Wang",
    avatar: "/placeholder-user.jpg",
    points: 610,
    rank: 7,
    badge: "Defender",
    scamsReported: 18,
    verifications: 124,
    joined: "Jun 2023",
  },
  {
    id: "user-8",
    name: "Robert Smith",
    avatar: "/placeholder-user.jpg",
    points: 580,
    rank: 8,
    badge: "Defender",
    scamsReported: 17,
    verifications: 116,
    joined: "Feb 2023",
  },
  {
    id: "user-9",
    name: "Maria Garcia",
    avatar: "/placeholder-user.jpg",
    points: 550,
    rank: 9,
    badge: "Defender",
    scamsReported: 16,
    verifications: 110,
    joined: "Mar 2023",
  },
  {
    id: "user-10",
    name: "James Wilson",
    avatar: "/placeholder-user.jpg",
    points: 520,
    rank: 10,
    badge: "Defender",
    scamsReported: 15,
    verifications: 104,
    joined: "Jan 2023",
  },
]

export function LeaderboardTabs() {
  const [searchQuery, setSearchQuery] = useState("")
  const [period, setPeriod] = useState("all-time")

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />
      case 3:
        return <Medal className="h-5 w-5 text-amber-700" />
      default:
        return <span className="text-sm font-medium">{rank}</span>
    }
  }

  const filteredUsers = mockUsers.filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <Card>
      <CardHeader>
        <CardTitle>Community Leaderboard</CardTitle>
        <CardDescription>Recognizing our top contributors in the fight against scams</CardDescription>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search users..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant={period === "all-time" ? "default" : "outline"}
              size="sm"
              onClick={() => setPeriod("all-time")}
            >
              All Time
            </Button>
            <Button
              variant={period === "monthly" ? "default" : "outline"}
              size="sm"
              onClick={() => setPeriod("monthly")}
            >
              This Month
            </Button>
            <Button variant={period === "weekly" ? "default" : "outline"} size="sm" onClick={() => setPeriod("weekly")}>
              This Week
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="points" className="w-full">
          <TabsList className="w-full grid grid-cols-3 mb-4">
            <TabsTrigger value="points" className="flex items-center gap-1">
              <Award className="h-4 w-4" />
              <span>Points</span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-1">
              <Shield className="h-4 w-4" />
              <span>Reports</span>
            </TabsTrigger>
            <TabsTrigger value="verifications" className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4" />
              <span>Verifications</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="points" className="mt-0">
            <div className="rounded-md border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 w-16">Rank</th>
                    <th className="text-left p-3">User</th>
                    <th className="text-right p-3 hidden sm:table-cell">Joined</th>
                    <th className="text-right p-3">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user, index) => (
                    <motion.tr
                      key={user.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className="border-t hover:bg-muted/50 transition-colors"
                    >
                      <td className="p-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                          {getRankIcon(user.rank)}
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <Badge variant="outline" className="mt-1">
                              {user.badge}
                            </Badge>
                          </div>
                        </div>
                      </td>
                      <td className="p-3 text-right text-muted-foreground hidden sm:table-cell">
                        <div className="flex items-center justify-end gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{user.joined}</span>
                        </div>
                      </td>
                      <td className="p-3 text-right font-bold">{user.points}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="reports" className="mt-0">
            <div className="rounded-md border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 w-16">Rank</th>
                    <th className="text-left p-3">User</th>
                    <th className="text-right p-3 hidden sm:table-cell">Joined</th>
                    <th className="text-right p-3">Reports</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers
                    .sort((a, b) => b.scamsReported - a.scamsReported)
                    .map((user, index) => (
                      <motion.tr
                        key={user.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="border-t hover:bg-muted/50 transition-colors"
                      >
                        <td className="p-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                            {getRankIcon(index + 1)}
                          </div>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <Badge variant="outline" className="mt-1">
                                {user.badge}
                              </Badge>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-right text-muted-foreground hidden sm:table-cell">
                          <div className="flex items-center justify-end gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{user.joined}</span>
                          </div>
                        </td>
                        <td className="p-3 text-right font-bold">{user.scamsReported}</td>
                      </motion.tr>
                    ))}
                </tbody>
              </table>
            </div>
          </TabsContent>

          <TabsContent value="verifications" className="mt-0">
            <div className="rounded-md border overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 w-16">Rank</th>
                    <th className="text-left p-3">User</th>
                    <th className="text-right p-3 hidden sm:table-cell">Joined</th>
                    <th className="text-right p-3">Verifications</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers
                    .sort((a, b) => b.verifications - a.verifications)
                    .map((user, index) => (
                      <motion.tr
                        key={user.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="border-t hover:bg-muted/50 transition-colors"
                      >
                        <td className="p-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted">
                            {getRankIcon(index + 1)}
                          </div>
                        </td>
                        <td className="p-3">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <Badge variant="outline" className="mt-1">
                                {user.badge}
                              </Badge>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-right text-muted-foreground hidden sm:table-cell">
                          <div className="flex items-center justify-end gap-1">
                            <Calendar className="h-3 w-3" />
                            <span>{user.joined}</span>
                          </div>
                        </td>
                        <td className="p-3 text-right font-bold">{user.verifications}</td>
                      </motion.tr>
                    ))}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
