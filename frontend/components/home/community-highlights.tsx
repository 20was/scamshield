"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Star } from "lucide-react"

export function CommunityHighlights() {
  const highlights = [
    {
      title: "Weekly Challenge",
      description: "Report phishing scams this week to earn bonus points",
      link: "/dashboard/challenges",
    },
    {
      title: "New Education Guide",
      description: "Learn how to identify cryptocurrency scams",
      link: "/dashboard/education/crypto-scams",
    },
    {
      title: "Community Milestone",
      description: "We've reached 10,000 verified scam reports!",
      link: "/dashboard/milestones",
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Star className="h-4 w-4 text-primary" />
          Community Highlights
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-3">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="rounded-md border p-3 hover:bg-muted/50 transition-colors"
            >
              <h3 className="font-medium text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
              <Button variant="link" size="sm" className="px-0 h-auto mt-1" asChild>
                <Link href={item.link} className="flex items-center gap-1">
                  <span>Learn more</span>
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
