"use client"

import { motion } from "framer-motion"
import { AlertTriangle, CheckCircle2, Eye, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function SimulationIntro() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Learn By Doing</h2>
            <p className="text-muted-foreground mb-4">
              Our interactive simulations put you in realistic scenarios where you'll need to identify red flags and
              make decisions about potential scams—all in a completely safe environment.
            </p>
            <p className="text-muted-foreground mb-4">
              Each simulation teaches you to recognize different scam techniques and helps you build the skills needed
              to protect yourself online.
            </p>

            <div className="space-y-3 mt-6">
              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="mt-1 bg-primary/10 p-1 rounded-full">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium">100% Safe Environment</p>
                  <p className="text-sm text-muted-foreground">Practice with no real-world consequences</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="mt-1 bg-success/10 p-1 rounded-full">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                </div>
                <div>
                  <p className="font-medium">Immediate Feedback</p>
                  <p className="text-sm text-muted-foreground">Learn what you missed and how to improve</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="mt-1 bg-warning/10 p-1 rounded-full">
                  <AlertTriangle className="h-4 w-4 text-warning" />
                </div>
                <div>
                  <p className="font-medium">Realistic Scenarios</p>
                  <p className="text-sm text-muted-foreground">Based on real scams reported by our community</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="mt-1 bg-info/10 p-1 rounded-full">
                  <Eye className="h-4 w-4 text-info" />
                </div>
                <div>
                  <p className="font-medium">Track Your Progress</p>
                  <p className="text-sm text-muted-foreground">Build skills and see your improvement over time</p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg"></div>
            <div className="relative p-6">
              <h3 className="text-xl font-semibold mb-4">How It Works</h3>

              <ol className="space-y-4 ml-6 list-decimal">
                <li className="text-muted-foreground">
                  <span className="text-foreground font-medium">Choose a scenario</span> - Select from different types
                  of scams you want to practice identifying
                </li>
                <li className="text-muted-foreground">
                  <span className="text-foreground font-medium">Enter the simulation</span> - Interact with emails,
                  websites, or messages that mimic real scam attempts
                </li>
                <li className="text-muted-foreground">
                  <span className="text-foreground font-medium">Make decisions</span> - Identify suspicious elements and
                  decide how to respond
                </li>
                <li className="text-muted-foreground">
                  <span className="text-foreground font-medium">Get feedback</span> - Learn what you caught and what you
                  missed, with detailed explanations
                </li>
                <li className="text-muted-foreground">
                  <span className="text-foreground font-medium">Learn and improve</span> - Practice regularly to sharpen
                  your scam detection skills
                </li>
              </ol>

              <div className="bg-background/80 backdrop-blur-sm p-4 mt-6 rounded-lg border border-primary/20">
                <p className="text-sm font-medium flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  Start with the "Phishing Email Basics" simulation if you're new!
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
