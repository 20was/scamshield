"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Clock, Mail, MessageSquare, ShoppingCart, Trophy, User, Smartphone, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

const simulations = [
  {
    id: "phishing-email-basics",
    title: "Phishing Email Basics",
    description: "Learn to identify common phishing tactics in emails",
    category: "email",
    difficulty: "beginner",
    duration: "5-10 min",
    completionRate: 0,
    icon: Mail,
    completed: false,
    popular: true,
  },
  {
    id: "fake-shopping-website",
    title: "Fake Shopping Website",
    description: "Spot the red flags on fraudulent e-commerce sites",
    category: "website",
    difficulty: "intermediate",
    duration: "10-15 min",
    completionRate: 0,
    icon: ShoppingCart,
    completed: false,
    popular: true,
  },
  {
    id: "social-media-impersonation",
    title: "Social Media Impersonation",
    description: "Identify fake accounts and impersonation attempts",
    category: "social",
    difficulty: "intermediate",
    duration: "8-12 min",
    completionRate: 0,
    icon: User,
    completed: false,
    popular: false,
  },
  {
    id: "banking-fraud-sms",
    title: "Banking Fraud SMS",
    description: "Recognize text message scams targeting your banking info",
    category: "mobile",
    difficulty: "intermediate",
    duration: "5-8 min",
    completionRate: 0,
    icon: Smartphone,
    completed: false,
    popular: true,
  },
  {
    id: "tech-support-scam",
    title: "Tech Support Scam",
    description: "Navigate a simulated tech support scam scenario",
    category: "website",
    difficulty: "advanced",
    duration: "12-15 min",
    completionRate: 0,
    icon: Globe,
    completed: false,
    popular: false,
  },
  {
    id: "investment-fraud",
    title: "Investment Fraud",
    description: "Identify red flags in fraudulent investment opportunities",
    category: "email",
    difficulty: "advanced",
    duration: "10-15 min",
    completionRate: 0,
    icon: Trophy,
    completed: false,
    popular: false,
  },
  {
    id: "dating-scam",
    title: "Dating Scam",
    description: "Spot the warning signs of romance scams",
    category: "social",
    difficulty: "intermediate",
    duration: "10-15 min",
    completionRate: 0,
    icon: MessageSquare,
    completed: false,
    popular: true,
  },
  {
    id: "job-offer-scam",
    title: "Job Offer Scam",
    description: "Learn to identify fake job opportunities",
    category: "email",
    difficulty: "beginner",
    duration: "8-10 min",
    completionRate: 0,
    icon: Mail,
    completed: false,
    popular: false,
  },
]

export function SimulationList() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredSimulations =
    activeTab === "all"
      ? simulations
      : activeTab === "popular"
        ? simulations.filter((sim) => sim.popular)
        : simulations.filter((sim) => sim.category === activeTab)

  return (
    <div>
      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="all">All Simulations</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="email">Email</TabsTrigger>
            <TabsTrigger value="website">Website</TabsTrigger>
            <TabsTrigger value="social">Social Media</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSimulations.map((simulation, index) => (
              <SimulationCard key={simulation.id} simulation={simulation} index={index} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function SimulationCard({ simulation, index }: { simulation: any; index: number }) {
  const Icon = simulation.icon

  function getDifficultyColor(difficulty: string) {
    switch (difficulty) {
      case "beginner":
        return "text-success bg-success/10 border-success/20"
      case "intermediate":
        return "text-warning bg-warning/10 border-warning/20"
      case "advanced":
        return "text-destructive bg-destructive/10 border-destructive/20"
      default:
        return "text-primary bg-primary/10 border-primary/20"
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
      <Card className="overflow-hidden h-full flex flex-col hover:border-primary/50 transition-all duration-300">
        <CardHeader className="bg-muted/30 pb-4">
          <div className="flex justify-between items-start">
            <div className="bg-background p-2 rounded-md border">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <Badge variant="outline" className={getDifficultyColor(simulation.difficulty)}>
              {simulation.difficulty.charAt(0).toUpperCase() + simulation.difficulty.slice(1)}
            </Badge>
          </div>
          <CardTitle className="text-lg">{simulation.title}</CardTitle>
          <CardDescription>{simulation.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between py-4">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <div className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              <span>{simulation.duration}</span>
            </div>

            {simulation.completed ? (
              <span className="text-success flex items-center gap-1">
                <Trophy className="h-3.5 w-3.5" />
                Completed
              </span>
            ) : simulation.completionRate > 0 ? (
              <span>Progress: {simulation.completionRate}%</span>
            ) : null}
          </div>

          {simulation.completionRate > 0 && <Progress value={simulation.completionRate} className="h-1.5 mt-1 mb-3" />}
        </CardContent>
        <CardFooter className="pt-0 pb-4">
          <Button asChild className="w-full gap-2">
            <Link href={`/dashboard/simulations/${simulation.id}`}>
              {!simulation.completed ? "Start Simulation" : "Retry Simulation"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
