"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { scamTypes } from "@/lib/recovery-guide"
import { AlertCircle, CheckCircle2, Clock, ArrowRight, Shield, Phone, CreditCard } from "lucide-react"

interface RecoveryStepsProps {
  scamType: string | null
}

// Mock recovery steps data with more detailed information
const mockRecoverySteps = {
  "investment-fraud": [
    {
      id: "if-1",
      title: "Contact Your Financial Institution",
      description: "Report the fraud to your bank or investment firm immediately to freeze accounts or stop payments.",
      priority: "emergency",
      details: "Call the fraud department directly using the number on the back of your card or official website.",
    },
    {
      id: "if-2",
      title: "Document Everything",
      description: "Gather all communications, receipts, and evidence related to the fraudulent investment.",
      priority: "emergency",
      details: "Save emails, text messages, phone records, and any documents you received from the scammer.",
    },
    {
      id: "if-3",
      title: "Report to Regulatory Authorities",
      description: "File a complaint with the SEC, FINRA, or other relevant financial regulators.",
      priority: "urgent",
      details: "Visit the SEC website (sec.gov/tcr) to file a complaint about investment fraud.",
    },
    {
      id: "if-4",
      title: "File a Police Report",
      description: "Report the fraud to local law enforcement and get a copy of the report.",
      priority: "urgent",
      details: "A police report may be necessary for insurance claims or disputing fraudulent transactions.",
    },
    {
      id: "if-5",
      title: "Check Your Credit Reports",
      description: "Review your credit reports for unauthorized accounts or inquiries.",
      priority: "standard",
      details: "Request free credit reports from all three major credit bureaus through annualcreditreport.com.",
    },
    {
      id: "if-6",
      title: "Consult with a Financial Advisor",
      description: "Seek professional advice on recovering from financial losses and rebuilding your finances.",
      priority: "standard",
      details: "Look for a certified financial planner who specializes in fraud recovery.",
    },
  ],
  "credit-card-fraud": [
    {
      id: "ccf-1",
      title: "Contact Your Card Issuer",
      description: "Report the fraud to your credit card company immediately to dispute charges and get a new card.",
      priority: "emergency",
      details: "Call the number on the back of your card or the emergency fraud number provided by your bank.",
    },
    {
      id: "ccf-2",
      title: "Change Online Banking Credentials",
      description: "Update passwords and security questions for all financial accounts.",
      priority: "emergency",
      details: "Use strong, unique passwords and enable two-factor authentication where available.",
    },
    {
      id: "ccf-3",
      title: "Place a Fraud Alert",
      description: "Contact one of the three major credit bureaus to place a fraud alert on your credit report.",
      priority: "urgent",
      details:
        "A fraud alert is free and lasts for one year, making it harder for someone to open new accounts in your name.",
    },
    {
      id: "ccf-4",
      title: "Monitor Your Statements",
      description: "Review all recent transactions and continue monitoring for unauthorized charges.",
      priority: "urgent",
      details: "Set up transaction alerts to be notified of all future charges to your account.",
    },
    {
      id: "ccf-5",
      title: "File an FTC Report",
      description: "Report the identity theft to the Federal Trade Commission.",
      priority: "standard",
      details: "Visit IdentityTheft.gov to file a report and get a personalized recovery plan.",
    },
    {
      id: "ccf-6",
      title: "Consider a Credit Freeze",
      description: "Place a security freeze on your credit reports for maximum protection.",
      priority: "standard",
      details: "A credit freeze prevents new accounts from being opened in your name until you lift the freeze.",
    },
  ],
  phishing: [
    {
      id: "ph-1",
      title: "Change Compromised Passwords",
      description: "Immediately change passwords for any accounts that may have been compromised.",
      priority: "emergency",
      details: "Use a different device if possible, in case your current device is compromised.",
    },
    {
      id: "ph-2",
      title: "Enable Two-Factor Authentication",
      description: "Add an extra layer of security to your important accounts.",
      priority: "emergency",
      details: "Use an authenticator app rather than SMS for better security when possible.",
    },
    {
      id: "ph-3",
      title: "Contact Financial Institutions",
      description: "Alert your bank and credit card companies about potential fraud.",
      priority: "urgent",
      details: "Even if you don't see unauthorized charges yet, alerting them can help prevent fraud.",
    },
    {
      id: "ph-4",
      title: "Scan for Malware",
      description: "Run a full system scan with reputable antivirus software.",
      priority: "urgent",
      details: "Some phishing attacks install malware that can continue to steal information.",
    },
    {
      id: "ph-5",
      title: "Report the Phishing Attempt",
      description: "Forward phishing emails to reportphishing@apwg.org and to the impersonated company.",
      priority: "standard",
      details: "This helps authorities track and shut down phishing operations.",
    },
    {
      id: "ph-6",
      title: "Monitor Your Accounts",
      description: "Keep a close eye on your financial statements and credit reports.",
      priority: "standard",
      details: "Continue monitoring for several months, as fraudsters may wait before using your information.",
    },
  ],
}

