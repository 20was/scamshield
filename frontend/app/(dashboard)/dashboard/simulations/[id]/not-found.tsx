import Link from "next/link"
import { AlertTriangle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function SimulationNotFound() {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-muted rounded-full">
              <AlertTriangle className="h-8 w-8 text-warning" />
            </div>
          </div>
          <CardTitle className="text-2xl">Simulation Not Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-muted-foreground">
            The simulation you're looking for doesn't exist or may have been removed.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/dashboard/simulations">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Simulations
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
