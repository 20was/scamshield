"use client"

import { useState } from "react"
import Link from "next/link"
import { format } from "date-fns"
import { motion } from "framer-motion"
import {
  AlertTriangle,
  Calendar,
  ExternalLink,
  Flag,
  Globe,
  Mail,
  MessageSquare,
  Share2,
  Shield,
  ThumbsUp,
  User,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"
import type { Scam } from "@/models/scam"

interface ScamDetailViewProps {
  scam: Scam
}

export function ScamDetailView({ scam }: ScamDetailViewProps) {
  const { toast } = useToast()
  const [isReporting, setIsReporting] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)

  const formattedDate = format(new Date(scam.date), "MMMM d, yyyy 'at' h:mm a")

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `ScamShield: ${scam.title}`,
          text: `Check out this scam report on ScamShield: ${scam.title}`,
          url: window.location.href,
        })
      } catch (error) {
        console.error("Error sharing:", error)
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href)
      toast({
        title: "Link copied to clipboard",
        description: "You can now share this scam report with others",
      })
    }
  }

  const handleReport = async () => {
    setIsReporting(true)
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "Report submitted",
        description: "Thank you for reporting this content. Our team will review it.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit report. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsReporting(false)
    }
  }

  const handleVerify = async () => {
    setIsVerifying(true)
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast({
        title: "Verification submitted",
        description: "Thank you for verifying this scam report.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit verification. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Card className="overflow-hidden">
        <CardHeader className="bg-primary/5 border-b">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                {scam.title}
              </CardTitle>
              <CardDescription className="mt-2 flex flex-wrap items-center gap-2">
                <Badge
                  variant={
                    scam.severity === "high" ? "destructive" : scam.severity === "medium" ? "warning" : "outline"
                  }
                  className="animate-scale-in"
                >
                  {scam.severity} severity
                </Badge>
                <Badge variant="secondary" className="animate-scale-in">
                  {scam.category}
                </Badge>
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
                  className="animate-scale-in"
                >
                  {scam.status}
                </Badge>
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={handleShare}>
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share this scam report</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" onClick={handleReport} disabled={isReporting}>
                      <Flag className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Report inaccurate information</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="default" className="gap-2" onClick={handleVerify} disabled={isVerifying}>
                      <ThumbsUp className="h-4 w-4" />
                      <span>Verify</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Confirm you've encountered this scam</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground whitespace-pre-line">{scam.description}</p>
              </div>

              {scam.evidence && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                  <h3 className="text-lg font-semibold mb-2">Evidence</h3>
                  <p className="text-muted-foreground whitespace-pre-line">{scam.evidence}</p>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-destructive/10 rounded-lg p-4 border border-destructive/20"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-destructive">Warning Signs</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• Requests for personal information or payment</li>
                      <li>• Creates a false sense of urgency</li>
                      <li>• Contains spelling or grammatical errors</li>
                      <li>• Offers that seem too good to be true</li>
                      <li>• Unsolicited contact from unknown sources</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Scam Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Reported on:</span>
                    <span className="font-medium">{formattedDate}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Reports:</span>
                    <span className="font-medium">{scam.reports}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Comments:</span>
                    <span className="font-medium">24</span>
                  </div>

                  <Separator />

                  {scam.url && (
                    <div className="flex items-start gap-2 text-sm">
                      <Globe className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div className="flex-1">
                        <span className="text-muted-foreground block">Website:</span>
                        <a
                          href={scam.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-primary hover:underline flex items-center gap-1"
                        >
                          {scam.url}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  )}

                  {scam.contactInfo && (
                    <div className="flex items-start gap-2 text-sm">
                      <Mail className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div className="flex-1">
                        <span className="text-muted-foreground block">Contact:</span>
                        <span className="font-medium">{scam.contactInfo}</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">What to do</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Shield className="h-3 w-3 text-primary" />
                      </div>
                      <span>Do not click on suspicious links or download attachments</span>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-start gap-2"
                    >
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Shield className="h-3 w-3 text-primary" />
                      </div>
                      <span>Report the scam to relevant authorities</span>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-start gap-2"
                    >
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Shield className="h-3 w-3 text-primary" />
                      </div>
                      <span>Alert friends and family about this scam</span>
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-start gap-2"
                    >
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Shield className="h-3 w-3 text-primary" />
                      </div>
                      <span>Monitor your accounts for suspicious activity</span>
                    </motion.li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>

        <CardFooter className="bg-muted/30 border-t px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
            <div className="text-sm text-muted-foreground">
              <Link href="/dashboard/scams" className="text-primary hover:underline">
                &larr; Back to all scams
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={handleReport} disabled={isReporting}>
                <Flag className="h-4 w-4 mr-2" />
                {isReporting ? "Reporting..." : "Report Issue"}
              </Button>
              <Button onClick={handleVerify} disabled={isVerifying}>
                <ThumbsUp className="h-4 w-4 mr-2" />
                {isVerifying ? "Verifying..." : "Verify Scam"}
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
