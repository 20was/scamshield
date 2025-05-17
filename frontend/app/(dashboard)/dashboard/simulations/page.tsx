import type { Metadata } from "next"
import { SimulationList } from "@/components/simulations/simulation-list"
import { SimulationIntro } from "@/components/simulations/simulation-intro"

export const metadata: Metadata = {
  title: "Scam Simulations - ScamShield",
  description: "Practice identifying scams in a safe environment",
}

export default function SimulationsPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold">Interactive Scam Simulations</h1>
        <p className="text-muted-foreground mt-1">Practice identifying scams in a safe, controlled environment</p>
      </div>

      <SimulationIntro />
      <SimulationList />
    </div>
  )
}
