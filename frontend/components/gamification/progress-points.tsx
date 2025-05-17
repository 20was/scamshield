"use client"

import { motion } from "framer-motion"
import { Award, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ProgressPointsProps {
  basePoints: number
  bonusPoints?: number
  bonusReason?: string
}

export function ProgressPoints({ basePoints, bonusPoints = 0, bonusReason }: ProgressPointsProps) {
  const totalPoints = basePoints + bonusPoints

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-primary/10 rounded-lg p-4 border border-primary/20"
    >
      <div className="flex items-center gap-2 mb-2">
        <Award className="h-5 w-5 text-primary" />
        <h3 className="font-medium">Points for this submission</h3>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm">Base points:</span>
          <Badge variant="outline" className="bg-primary/5">
            +{basePoints}
          </Badge>
        </div>

        {bonusPoints > 0 && bonusReason && (
          <div className="flex items-center justify-between">
            <span className="text-sm">Bonus for {bonusReason}:</span>
            <Badge variant="outline" className="bg-primary/5">
              +{bonusPoints}
            </Badge>
          </div>
        )}

        <div className="border-t pt-2 mt-2 flex items-center justify-between font-medium">
          <span className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4 text-primary" />
            Total points:
          </span>
          <Badge className="bg-primary text-primary-foreground">+{totalPoints}</Badge>
        </div>
      </div>
    </motion.div>
  )
}
