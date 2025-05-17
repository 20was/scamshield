import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface RecentScamsProps {
  showAll?: boolean
}

export function RecentScams({ showAll = false }: RecentScamsProps) {
  const recentScams = [
    {
      id: "1",
      title: "Fake Banking Website",
      category: "Phishing",
      date: "2 hours ago",
      severity: "high",
    },
    {
      id: "2",
      title: "Cryptocurrency Investment Scam",
      category: "Investment",
      date: "5 hours ago",
      severity: "high",
    },
    {
      id: "3",
      title: "Fake Job Offer",
      category: "Employment",
      date: "1 day ago",
      severity: "medium",
    },
    {
      id: "4",
      title: "Tech Support Scam",
      category: "Tech Support",
      date: "2 days ago",
      severity: "medium",
    },
    {
      id: "5",
      title: "Fake Delivery Notification",
      category: "Phishing",
      date: "3 days ago",
      severity: "low",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Scams</CardTitle>
        <CardDescription>The latest scams reported on the platform</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentScams.map((scam) => (
            <div key={scam.id} className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Link href={`/dashboard/scams/${scam.id}`} className="font-medium hover:underline">
                    {scam.title}
                  </Link>
                  <Badge
                    variant={
                      scam.severity === "high" ? "destructive" : scam.severity === "medium" ? "default" : "outline"
                    }
                  >
                    {scam.severity}
                  </Badge>
                </div>
                <div className="flex text-sm text-muted-foreground">
                  <span>{scam.category}</span>
                  <span className="mx-2">•</span>
                  <span>{scam.date}</span>
                </div>
              </div>
              <Button variant="ghost" size="icon" asChild>
                <Link href={`/dashboard/scams/${scam.id}`}>
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">View scam details</span>
                </Link>
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button variant="outline" asChild>
            <Link href="/dashboard/scams">View all scams</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
