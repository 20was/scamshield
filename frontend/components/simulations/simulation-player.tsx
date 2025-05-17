"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Mail, Shield, AlertTriangle, CheckCircle2, XCircle, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

// Mock simulation data - this would come from an API in a real app
const PHISHING_EMAIL_SIMULATION = {
  id: "phishing-email-basics",
  title: "Phishing Email Basics",
  steps: [
    {
      type: "intro",
      title: "Phishing Email Basics",
      content: "In this simulation, you'll review an email and identify phishing indicators.",
      instruction: "Look carefully at the email and click on any suspicious elements.",
    },
    {
      type: "email",
      from: "security@amaz0n-secure.com",
      to: "customer@example.com",
      subject: "Urgent: Your Amazon Account Has Been Compromised",
      date: "Today, 10:23 AM",
      content: `
        <p>Dear Valued Customer,</p>
        <p>We have detected unusual activity on your Amazon account. Your account has been temporarily limited until we can verify your information.</p>
        <p>You must verify your account information immediately or your account will be permanently suspended.</p>
        <p>Please click the link below to verify your account:</p>
        <p><a href="#" class="text-blue-500 underline">https://amazonsecurity-verify.com/account</a></p>
        <p>If you do not verify your account within 24 hours, your account will be permanently suspended.</p>
        <p>Thank you for your cooperation.</p>
        <p>Best regards,</p>
        <p>Amazon Security Team<br />© 2023 Amazon Inc.</p>
      `,
      clues: [
        {
          id: "sender",
          element: "from",
          hint: "Check the email address carefully",
          explanation:
            "The sender's email is 'security@amaz0n-secure.com' which uses a zero (0) instead of the letter 'o' and adds '-secure' to look legitimate. Real Amazon emails come from domains ending with @amazon.com.",
        },
        {
          id: "urgency",
          element: "content",
          position: { top: "30%", left: "50%" },
          hint: "Is this creating a sense of urgency?",
          explanation:
            "The email creates false urgency by claiming your account will be suspended. This is a common tactic to make you act quickly without thinking.",
        },
        {
          id: "link",
          element: "content",
          position: { top: "50%", left: "40%" },
          hint: "Hover over the link and check the URL",
          explanation:
            "The link points to 'amazonsecurity-verify.com' which is not an official Amazon domain. Legitimate Amazon links would direct to amazon.com or an obvious subdomain.",
        },
        {
          id: "greeting",
          element: "content",
          position: { top: "15%", left: "20%" },
          hint: "How is the email addressing you?",
          explanation:
            "The greeting is generic ('Dear Valued Customer') rather than using your name, which legitimate Amazon emails would typically include if you have an account.",
        },
      ],
    },
    {
      type: "summary",
      title: "Great job spotting the phishing attempts!",
      foundClues: [],
      missedClues: [],
      tips: [
        "Always check the sender's email address for misspellings or unusual domains",
        "Be suspicious of urgent requests that pressure you to act quickly",
        "Hover over links to see where they really go before clicking",
        "Legitimate companies usually address you by name if you have an account",
        "When in doubt, go directly to the website by typing the URL in your browser instead of clicking links",
      ],
    },
  ],
}

// We'd have more simulation data here for other simulations

