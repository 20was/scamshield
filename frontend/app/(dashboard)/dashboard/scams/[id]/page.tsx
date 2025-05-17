import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { ScamDetailView } from "@/components/scams/scam-detail-view"
import { ScamComments } from "@/components/scams/scam-comments"
import { ScamVerification } from "@/components/scams/scam-verification"
import { RelatedScams } from "@/components/scams/related-scams"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { scamsService } from "@/services/scams-service"

interface ScamPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ScamPageProps): Promise<Metadata> {
  try {
    const scam = await scamsService.getScamById(params.id)

    if (!scam) {
      return {
        title: "Scam Not Found - ScamShield",
        description: "The requested scam report could not be found",
      }
    }

    return {
      title: `${scam.title} - ScamShield`,
      description: `Details about ${scam.title} scam - Category: ${scam.category}, Severity: ${scam.severity}`,
    }
  } catch (error) {
    return {
      title: "Scam Details - ScamShield",
      description: "View detailed information about this scam report",
    }
  }
}

export default async function ScamDetailPage({ params }: ScamPageProps) {
  try {
    const scam = await scamsService.getScamById(params.id)

    if (!scam) {
      notFound()
    }

    return (
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">{scam.title}</h1>
        </div>

        <ScamDetailView scam={scam} />

        <Tabs defaultValue="comments" className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="comments" className="flex-1 sm:flex-none">
              Comments
            </TabsTrigger>
            <TabsTrigger value="verification" className="flex-1 sm:flex-none">
              Verification
            </TabsTrigger>
            <TabsTrigger value="related" className="flex-1 sm:flex-none">
              Related Scams
            </TabsTrigger>
          </TabsList>
          <Card className="mt-4 border-t-0 rounded-tl-none">
            <TabsContent value="comments" className="mt-0">
              <ScamComments scamId={scam.id} />
            </TabsContent>
            <TabsContent value="verification" className="mt-0">
              <ScamVerification scam={scam} />
            </TabsContent>
            <TabsContent value="related" className="mt-0">
              <RelatedScams category={scam.category} currentScamId={scam.id} />
            </TabsContent>
          </Card>
        </Tabs>
      </div>
    )
  } catch (error) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="text-2xl font-bold mb-4">Error Loading Scam Details</h1>
        <p className="text-muted-foreground">There was a problem loading the scam details. Please try again later.</p>
      </div>
    )
  }
}
