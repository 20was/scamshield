"use client"

import { motion } from "framer-motion"
import { Award, FileText, ThumbsUp, Users } from "lucide-react"

export function LeaderboardStats() {
  const stats = [
    {
      icon: Users,
      value: "3,456",
      label: "Active Contributors",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: FileText,
      value: "12,345",
      label: "Scams Reported",
      color: "bg-info/10 text-info",
    },
    {
      icon: ThumbsUp,
      value: "45,678",
      label: "Verifications",
      color: "bg-success/10 text-success",
    },
    {
      icon: Award,
      value: "2.4M",
      label: "Points Earned",
      color: "bg-warning/10 text-warning",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
        >
          <div className="p-6 flex flex-col items-center text-center">
            <div className={`rounded-full p-3 ${stat.color} mb-3`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