export function SimulationPlayer({ simulationId }: { simulationId: string }) {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [foundClues, setFoundClues] = useState<string[]>([])
  const [revealedClues, setRevealedClues] = useState<string[]>([])
  const [isComplete, setIsComplete] = useState(false)

  // For this demo, we'll just use the phishing email simulation
  // In a real app, we'd fetch the right simulation based on the ID
  const simulation = PHISHING_EMAIL_SIMULATION

  if (!simulation) {
    router.push("/dashboard/simulations")
    return null
  }

  const step = simulation.steps[currentStep]
  const totalSteps = simulation.steps.length
  const progress = ((currentStep + 1) / totalSteps) * 100

  const handleNextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1)

      // If moving to the summary, prepare the summary data
      if (simulation.steps[currentStep + 1].type === "summary") {
        const emailStep = simulation.steps.find((s) => s.type === "email") as any
        if (emailStep) {
          const allClues = emailStep.clues.map((c: any) => c.id)
          const missed = allClues.filter((id) => !foundClues.includes(id))

          // Update the summary step with found and missed clues
          simulation.steps[currentStep + 1].foundClues = foundClues
          simulation.steps[currentStep + 1].missedClues = missed

          setIsComplete(true)
        }
      }
    }
  }

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleClueClick = (clueId: string) => {
    if (!foundClues.includes(clueId)) {
      setFoundClues([...foundClues, clueId])
    }

    if (!revealedClues.includes(clueId)) {
      setRevealedClues([...revealedClues, clueId])
    }
  }

  const handleRevealAllClues = () => {
    const emailStep = simulation.steps.find((s) => s.type === "email") as any
    if (emailStep) {
      const allClues = emailStep.clues.map((c: any) => c.id)
      setRevealedClues(allClues)
    }
  }

  const renderStep = () => {
    switch (step.type) {
      case "intro":
        return (
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-6 py-8"
            >
              <div className="inline-flex p-4 bg-muted rounded-full">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl font-bold">{step.title}</h1>
              <p className="text-xl text-muted-foreground">{step.content}</p>

              <div className="bg-muted/50 border rounded-lg p-6 mt-8 text-left">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Instructions:
                </h3>
                <p className="text-muted-foreground">{step.instruction}</p>
              </div>

              <div className="pt-6">
                <Button size="lg" onClick={handleNextStep} className="gap-2">
                  Start Simulation
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        )

      case "email":
        const emailClues = step.clues || []
        const allFound = emailClues.every((clue) => foundClues.includes(clue.id))

        return (
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-background border rounded-lg shadow-sm overflow-hidden">
                {/* Email Header */}
                <div className="border-b p-4">
                  <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5">
                    <div className="text-muted-foreground text-sm font-medium">From:</div>
                    <div className="text-sm relative group">
                      <span
                        className={cn(
                          "cursor-pointer",
                          revealedClues.includes("sender") && "bg-warning/20 px-1 py-0.5 rounded",
                        )}
                        onClick={() => handleClueClick("sender")}
                      >
                        {step.from}
                      </span>
                      {revealedClues.includes("sender") && (
                        <div className="absolute z-10 top-full left-0 mt-2 w-64 p-3 bg-background border rounded-md shadow-lg text-xs">
                          <div className="font-medium text-warning flex items-center gap-1.5 mb-1">
                            <AlertTriangle className="h-3 w-3" />
                            Phishing Indicator
                          </div>
                          <p>{emailClues.find((c) => c.id === "sender")?.explanation}</p>
                        </div>
                      )}
                    </div>
                    <div className="text-muted-foreground text-sm font-medium">To:</div>
                    <div className="text-sm">{step.to}</div>
                    <div className="text-muted-foreground text-sm font-medium">Subject:</div>
                    <div className="text-sm font-medium">{step.subject}</div>
                    <div className="text-muted-foreground text-sm font-medium">Date:</div>
                    <div className="text-sm">{step.date}</div>
                  </div>
                </div>

                {/* Email Body */}
                <div className="p-6 relative email-content">
                  {/* We'll use dangerouslySetInnerHTML for the email content in this demo
                      In a real app, you'd want a more secure approach */}
                  <div
                    className="prose prose-sm max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: step.content }}
                  />

                  {/* Overlaid clickable areas for clues that aren't specific elements */}
                  {emailClues
                    .filter((c) => c.element === "content" && c.position)
                    .map((clue) => (
                      <div
                        key={clue.id}
                        className={cn(
                          "absolute cursor-pointer rounded-full",
                          revealedClues.includes(clue.id)
                            ? "bg-warning/20 w-6 h-6 flex items-center justify-center"
                            : "bg-transparent w-12 h-12",
                          !revealedClues.includes(clue.id) &&
                            foundClues.includes(clue.id) &&
                            "border-2 border-warning animate-pulse",
                        )}
                        style={{
                          top: clue.position.top,
                          left: clue.position.left,
                          transform: "translate(-50%, -50%)",
                        }}
                        onClick={() => handleClueClick(clue.id)}
                      >
                        {revealedClues.includes(clue.id) && <AlertTriangle className="h-4 w-4 text-warning" />}

                        {revealedClues.includes(clue.id) && (
                          <div className="absolute z-10 top-full left-1/2 -translate-x-1/2 mt-2 w-64 p-3 bg-background border rounded-md shadow-lg text-xs">
                            <div className="font-medium text-warning flex items-center gap-1.5 mb-1">
                              <AlertTriangle className="h-3 w-3" />
                              Phishing Indicator
                            </div>
                            <p>{clue.explanation}</p>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>

              <div className="flex items-center justify-between border rounded-lg p-4 bg-muted/30">
                <div className="text-sm">
                  {foundClues.length === 0 ? (
                    <span className="text-muted-foreground">Click on suspicious elements...</span>
                  ) : (
                    <span>
                      Found <span className="font-medium">{foundClues.length}</span> of {emailClues.length} issues
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handleRevealAllClues}>
                    Reveal All Clues
                  </Button>
                  <Button size="sm" onClick={handleNextStep} disabled={!allFound && foundClues.length === 0}>
                    {allFound ? "Continue" : "Skip"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )

      case "summary":
        return (
          <div className="max-w-3xl mx-auto">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-flex p-3 bg-success/10 rounded-full">
                  <CheckCircle2 className="h-8 w-8 text-success" />
                </div>
                <h1 className="text-3xl font-bold">{step.title}</h1>
                <p className="text-muted-foreground">
                  You found {step.foundClues.length} out of {step.foundClues.length + step.missedClues.length} phishing
                  indicators
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Found clues */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-success/10 p-4 border-b">
                    <h3 className="font-medium flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-success" />
                      Indicators You Found
                    </h3>
                  </div>
                  <div className="p-4 space-y-3">
                    {step.foundClues.length > 0 ? (
                      step.foundClues.map((clueId) => {
                        const clue = simulation.steps
                          .find((s) => s.type === "email")
                          ?.clues.find((c) => c.id === clueId)

                        return (
                          <div key={clueId} className="text-sm border-b pb-3 last:border-0 last:pb-0">
                            <div className="font-medium mb-1">{clue?.hint}</div>
                            <p className="text-muted-foreground">{clue?.explanation}</p>
                          </div>
                        )
                      })
                    ) : (
                      <p className="text-sm text-muted-foreground">You didn't find any indicators.</p>
                    )}
                  </div>
                </div>

                {/* Missed clues */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-destructive/10 p-4 border-b">
                    <h3 className="font-medium flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-destructive" />
                      Indicators You Missed
                    </h3>
                  </div>
                  <div className="p-4 space-y-3">
                    {step.missedClues.length > 0 ? (
                      step.missedClues.map((clueId) => {
                        const clue = simulation.steps
                          .find((s) => s.type === "email")
                          ?.clues.find((c) => c.id === clueId)

                        return (
                          <div key={clueId} className="text-sm border-b pb-3 last:border-0 last:pb-0">
                            <div className="font-medium mb-1">{clue?.hint}</div>
                            <p className="text-muted-foreground">{clue?.explanation}</p>
                          </div>
                        )
                      })
                    ) : (
                      <p className="text-sm text-muted-foreground">Great job! You found all the indicators.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Tips section */}
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-primary/10 p-4 border-b">
                  <h3 className="font-medium flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    Key Takeaways
                  </h3>
                </div>
                <div className="p-4">
                  <ul className="space-y-2">
                    {step.tips.map((tip, index) => (
                      <li key={index} className="flex gap-2 text-sm">
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1"></div>
                        </div>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <Button onClick={() => router.push("/dashboard/simulations")} className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Simulations
                </Button>
              </div>
            </motion.div>
          </div>
        )

      default:
        return <div>Unknown step type</div>
    }
  }

  return (
    <div className="space-y-8">
      {/* Progress bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span>
            {currentStep + 1} of {totalSteps}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Step content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {renderStep()}
      </motion.div>
    </div>
  )
}
