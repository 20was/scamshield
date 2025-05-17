import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SimulationPlayer } from "@/components/simulations/simulation-player"

interface SimulationPageProps {
  params: {
    id: string
  }
}

// This would be dynamic in production, but since we don't have a backend, we'll use this for metadata
const simulationTitles: Record<string, string> = {
  "phishing-email-basics": "Phishing Email Basics - Interactive Simulation",
  "fake-shopping-website": "Fake Shopping Website - Interactive Simulation",
  "social-media-impersonation": "Social Media Impersonation - Interactive Simulation",
  "banking-fraud-sms": "Banking Fraud SMS - Interactive Simulation",
  "tech-support-scam": "Tech Support Scam - Interactive Simulation",
  "investment-fraud": "Investment Fraud - Interactive Simulation",
  "dating-scam": "Dating Scam - Interactive Simulation",
  "job-offer-scam": "Job Offer Scam - Interactive Simulation",
}

export function generateMetadata({ params }: SimulationPageProps): Metadata {
  const title = simulationTitles[params.id]

  if (!title) {
    return {
      title: "Simulation Not Found - ScamShield",
    }
  }

  return {
    title: `${title} - ScamShield`,
    description: "Practice identifying scams in a safe environment",
  }
}

export default function SimulationPage({ params }: SimulationPageProps) {
  // In a real app, we would fetch the simulation data from a database
  // For now, we'll just check if it exists in our list
  if (!simulationTitles[params.id]) {
    notFound()
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <SimulationPlayer simulationId={params.id} />
    </div>
  )
}
