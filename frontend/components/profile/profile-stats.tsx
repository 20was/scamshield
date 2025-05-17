import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, ThumbsUp, Eye } from "lucide-react"

export function ProfileStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Contribution Stats</CardTitle>
        <CardDescription>Your impact on the ScamShield community</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center rounded-lg border p-4">
            <Shield className="h-8 w-8 text-primary mb-2" />
            <div className="text-2xl font-bold">24</div>
            <div className="text-xs text-muted-foreground">Scams Reported</div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg border p-4">
            <ThumbsUp className="h-8 w-8 text-primary mb-2" />
            <div className="text-2xl font-bold">156</div>
            <div className="text-xs text-muted-foreground">Verifications</div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg border p-4">
            <Eye className="h-8 w-8 text-primary mb-2" />
            <div className="text-2xl font-bold">1.2K</div>
            <div className="text-xs text-muted-foreground">Profile Views</div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-lg border p-4">
            <Award className="h-8 w-8 text-primary mb-2" />
            <div className="text-2xl font-bold">3</div>
            <div className="text-xs text-muted-foreground">Badges Earned</div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <Shield className="h-3 w-3" /> Guardian
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Award className="h-3 w-3" /> Top Contributor
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <ThumbsUp className="h-3 w-3" /> Trusted Verifier
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