export function RecoverySteps({ scamType }: RecoveryStepsProps) {
  const [completedSteps, setCompletedSteps] = useState<string[]>([])

  const selectedScam = scamType ? scamTypes.find((scam) => scam.id === scamType) : null

  // Get recovery steps for the selected scam type, or use a default if available
  const recoverySteps =
    scamType && mockRecoverySteps[scamType as keyof typeof mockRecoverySteps]
      ? mockRecoverySteps[scamType as keyof typeof mockRecoverySteps]
      : scamType === "identity-theft"
        ? mockRecoverySteps["credit-card-fraud"]
        : []

  const progress = recoverySteps.length ? Math.round((completedSteps.length / recoverySteps.length) * 100) : 0

  const toggleStep = (stepId: string) => {
    setCompletedSteps((prev) => (prev.includes(stepId) ? prev.filter((id) => id !== stepId) : [...prev, stepId]))
  }

  // Get the appropriate icon for the scam type
  const getScamIcon = () => {
    if (!selectedScam) return null

    switch (selectedScam.icon) {
      case "credit-card":
        return <CreditCard className="h-16 w-16 text-primary/80" />
      case "shield":
        return <Shield className="h-16 w-16 text-primary/80" />
      case "phone":
        return <Phone className="h-16 w-16 text-primary/80" />
      default:
        return <AlertCircle className="h-16 w-16 text-primary/80" />
    }
  }

  if (!selectedScam) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center text-center space-y-3 py-8">
            <AlertCircle className="h-12 w-12 text-muted-foreground" />
            <div className="space-y-1">
              <h3 className="text-lg font-medium">No scam type selected</h3>
              <p className="text-sm text-muted-foreground">
                Please select a scam type from the "Find a Guide" tab to see specific recovery steps.
              </p>
            </div>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => document.querySelector('[data-value="find-guide"]')?.click()}
            >
              Go to Find a Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-0">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recovery Steps for {selectedScam.name}</CardTitle>
              <CardDescription>Follow these steps to recover from this scam</CardDescription>
            </div>
            <div className="hidden md:block">{getScamIcon()}</div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{progress}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Alert
            variant="destructive"
            className="border-red-600/50 bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-200"
          >
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Emergency Actions</AlertTitle>
            <AlertDescription>Take these steps immediately to minimize damage</AlertDescription>
          </Alert>

          <div className="space-y-2">
            {recoverySteps
              .filter((step) => step.priority === "emergency")
              .map((step) => (
                <div
                  key={step.id}
                  className="flex items-start space-x-2 p-3 border rounded-md bg-red-50 dark:bg-red-900/10"
                >
                  <Checkbox
                    id={step.id}
                    checked={completedSteps.includes(step.id)}
                    onCheckedChange={() => toggleStep(step.id)}
                  />
                  <div className="space-y-1">
                    <label htmlFor={step.id} className="font-medium cursor-pointer text-red-900 dark:text-red-200">
                      {step.title}
                    </label>
                    <p className="text-sm text-red-800/80 dark:text-red-200/80">{step.description}</p>
                    <p className="text-xs text-red-700/70 dark:text-red-300/70 mt-1">{step.details}</p>
                  </div>
                </div>
              ))}
          </div>

          <h3 className="font-medium text-lg flex items-center mt-4">
            <Clock className="mr-2 h-5 w-5" />
            Within 24-48 Hours
          </h3>

          <div className="space-y-2">
            {recoverySteps
              .filter((step) => step.priority === "urgent")
              .map((step) => (
                <div key={step.id} className="flex items-start space-x-2 p-3 border rounded-md">
                  <Checkbox
                    id={step.id}
                    checked={completedSteps.includes(step.id)}
                    onCheckedChange={() => toggleStep(step.id)}
                  />
                  <div className="space-y-1">
                    <label htmlFor={step.id} className="font-medium cursor-pointer">
                      {step.title}
                    </label>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                    <p className="text-xs text-muted-foreground/80 mt-1">{step.details}</p>
                  </div>
                </div>
              ))}
          </div>

          <h3 className="font-medium text-lg flex items-center mt-4">
            <CheckCircle2 className="mr-2 h-5 w-5" />
            Follow-up Actions
          </h3>

          <div className="space-y-2">
            {recoverySteps
              .filter((step) => step.priority === "standard")
              .map((step) => (
                <div key={step.id} className="flex items-start space-x-2 p-3 border rounded-md">
                  <Checkbox
                    id={step.id}
                    checked={completedSteps.includes(step.id)}
                    onCheckedChange={() => toggleStep(step.id)}
                  />
                  <div className="space-y-1">
                    <label htmlFor={step.id} className="font-medium cursor-pointer">
                      {step.title}
                    </label>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                    <p className="text-xs text-muted-foreground/80 mt-1">{step.details}</p>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
