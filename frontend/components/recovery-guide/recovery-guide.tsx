"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Search } from "lucide-react"
import { ScamTypeSelector } from "./scam-type-selector"
import { RecoverySteps } from "./recovery-steps"
import { ReportingGuide } from "./reporting-guide"
import { SupportResources } from "./support-resources"

export function RecoveryGuide() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedScamType, setSelectedScamType] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search recovery guides..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </Card>

      <Tabs defaultValue="find-guide" className="space-y-4">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="find-guide">Find a Guide</TabsTrigger>
          <TabsTrigger value="recovery-steps">Recovery Steps</TabsTrigger>
          <TabsTrigger value="reporting">Reporting</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="find-guide" className="space-y-4">
          <ScamTypeSelector onSelect={setSelectedScamType} selectedType={selectedScamType} searchQuery={searchQuery} />
        </TabsContent>

        <TabsContent value="recovery-steps" className="space-y-4">
          <RecoverySteps scamType={selectedScamType} />
        </TabsContent>

        <TabsContent value="reporting" className="space-y-4">
          <ReportingGuide scamType={selectedScamType} />
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <SupportResources scamType={selectedScamType} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
