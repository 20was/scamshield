"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { AlertTriangle, ArrowUpDown, Calendar, MessageSquare, ThumbsUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { mockScams } from "@/services/mock-data"

export function ScamFeed() {
  const [activeTab, setActiveTab] = useState("recent")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  const sortedScams = [...mockScams].sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA
  })

  const recentScams = sortedScams.slice(0, 5)
  const trendingScams = [...mockScams].sort((a, b) => b.reports - a.reports).slice(0, 5)

  const renderScamItem = (scam: (typeof mockScams)[0], index: number) => (
    <motion.div
      key={scam.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="border-b last:border-0 py-4"
    >
      <div className="flex gap-4">
        <div className="flex flex-col items-center text-center">
          <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
            <ThumbsUp className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">{scam.reports}</span>
          <span className="text-xs text-muted-foreground">reports</span>
        </div>

        <div className="flex-1 space-y-2">
          <div>
            <Link
              href={`/dashboard/scams/${scam.id}`}
              className="text-lg font-medium hover:text-primary transition-colors"
            >
              {scam.title}
            </Link>
            <div className="flex flex-wrap gap-2 mt-1">
              <Badge
                variant={scam.severity === "high" ? "destructive" : scam.severity === "medium" ? "warning" : "outline"}
              >
                {scam.severity}
              </Badge>
              <Badge variant="outline">{scam.category}</Badge>
              <Badge
                variant={
                  scam.status === "verified"
                    ? "success"
                    : scam.status === "investigating"
                      ? "info"
                      : scam.status === "disputed"
                        ? "destructive"
                        : "outline"
                }
              >
                {scam.status}
              </Badge>
            </div>
          </div>

          <p className="text-muted-foreground line-clamp-2">{scam.description}</p>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Avatar className="h-5 w-5">
                <AvatarImage src="/placeholder-user.jpg" alt="User" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <span>User-{scam.userId.split("-")[1]}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{new Date(scam.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="h-3 w-3" />
              <span>{Math.floor(Math.random() * 20)} comments</span>
            </div>
          </div>
        </div>

        {scam.severity === "high" && (
          <div className="hidden sm:flex items-start">
            <div className="rounded-full bg-destructive/10 p-2">
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">Scam Reports</CardTitle>
        <Button variant="ghost" size="sm" onClick={handleSort} className="gap-1">
          <span className="hidden sm:inline">Sort by Date</span>
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="recent" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
          </TabsList>
          <TabsContent value="recent" className="pt-4">
            <div className="space-y-0 divide-y">{recentScams.map((scam, index) => renderScamItem(scam, index))}</div>
            <div className="mt-4 text-center">
              <Button variant="outline" asChild>
                <Link href="/dashboard/scams">View All Scams</Link>
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="trending" className="pt-4">
            <div className="space-y-0 divide-y">{trendingScams.map((scam, index) => renderScamItem(scam, index))}</div>
            <div className="mt-4 text-center">
              <Button variant="outline" asChild>
                <Link href="/dashboard/scams">View All Scams</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
