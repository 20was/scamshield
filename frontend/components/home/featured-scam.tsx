"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { AlertTriangle, Calendar, ChevronLeft, ChevronRight, ExternalLink, Shield, ThumbsUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock featured scams data
const featuredScams = [
  {
    id: "scam-1",
    title: "Fake Banking Website - Urgent Alert",
    category: "phishing",
    severity: "high",
    description:
      "A sophisticated phishing attempt that mimics a major bank's website. Users are asked to enter their login credentials and personal information.",
    url: "https://fake-bank-website.com",
    date: "2024-05-01T10:30:00Z",
    reports: 156,
    status: "verified",
    userId: "user-1",
    contactInfo: "support@fake-bank-website.com",
    evidence: "The website has spelling errors and the domain was registered recently.",
  },
  {
    id: "scam-2",
    title: "Cryptocurrency Investment Scam",
    category: "investment",
    severity: "critical",
    description:
      "Fraudulent investment scheme promising 300% returns on cryptocurrency investments within 30 days. Multiple victims have reported complete loss of funds.",
    url: "https://crypto-quick-profits.com",
    date: "2024-05-02T14:15:00Z",
    reports: 243,
    status: "verified",
    userId: "user-2",
    contactInfo: "invest@crypto-quick-profits.com",
    evidence: "No registered company information and unrealistic return promises.",
  },
  {
    id: "scam-3",
    title: "Fake Job Offer Scam",
    category: "employment",
    severity: "medium",
    description:
      "Scammers posing as recruiters from well-known companies offering remote jobs with high salaries. They request personal information and payment for 'training materials'.",
    url: "https://career-opportunity-center.com",
    date: "2024-05-03T09:45:00Z",
    reports: 89,
    status: "verified",
    userId: "user-3",
    contactInfo: "hr@career-opportunity-center.com",
    evidence: "Communication only via email and requests for payment before employment.",
  },
  {
    id: "scam-4",
    title: "Tech Support Impersonation",
    category: "tech support",
    severity: "high",
    description:
      "Callers claiming to be from Microsoft or Apple technical support, stating your computer has a virus. They request remote access to your computer and payment for services.",
    url: "N/A (Phone Scam)",
    date: "2024-05-04T11:20:00Z",
    reports: 178,
    status: "verified",
    userId: "user-4",
    contactInfo: "Multiple phone numbers reported",
    evidence: "Legitimate tech companies never make unsolicited calls about viruses.",
  },
  {
    id: "scam-5",
    title: "Fake Charity for Disaster Relief",
    category: "charity",
    severity: "high",
    description:
      "Fraudulent charity claiming to collect donations for recent natural disaster victims. No legitimate registration and funds do not reach actual relief efforts.",
    url: "https://global-disaster-relief-fund.org",
    date: "2024-05-05T16:30:00Z",
    reports: 132,
    status: "verified",
    userId: "user-5",
    contactInfo: "donate@global-disaster-relief-fund.org",
    evidence: "Not registered with charity regulators and no transparency on fund usage.",
  },
]

export function FeaturedScam() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance the carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredScams.length)
    }, 8000) // Change slide every 8 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Pause auto-play when user interacts
  const handleManualNavigation = (newIndex: number) => {
    setIsAutoPlaying(false)
    setDirection(newIndex > currentIndex ? 1 : -1)
    setCurrentIndex(newIndex)

    // Resume auto-play after 30 seconds of inactivity
    const timeout = setTimeout(() => setIsAutoPlaying(true), 30000)
    return () => clearTimeout(timeout)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? featuredScams.length - 1 : currentIndex - 1
    handleManualNavigation(newIndex)
  }

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % featuredScams.length
    handleManualNavigation(newIndex)
  }

  const goToSlide = (index: number) => {
    handleManualNavigation(index)
  }

  const currentScam = featuredScams[currentIndex]

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  }

  return (
    <Card className="overflow-hidden border-2 border-destructive/20 relative">
      <CardHeader className="bg-destructive/5 border-b pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <CardTitle>Featured Alerts</CardTitle>
          </div>
          <CardDescription className="mt-0">
            {currentIndex + 1} of {featuredScams.length} high-priority scams
          </CardDescription>
        </div>
      </CardHeader>

      {/* Carousel content */}
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <div>
                    <Link
                      href={`/dashboard/scams/${currentScam.id}`}
                      className="text-xl font-medium hover:text-primary transition-colors flex items-center gap-2"
                    >
                      {currentScam.title}
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="destructive">{currentScam.severity} severity</Badge>
                      <Badge variant="outline">{currentScam.category}</Badge>
                      <Badge variant="success">{currentScam.status}</Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground">{currentScam.description}</p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Avatar className="h-5 w-5">
                        <AvatarImage src="/placeholder-user.jpg" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <span>Reported by Community</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(currentScam.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col gap-4 md:w-48 justify-center">
                  <div className="flex flex-col items-center justify-center p-4 rounded-lg border bg-muted/50 flex-1">
                    <Shield className="h-8 w-8 text-primary mb-2" />
                    <div className="text-2xl font-bold">{currentScam.reports}</div>
                    <div className="text-xs text-muted-foreground">Reports</div>
                  </div>

                  <div className="flex gap-2 md:flex-col">
                    <Button className="flex-1 gap-2" asChild>
                      <Link href={`/dashboard/scams/${currentScam.id}`}>
                        <Shield className="h-4 w-4" />
                        <span>View Details</span>
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1 gap-2">
                      <ThumbsUp className="h-4 w-4" />
                      <span>Verify</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 text-foreground ml-2 hover:bg-background"
          onClick={goToPrevious}
          aria-label="Previous scam"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 text-foreground mr-2 hover:bg-background"
          onClick={goToNext}
          aria-label="Next scam"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-2 left-0 right-0">
        <div className="flex justify-center gap-1.5">
          {featuredScams.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentIndex ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"
              }`}
              aria-label={`Go to scam ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Card>
  )
}
