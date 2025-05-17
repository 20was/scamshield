import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Users } from "lucide-react"

interface SimulationCardProps {
  id: string
  title: string
  description: string
  category: string
  difficulty: "beginner" | "intermediate" | "advanced"
  duration: string
  completions: number
  image?: string
}

export function SimulationCard({
  id,
  title,
  description,
  category,
  difficulty,
  duration,
  completions,
  image,
}: SimulationCardProps) {
  const difficultyColor = {
    beginner: "bg-success/10 text-success border-success/20",
    intermediate: "bg-warning/10 text-warning border-warning/20",
    advanced: "bg-destructive/10 text-destructive border-destructive/20",
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-video bg-muted relative">
        {image ? (
          <img src={image || "/placeholder.svg"} alt={title} className="object-cover w-full h-full" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/20">
            <span className="text-primary/40 text-xl font-bold">{title.substring(0, 2).toUpperCase()}</span>
          </div>
        )}
        <Badge variant="outline" className={`absolute top-3 right-3 ${difficultyColor[difficulty]}`}>
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </Badge>
      </div>

      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="line-clamp-1">{title}</CardTitle>
            <CardDescription className="line-clamp-1">{category}</CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>

      <CardFooter className="border-t p-4 flex flex-col gap-4">
        <div className="flex justify-between w-full text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" />
            <span>{completions.toLocaleString()} completions</span>
          </div>
        </div>

        <Button asChild className="w-full">
          <Link href={`/dashboard/simulations/${id}`}>Start Simulation</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
