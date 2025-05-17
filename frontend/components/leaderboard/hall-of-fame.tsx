"use client"

import { motion } from "framer-motion"
import { Award, Crown, Medal, Star, Trophy } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

// Mock hall of fame data
const hallOfFameUsers = [
  {
    id: "user-1",
    name: "Sarah Johnson",
    avatar: "/placeholder-user.jpg",
    badge: "Guardian",
    achievement: "Top Contributor 2023",
    icon: Trophy,
    iconColor: "text-yellow-500",
  },
  {
    id: "user-2",
    name: "Michael Chen",
    avatar: "/placeholder-user.jpg",
    badge: "Protector",
    achievement: "Most Accurate Reports",
    icon: Medal,
    iconColor: "text-blue-500",
  },
  {
    id: "user-3",
    name: "Priya Patel",
    avatar: "/placeholder-user.jpg",
    badge: "Sentinel",
    achievement: "Most Verifications",
    icon: Star,
    iconColor: "text-purple-500",
  },
  {
    id: "user-4",
    name: "John Doe",
    avatar: "/placeholder-user.jpg",
    badge: "Watchdog",
    achievement: "Fastest Response Time",
    icon: Crown,
    iconColor: "text-green-500",
  },
]

export function HallOfFame() {
  return (
    <Card>
      <CardHeader className="bg-primary/5 border-b">
        <CardTitle className="flex items-center gap-2">
          <Award className="h-5 w-5 text-primary" />
          Hall of Fame
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          {hallOfFameUsers.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="flex items-center gap-3 p-3 rounded-md border hover:bg-muted/50 transition-colors"
            >
              <Avatar className="h-10 w-10 border-2 border-primary/20">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium truncate">{user.name}</span>
                  <user.icon className={`h-4 w-4 ${user.iconColor}`} />
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className="text-xs">
                    {user.badge}
                  </Badge>
                  <span className="text-xs text-muted-foreground truncate">{user.achievement}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
