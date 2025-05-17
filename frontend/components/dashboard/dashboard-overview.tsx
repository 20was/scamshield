import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, BookOpen, AlertTriangle, BarChart } from "lucide-react"

export function DashboardOverview() {
  const overviewItems = [
    {
      title: "Report a Scam",
      description: "Submit details about a scam you've encountered",
      icon: <Shield className="h-5 w-5" />,
      href: "/dashboard/report",
      color: "bg-blue-100 dark:bg-blue-900",
    },
    {
      title: "Educational Resources",
      description: "Learn about different types of scams and how to avoid them",
      icon: <BookOpen className="h-5 w-5" />,
      href: "/dashboard/education",
      color: "bg-green-100 dark:bg-green-900",
    },
    {
      title: "Security Checkup",
      description: "Verify your accounts and devices are secure",
      icon: <AlertTriangle className="h-5 w-5" />,
      href: "/dashboard/security-checkup",
      color: "bg-yellow-100 dark:bg-yellow-900",
    },
    {
      title: "Scam Analytics",
      description: "View trends and statistics about reported scams",
      icon: <BarChart className="h-5 w-5" />,
      href: "/dashboard/analytics",
      color: "bg-purple-100 dark:bg-purple-900",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {overviewItems.map((item, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center gap-4 pb-2">
            <div className={`rounded-full p-2 ${item.color}`}>{item.icon}</div>
            <CardTitle className="text-lg">{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-3">{item.description}</CardDescription>
            <Button variant="outline" size="sm" className="gap-1" asChild>
              <Link href={item.href}>
                View <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
