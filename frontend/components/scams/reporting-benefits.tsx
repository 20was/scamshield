"use client"

import { Award, BarChart3, Shield, ThumbsUp, TrendingUp, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export function ReportingBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Protect Others",
      description: "Your report helps others avoid falling victim to the same scam",
    },
    {
      icon: Users,
      title: "Community Recognition",
      description: "Earn reputation points and badges for your contributions",
    },
    {
      icon: TrendingUp,
      title: "Improve Detection",
      description: "Help our AI system learn and identify scams more effectively",
    },
    {
      icon: Award,
      title: "Earn Rewards",
      description: "Top contributors receive special recognition and rewards",
    },
  ]

  return (
    <Card>
      <CardHeader className="bg-primary/5 border-b">
        <CardTitle className="flex items-center gap-2 text-lg">
          <ThumbsUp className="h-5 w-5 text-primary" />
          Benefits of Reporting
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="flex items-start gap-3 p-3 rounded-md border hover:bg-muted/50 transition-colors"
            >
              <div className="rounded-full bg-primary/10 p-2">
                <benefit.icon className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-sm">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-3 bg-success/10 rounded-md border border-success/20">
          <div className="flex items-center gap-2 mb-1">
            <BarChart3 className="h-4 w-4 text-success" />
            <h3 className="font-medium text-sm text-success">Your Impact</h3>
          </div>
          <p className="text-xs text-success/80">
            ScamShield users have helped prevent over $2.4M in potential losses through their reports. Join them in
            making a difference!
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
