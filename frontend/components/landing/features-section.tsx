import {
  ShieldCheck,
  Brain,
  BarChart3,
  Users,
  Search,
  TrendingUp,
  Award,
  Bell,
  BookOpen,
  UserCircle,
} from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Scam Reporting System",
      description: "Easily report scams you've encountered to help protect others.",
    },
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Advanced AI algorithms to identify potential scams before they cause harm.",
    },
    {
      icon: BarChart3,
      title: "Comprehensive Dashboard",
      description: "Track scams reported, prevented, and estimated savings.",
    },
    {
      icon: Users,
      title: "Community Verification",
      description: "Upvote, comment, and verify scam reports for greater accuracy.",
    },
    {
      icon: Search,
      title: "Scam Search",
      description: "Search and filter through our database of reported scams.",
    },
    {
      icon: TrendingUp,
      title: "Trending Scams Analytics",
      description: "Stay informed about the latest scam trends and techniques.",
    },
    {
      icon: Award,
      title: "Contributor Recognition",
      description: "Get recognized for your contributions to the community.",
    },
    {
      icon: Bell,
      title: "Urgent Scam Alerts",
      description: "Receive notifications about high-risk scams in your area.",
    },
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Access comprehensive guides on staying safe online.",
    },
    {
      icon: UserCircle,
      title: "User Profiles",
      description: "Manage your account and track your contribution history.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Key Features</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              ScamShield offers a comprehensive set of tools to help you stay safe online
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-4">
              <div className="rounded-full bg-primary/10 p-2">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-center text-lg font-bold">{feature.title}</h3>
              <p className="text-center text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
