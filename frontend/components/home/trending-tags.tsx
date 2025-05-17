"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Hash } from "lucide-react"

export function TrendingTags() {
  const tags = [
    { name: "phishing", count: 120 },
    { name: "investment", count: 80 },
    { name: "romance", count: 70 },
    { name: "shopping", count: 60 },
    { name: "tech-support", count: 50 },
    { name: "employment", count: 40 },
    { name: "cryptocurrency", count: 35 },
    { name: "identity-theft", count: 30 },
  ]

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          <Hash className="h-4 w-4 text-primary" />
          Trending Categories
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.div
              key={tag.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.2 }}
            >
              <Link href={`/dashboard/scams?category=${tag.name}`}>
                <Badge variant="outline" className="px-2 py-1 hover:bg-muted transition-colors cursor-pointer">
                  {tag.name}
                  <span className="ml-1 text-xs text-muted-foreground">({tag.count})</span>
                </Badge>
              </Link>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
