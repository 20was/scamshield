"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ChevronRight, ChevronLeft, ShieldCheck, Shield } from "lucide-react"
import { RiskResults } from "@/components/risk-assessment/risk-results"

// Define the questions for the assessment
const questions = [
  {
    id: "passwords",
    question: "How do you manage your passwords?",
    options: [
      { value: "same", label: "I use the same password for most accounts", score: 10 },
      { value: "variations", label: "I use variations of the same password", score: 7 },
      { value: "different", label: "I use different passwords for important accounts", score: 4 },
      { value: "manager", label: "I use a password manager with unique passwords", score: 0 },
    ],
  },
  {
    id: "2fa",
    question: "Do you use two-factor authentication (2FA)?",
    options: [
      { value: "never", label: "No, I don't use it", score: 10 },
      { value: "some", label: "Yes, but only on a few accounts", score: 5 },
      { value: "important", label: "Yes, on all important accounts", score: 2 },
      { value: "all", label: "Yes, on all accounts that offer it", score: 0 },
    ],
  },
  {
    id: "updates",
    question: "How often do you update your devices and software?",
    options: [
      { value: "never", label: "I rarely or never update", score: 10 },
      { value: "eventually", label: "I update eventually when prompted multiple times", score: 7 },
      { value: "important", label: "I update when I hear about important security fixes", score: 3 },
      { value: "immediately", label: "I update immediately when available", score: 0 },
    ],
  },
]

export function RiskAssessmentTool() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: string }>({})
  const [isComplete, setIsComplete] = useState(false)
  const [direction, setDirection] = useState(0)

  const totalSteps = questions.length
  const progress = (currentStep / totalSteps) * 100

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setDirection(1)
      setCurrentStep(currentStep + 1)
    } else {
      setIsComplete(true)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setDirection(-1)
      setCurrentStep(currentStep - 1)
    }
  }

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers({ ...answers, [questionId]: value })
  }

  const calculateResults = () => {
    let totalRisk = 0
    let questionCount = 0
    const categoryRisks: { [key: string]: { total: number; count: number } } = {}

    // Calculate total risk and category risks
    for (const question of questions) {
      const answer = answers[question.id]
      if (answer) {
        const option = question.options.find((opt) => opt.value === answer)
        if (option) {
          totalRisk += option.score
          questionCount++

          // Track category risks
          if (!categoryRisks[question.category]) {
            categoryRisks[question.category] = { total: 0, count: 0 }
          }
          categoryRisks[question.category].total += option.score
          categoryRisks[question.category].count++
        }
      }
    }

    // Calculate average risk score (0-100, where higher is more risk)
    const averageRisk = questionCount > 0 ? (totalRisk / (questionCount * 10)) * 100 : 0

    // Calculate category risk scores
    const categoryScores: { [key: string]: number } = {}
    for (const [category, data] of Object.entries(categoryRisks)) {
      categoryScores[category] = data.count > 0 ? (data.total / (data.count * 10)) * 100 : 0
    }

    return {
      overallRisk: averageRisk,
      categoryScores,
      completedQuestions: questionCount,
      totalQuestions: questions.length,
    }
  }

  const currentQuestion = questions[currentStep]
  const currentAnswer = currentQuestion ? answers[currentQuestion.id] : null
  const isAnswered = !!currentAnswer

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  if (isComplete) {
    return <RiskResults results={calculateResults()} />
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="border-2">
        <CardHeader className="border-b bg-muted/30">
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Risk Assessment Questionnaire
          </CardTitle>
          <CardDescription>Answer all questions honestly for the most accurate assessment</CardDescription>
          <div className="pt-2">
            <div className="flex justify-between text-xs mb-1">
              <span>
                Question {currentStep + 1} of {totalSteps}
              </span>
              <span>{progress.toFixed(0)}% complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>

        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentStep}
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
            <CardContent className="pt-6 pb-4">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">{currentQuestion.question}</h3>
                  {/* <div className="text-muted-foreground flex items-start gap-2 text-sm">
                    <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <p>Select the option that best describes your habits.</p>
                  </div> */}
                </div>

                <RadioGroup
                  value={currentAnswer || ""}
                  onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
                  className="space-y-3"
                >
                  {currentQuestion.options.map((option) => (
                    <div
                      key={option.value}
                      className={`flex items-center space-x-2 rounded-md border p-3 transition-all ${
                        currentAnswer === option.value
                          ? "border-primary bg-primary/5"
                          : "hover:border-muted-foreground/20 hover:bg-muted/50"
                      }`}
                    >
                      <RadioGroupItem value={option.value} id={`option-${currentQuestion.id}-${option.value}`} />
                      <Label htmlFor={`option-${currentQuestion.id}-${option.value}`} className="flex-1 cursor-pointer">
                        {option.label}
                      </Label>
                      {currentAnswer === option.value && (
                        <ShieldCheck className="h-4 w-4 text-primary animate-scale-in" />
                      )}
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>

            {/* <Separator /> */}

            <CardFooter className="flex justify-between p-6">
              <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0} className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                Previous
              </Button>
              <Button onClick={handleNext} disabled={!isAnswered} className="gap-2">
                {currentStep < totalSteps - 1 ? (
                  <>
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Complete Assessment
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </motion.div>
        </AnimatePresence>
      </Card>
    </div>
  )
}
