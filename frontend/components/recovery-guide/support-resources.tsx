"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { scamTypes, getSupportResources } from "@/lib/recovery-guide"
import { AlertCircle, ArrowRight, ExternalLink, DollarSign, Scale, Heart, Users } from "lucide-react"

interface SupportResourcesProps {
  scamType: string | null
}

export function SupportResources({ scamType }: SupportResourcesProps) {
  const selectedScam = scamType ? scamTypes.find((scam) => scam.id === scamType) : null

  const supportResources = scamType ? getSupportResources(scamType) : []

  if (!selectedScam) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center text-center space-y-3 py-8">
            <AlertCircle className="h-12 w-12 text-muted-foreground" />
            <div className="space-y-1">
              <h3 className="text-lg font-medium">No scam type selected</h3>
              <p className="text-sm text-muted-foreground">
                Please select a scam type from the "Find a Guide" tab to see support resources.
              </p>
            </div>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => document.querySelector('[data-value="find-guide"]')?.click()}
            >
              Go to Find a Guide
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Support Resources for {selectedScam.name}</CardTitle>
          <CardDescription>Organizations and services that can help you recover</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="financial" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="financial" className="flex items-center justify-center">
                <DollarSign className="mr-2 h-4 w-4" />
                <span>Financial</span>
              </TabsTrigger>
              <TabsTrigger value="legal" className="flex items-center justify-center">
                <Scale className="mr-2 h-4 w-4" />
                <span>Legal</span>
              </TabsTrigger>
              <TabsTrigger value="emotional" className="flex items-center justify-center">
                <Heart className="mr-2 h-4 w-4" />
                <span>Emotional</span>
              </TabsTrigger>
              <TabsTrigger value="community" className="flex items-center justify-center">
                <Users className="mr-2 h-4 w-4" />
                <span>Community</span>
              </TabsTrigger>
            </TabsList>

            {["financial", "legal", "emotional", "community"].map((category) => (
              <TabsContent key={category} value={category} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {supportResources
                    .filter((resource) => resource.category === category)
                    .map((resource, index) => (
                      <Card key={index}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base">{resource.name}</CardTitle>
                          <CardDescription>{resource.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 text-sm">
                            {resource.services && (
                              <div>
                                <span className="font-medium">Services:</span> {resource.services}
                              </div>
                            )}
                            {resource.eligibility && (
                              <div>
                                <span className="font-medium">Eligibility:</span> {resource.eligibility}
                              </div>
                            )}
                            {resource.contact && (
                              <div>
                                <span className="font-medium">Contact:</span> {resource.contact}
                              </div>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button variant="outline" className="w-full" asChild>
                            <a href={resource.website} target="_blank" rel="noopener noreferrer">
                              Visit Website
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </a>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>

                {supportResources.filter((resource) => resource.category === category).length === 0 && (
                  <div className="text-center py-4 text-muted-foreground">
                    No support resources available for this category
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
