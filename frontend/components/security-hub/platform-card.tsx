import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

interface PlatformCardProps {
  name: string
  icon: string
  description: string
  difficulty: "easy" | "medium" | "hard"
  steps: number
  slug: string
}

export function PlatformCard({ name, icon, description, difficulty, steps, slug }: PlatformCardProps) {
  const difficultyColor = {
    easy: "bg-success/10 text-success border-success/20",
    medium: "bg-warning/10 text-warning border-warning/20",
    hard: "bg-destructive/10 text-destructive border-destructive/20",
  }

  const difficultyLabel = {
    easy: "Easy",
    medium: "Medium",
    hard: "Advanced",
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
              <img src={icon || "/placeholder.svg"} alt={name} className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="line-clamp-1">{name}</CardTitle>
              <CardDescription className="line-clamp-1">Security Guide</CardDescription>
            </div>
          </div>
          <Badge variant="outline" className={difficultyColor[difficulty]}>
            {difficultyLabel[difficulty]}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pb-2">
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardContent>

      <CardFooter className="pt-4 flex flex-col gap-4">
        <div className="flex justify-between w-full text-sm">
          <div className="flex items-center gap-1.5">
            <CheckCircle className="h-3.5 w-3.5 text-primary" />
            <span>{steps} steps</span>
          </div>
        </div>

        <Button asChild className="w-full">
          <Link href={`/dashboard/security-hub/${slug}`} className="flex items-center justify-between">
            <span>View Guide</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
