import Link from "next/link"
import { ExternalLink, BookOpen, FileText, Video } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function EducationResources() {
  const resources = [
    {
      title: "Understanding Phishing Attacks",
      type: "Guide",
      icon: FileText,
      description: "Learn how to identify and avoid phishing attempts",
      link: "#",
    },
    {
      title: "Investment Scam Red Flags",
      type: "Video",
      icon: Video,
      description: "Warning signs of fraudulent investment opportunities",
      link: "#",
    },
    {
      title: "Online Shopping Safety",
      type: "Guide",
      icon: FileText,
      description: "How to shop safely online and avoid scams",
      link: "#",
    },
    {
      title: "Romance Scams Explained",
      type: "Video",
      icon: Video,
      description: "Understanding and avoiding online romance scams",
      link: "#",
    },
    {
      title: "Protecting Seniors from Scams",
      type: "Guide",
      icon: FileText,
      description: "Resources for helping elderly family members stay safe",
      link: "#",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Educational Resources
        </CardTitle>
        <CardDescription>Learn how to protect yourself from various types of scams</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {resources.map((resource, index) => (
            <div key={index} className="flex items-start gap-3 rounded-lg border p-3">
              <div className="mt-1 rounded-full bg-primary/10 p-1">
                <resource.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{resource.title}</h4>
                  <span className="text-xs text-muted-foreground">{resource.type}</span>
                </div>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </div>
              <Button variant="ghost" size="icon" asChild>
                <Link href={resource.link}>
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">View resource</span>
                </Link>
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button variant="outline" asChild>
            <Link href="#">View all resources</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
