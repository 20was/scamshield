"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { scamTypes, getReportingTemplates } from "@/lib/recovery-guide"
import { AlertCircle, Copy, Download, ArrowRight, FileText, Building, Globe, Shield } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ReportingGuideProps {
  scamType: string | null
}

export function ReportingGuide({ scamType }: ReportingGuideProps) {
  const { toast } = useToast()

  const selectedScam = scamType ? scamTypes.find((scam) => scam.id === scamType) : null

  const reportingTemplates = scamType ? getReportingTemplates(scamType) : { authorities: [], tips: [] }

  const copyTemplate = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Template copied",
      description: "The reporting template has been copied to your clipboard",
    })
  }

  const downloadTemplate = (text: string, title: string) => {
    const element = document.createElement("a")
    const file = new Blob([text], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `${title.toLowerCase().replace(/\s+/g, "-")}-report-template.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  if (!selectedScam) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center justify-center text-center space-y-3 py-8">
            <AlertCircle className="h-12 w-12 text-muted-foreground" />
            <div className="space-y-1">
              <h3 className="text-lg font-medium">No scam type selected</h3>
              <p className="text-sm text-muted-foreground">
                Please select a scam type from the "Find a Guide" tab to see reporting templates.
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
          <CardTitle>Reporting Guide for {selectedScam.name}</CardTitle>
          <CardDescription>Use these templates to report the scam to the appropriate authorities</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="law-enforcement" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="law-enforcement" className="flex items-center justify-center">
                <Shield className="mr-2 h-4 w-4" />
                <span>Law Enforcement</span>
              </TabsTrigger>
              <TabsTrigger value="financial" className="flex items-center justify-center">
                <Building className="mr-2 h-4 w-4" />
                <span>Financial Institutions</span>
              </TabsTrigger>
              <TabsTrigger value="platforms" className="flex items-center justify-center">
                <Globe className="mr-2 h-4 w-4" />
                <span>Online Platforms</span>
              </TabsTrigger>
            </TabsList>

            {["law-enforcement", "financial", "platforms"].map((category) => (
              <TabsContent key={category} value={category} className="space-y-4">
                {reportingTemplates.authorities
                  .filter((authority) => authority.category === category)
                  .map((authority, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="bg-muted pb-2">
                        <CardTitle className="text-base">{authority.name}</CardTitle>
                        <CardDescription>{authority.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="relative">
                          <div className="bg-muted/50 rounded-md p-4 text-sm font-mono whitespace-pre-wrap">
                            {authority.content}
                          </div>
                          <div className="absolute top-2 right-2 flex space-x-2">
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => copyTemplate(authority.content)}
                              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                            >
                              <Copy className="h-4 w-4" />
                              <span className="sr-only">Copy template</span>
                            </Button>
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={() => downloadTemplate(authority.content, authority.name)}
                              className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
                            >
                              <Download className="h-4 w-4" />
                              <span className="sr-only">Download template</span>
                            </Button>
                          </div>
                        </div>

                        <div className="mt-4 flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">
                            Replace the <span className="font-medium">[bracketed text]</span> with your specific details
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                {reportingTemplates.authorities.filter((authority) => authority.category === category).length === 0 && (
                  <div className="text-center py-4 text-muted-foreground">
                    No reporting templates available for this category
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
