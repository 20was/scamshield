"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { scamsService } from "@/services/scams-service"
import type { Scam } from "@/models/scam"

interface RelatedScamsProps {
  category: string
  currentScamId: string
}

export function RelatedScams({ category, currentScamId }: RelatedScamsProps) {
  const [relatedScams, setRelatedScams] = useState<Scam[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchRelatedScams = async () => {
      setIsLoading(true)
      try {
        // Mock API call
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const response = await scamsService.getScams({ category, limit: 5 })
        // Filter out the current scam
        const filteredScams = response.scams.filter((scam) => scam.id !== currentScamId)
        setRelatedScams(filteredScams.slice(0, 4)) // Limit to 4 related scams
      } catch (error) {
        console.error("Error fetching related scams:", error)
        setRelatedScams([])
      } finally {
        setIsLoading(false)
      }
    }

    fetchRelatedScams()
  }, [category, currentScamId])

  return (
    <div>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">Related Scams</CardTitle>
        <CardDescription>Other scams in the {category} category</CardDescription>
      </CardHeader>

      <CardContent>
        {isLoading ? (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex items-start gap-3 p-4 border rounded-lg">
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-full" />
                </div>
                <Skeleton className="h-8 w-8 rounded-full" />
              </div>
            ))}
          </div>
        ) : relatedScams.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">No related scams found in this category.</div>
        ) : (
          <div className="space-y-4">
            {relatedScams.map((scam, index) => (
              <motion.div
                key={scam.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="group card-hover-effect"
              >
                <Link href={`/dashboard/scams/${scam.id}`}>
                  <div className="flex items-start justify-between gap-3 p-4 border rounded-lg hover:border-primary/50">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium group-hover:text-primary transition-colors">{scam.title}</h3>
                        <Badge
                          variant={
                            scam.severity === "high"
                              ? "destructive"
                              : scam.severity === "medium"
                                ? "warning"
                                : "outline"
                          }
                        >
                          {scam.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">{scam.description}</p>
                      <div className="text-xs text-muted-foreground">
                        {scam.reports} reports • {new Date(scam.date).toLocaleDateString()}
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="shrink-0">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </CardContent>
    </div>
  )
}
