"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChevronRight, ChevronLeft, CheckCircle } from "lucide-react"

interface Step {
  title: string
  description: string
  instructions: string[]
  image: string
}

interface SecurityGuideProps {
  steps: Step[]
}

export function SecurityGuide({ steps }: SecurityGuideProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const step = steps[currentStep]
  const isFirstStep = currentStep === 0
  const isLastStep = currentStep === steps.length - 1
  const progress = (completedSteps.length / steps.length) * 100

  const handleNext = () => {
    if (!isLastStep) {
      setCurrentStep(currentStep + 1)
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep])
      }
    }
  }

  const handlePrevious = () => {
    if (!isFirstStep) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep])
    }
  }

  const handleStepClick = (index: number) => {
    setCurrentStep(index)
  }

  return (
    <div className="space-y-6">
      {/* Progress indicator */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span>
            {completedSteps.length} of {steps.length} steps completed
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Step navigation */}
      <div className="flex flex-wrap gap-2">
        {steps.map((s, index) => (
          <Button
            key={index}
            variant={currentStep === index ? "default" : "outline"}
            size="sm"
            className="relative"
            onClick={() => handleStepClick(index)}
          >
            {completedSteps.includes(index) && (
              <CheckCircle className="h-3 w-3 absolute -top-1 -right-1 text-success" />
            )}
            Step {index + 1}
          </Button>
        ))}
      </div>

      {/* Current step */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>{step.title}</CardTitle>
              <CardDescription>{step.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step image */}
              <div className="rounded-md overflow-hidden border">
                <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-auto object-cover" />
              </div>

              {/* Instructions */}
              <div className="space-y-4">
                <h3 className="font-medium">Instructions:</h3>
                <ol className="space-y-3 list-decimal list-inside">
                  {step.instructions.map((instruction, index) => (
                    <li key={index} className="text-muted-foreground">
                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={handlePrevious} disabled={isFirstStep}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              <div className="flex gap-2">
                {!isLastStep ? (
                  <>
                    <Button
                      variant="outline"
                      onClick={handleComplete}
                      className={
                        completedSteps.includes(currentStep) ? "bg-success/10 text-success hover:bg-success/20" : ""
                      }
                    >
                      {completedSteps.includes(currentStep) ? (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Completed
                        </>
                      ) : (
                        "Mark Complete"
                      )}
                    </Button>
                    <Button onClick={handleNext}>
                      Next
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={handleComplete}
                    className={
                      completedSteps.includes(currentStep) ? "bg-success/10 text-success hover:bg-success/20" : ""
                    }
                  >
                    {completedSteps.includes(currentStep) ? (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Completed
                      </>
                    ) : (
                      "Mark Complete"
                    )}
                  </Button>
                )}
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
