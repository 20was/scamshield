"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { checkupItems } from "@/lib/security-checkup"
import { ArrowLeft, Shield, AlertTriangle, CheckCircle2, Laptop, Lock, Eye } from "lucide-react"

interface CheckupResultsProps {
  completedItems: string[]
  totalItems: number
  deviceProgress: number
  accountProgress: number
  privacyProgress: number
  onBackToCheckup: () => void
}

export function CheckupResults({
  completedItems,
  totalItems,
  deviceProgress,
  accountProgress,
  privacyProgress,
  onBackToCheckup,
}: CheckupResultsProps) {
  const overallProgress = Math.round((completedItems.length / totalItems) * 100)
  const overallScore = Math.round(deviceProgress * 0.3 + accountProgress * 0.5 + privacyProgress * 0.2)

  const getScoreColor = (score: number) => {
    if (score < 30) return "text-red-500"
    if (score < 60) return "text-amber-500"
    if (score < 80) return "text-blue-500"
    return "text-green-500"
  }

  const getScoreText = (score: number) => {
    if (score < 30) return "Critical"
    if (score < 60) return "Needs Improvement"
    if (score < 80) return "Good"
    return "Excellent"
  }

  const getScoreIcon = (score: number) => {
    if (score < 60) return <AlertTriangle className="h-5 w-5" />
    return <CheckCircle2 className="h-5 w-5" />
  }

  const getRecommendations = () => {
    const recommendations = []

    if (deviceProgress < 70) {
      recommendations.push("Update your device security by completing the Device Security checklist items")
    }

    if (accountProgress < 70) {
      recommendations.push(
        "Strengthen your account security by enabling two-factor authentication and using strong passwords",
      )
    }

    if (privacyProgress < 70) {
      recommendations.push(
        "Enhance your privacy protection by reviewing privacy settings on your accounts and browsers",
      )
    }

    if (recommendations.length === 0) {
      recommendations.push("Continue to maintain your excellent security practices and stay vigilant")
    }

    return recommendations
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Security Check-up Results</CardTitle>
            <Button variant="outline" size="sm" onClick={onBackToCheckup}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Check-up
            </Button>
          </div>
          <CardDescription>Your security score and recommendations based on your check-up</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-center justify-center text-center space-y-2 py-4">
            <div className={`text-6xl font-bold ${getScoreColor(overallScore)}`}>{overallScore}</div>
            <div className="flex items-center space-x-1 text-lg font-medium">
              <span className={getScoreColor(overallScore)}>{getScoreIcon(overallScore)}</span>
              <span>{getScoreText(overallScore)}</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Your security score is based on the security checks you've completed, with account security weighted most
              heavily.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center">
                  <Laptop className="mr-2 h-4 w-4" />
                  Device Security
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Score</span>
                    <span className={getScoreColor(deviceProgress)}>{deviceProgress}%</span>
                  </div>
                  <Progress value={deviceProgress} className="h-2" />
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <p className="text-xs text-muted-foreground">
                  {completedItems.filter((id) => id.startsWith("device-")).length} of {checkupItems.device.length} items
                  completed
                </p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center">
                  <Lock className="mr-2 h-4 w-4" />
                  Account Security
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Score</span>
                    <span className={getScoreColor(accountProgress)}>{accountProgress}%</span>
                  </div>
                  <Progress value={accountProgress} className="h-2" />
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <p className="text-xs text-muted-foreground">
                  {completedItems.filter((id) => id.startsWith("account-")).length} of {checkupItems.account.length}{" "}
                  items completed
                </p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base flex items-center">
                  <Eye className="mr-2 h-4 w-4" />
                  Privacy Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Score</span>
                    <span className={getScoreColor(privacyProgress)}>{privacyProgress}%</span>
                  </div>
                  <Progress value={privacyProgress} className="h-2" />
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <p className="text-xs text-muted-foreground">
                  {completedItems.filter((id) => id.startsWith("privacy-")).length} of {checkupItems.privacy.length}{" "}
                  items completed
                </p>
              </CardFooter>
            </Card>
          </div>

          <Alert>
            <Shield className="h-4 w-4" />
            <AlertTitle>Security Recommendations</AlertTitle>
            <AlertDescription>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                {getRecommendations().map((recommendation, index) => (
                  <li key={index}>{recommendation}</li>
                ))}
              </ul>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}
