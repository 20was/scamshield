"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Shield, ThumbsUp, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import type { Scam } from "@/models/scam"

interface ScamVerificationProps {
  scam: Scam
}

// Mock verification data
const mockVerifications = [
  {
    id: "verification-1",
    userId: "user-1",
    userName: "Sarah Johnson",
    userAvatar: "/placeholder-user.jpg",
    isVerified: true,
    details: "I received this exact email with the same sender address and content. It's definitely a scam.",
    date: "2024-05-01T14:30:00Z",
  },
  {
    id: "verification-2",
    userId: "user-2",
    userName: "Michael Chen",
    userAvatar: "/placeholder-user.jpg",
    isVerified: true,
    details:
      "The website looks almost identical to the real bank site, but the URL is different. Very convincing scam.",
    date: "2024-05-01T16:45:00Z",
  },
  {
    id: "verification-3",
    userId: "user-3",
    userName: "Priya Patel",
    userAvatar: "/placeholder-user.jpg",
    isVerified: true,
    details: "I can confirm this is a scam. They asked for my social security number and banking details.",
    date: "2024-05-02T09:15:00Z",
  },
]

export function ScamVerification({ scam }: ScamVerificationProps) {
  const { toast } = useToast()
  const [verifications] = useState(mockVerifications)
  const [isVerified, setIsVerified] = useState<boolean | null>(null)
  const [verificationDetails, setVerificationDetails] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const totalVerifications = verifications.length
  const positiveVerifications = verifications.filter((v) => v.isVerified).length
  const verificationPercentage =
    totalVerifications > 0 ? Math.round((positiveVerifications / totalVerifications) * 100) : 0

  const handleSubmitVerification = async () => {
    if (isVerified === null) {
      toast({
        title: "Please select an option",
        description: "Indicate whether you've encountered this scam or not",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Verification submitted",
        description: "Thank you for helping verify this scam report",
      })

      // Reset form
      setIsVerified(null)
      setVerificationDetails("")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit verification. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Verification Status
        </CardTitle>
        <CardDescription>Help verify this scam by sharing your experience</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-muted rounded-lg p-4 border"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium">Community Verification</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <span>
                  {positiveVerifications} out of {totalVerifications} users verified this scam
                </span>
              </div>
              <Progress value={verificationPercentage} className="h-2" />
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <div>
                <div className="text-sm font-medium">{verificationPercentage}% Verified</div>
                <div className="text-xs text-muted-foreground">{totalVerifications} verifications</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Recent Verifications</h3>

          {verifications.map((verification, index) => (
            <motion.div
              key={verification.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="flex gap-4 pb-4 border-b last:border-b-0 last:pb-0"
            >
              <Avatar className="h-10 w-10">
                <AvatarImage src={verification.userAvatar || "/placeholder.svg"} alt={verification.userName} />
                <AvatarFallback>{verification.userName.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{verification.userName}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-success/10 text-success flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Verified
                  </span>
                </div>

                <p className="text-sm mt-1 text-muted-foreground">{verification.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex flex-col space-y-4 pt-4 border-t">
        <div className="w-full">
          <h3 className="text-lg font-medium mb-4">Submit Your Verification</h3>

          <div className="space-y-4">
            <div>
              <RadioGroup
                value={isVerified === null ? undefined : isVerified ? "yes" : "no"}
                onValueChange={(value) => setIsVerified(value === "yes")}
              >
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" />
                    <Label htmlFor="yes" className="flex items-center gap-2">
                      <ThumbsUp className="h-4 w-4 text-success" />
                      Yes, I've encountered this scam
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" />
                    <Label htmlFor="no">No, I haven't seen this scam</Label>
                  </div>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="verification-details">Additional Details (Optional)</Label>
              <Textarea
                id="verification-details"
                placeholder="Share your experience with this scam..."
                value={verificationDetails}
                onChange={(e) => setVerificationDetails(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div className="flex justify-end">
              <Button onClick={handleSubmitVerification} disabled={isVerified === null || isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Verification"}
              </Button>
            </div>
          </div>
        </div>
      </CardFooter>
    </div>
  )
}
