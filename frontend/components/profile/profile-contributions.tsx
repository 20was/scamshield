import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ProfileContributions() {
  const contributions = [
    {
      id: "1",
      type: "report",
      title: "Fake Banking Website",
      date: "2 days ago",
      status: "verified",
    },
    {
      id: "2",
      type: "verification",
      title: "Cryptocurrency Investment Scam",
      date: "1 week ago",
      status: "verified",
    },
    {
      id: "3",
      type: "report",
      title: "Tech Support Scam",
      date: "2 weeks ago",
      status: "pending",
    },
    {
      id: "4",
      type: "verification",
      title: "Fake Job Offer",
      date: "3 weeks ago",
      status: "verified",
    },
    {
      id: "5",
      type: "report",
      title: "Romance Scam",
      date: "1 month ago",
      status: "verified",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Contributions</CardTitle>
        <CardDescription>Your recent reports and verifications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {contributions.map((contribution) => (
            <div key={contribution.id} className="flex items-center justify-between border-b pb-2 last:border-0">
              <div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{contribution.type === "report" ? "Report" : "Verification"}</Badge>
                  <Link href={`/dashboard/scams/${contribution.id}`} className="font-medium hover:underline">
                    {contribution.title}
                  </Link>
                </div>
                <div className="text-xs text-muted-foreground mt-1">{contribution.date}</div>
              </div>
              <Badge variant={contribution.status === "verified" ? "default" : "secondary"}>
                {contribution.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
