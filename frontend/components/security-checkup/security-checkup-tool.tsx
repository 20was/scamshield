"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DeviceCheckup } from "./device-checkup"
import { AccountCheckup } from "./account-checkup"
import { PrivacyCheckup } from "./privacy-checkup"
import { CheckupResults } from "./checkup-results"
import { checkupItems } from "@/lib/security-checkup"
import { Laptop, Lock, Eye, BarChart } from "lucide-react"

export function SecurityCheckupTool() {
  const [completedItems, setCompletedItems] = useState<string[]>([])
  const [activeTab, setActiveTab] = useState("device")
  const [showResults, setShowResults] = useState(false)

  const totalItems = checkupItems.device.length + checkupItems.account.length + checkupItems.privacy.length
  const progress = Math.round((completedItems.length / totalItems) * 100)

  const deviceProgress = Math.round(
    (completedItems.filter((id) => id.startsWith("device-")).length / checkupItems.device.length) * 100,
  )
  const accountProgress = Math.round(
    (completedItems.filter((id) => id.startsWith("account-")).length / checkupItems.account.length) * 100,
  )
  const privacyProgress = Math.round(
    (completedItems.filter((id) => id.startsWith("privacy-")).length / checkupItems.privacy.length) * 100,
  )

  const toggleItem = (itemId: string) => {
    setCompletedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const handleViewResults = () => {
    setShowResults(true)
  }

  const handleBackToCheckup = () => {
    setShowResults(false)
  }

  if (showResults) {
    return (
      <CheckupResults
        completedItems={completedItems}
        totalItems={totalItems}
        deviceProgress={deviceProgress}
        accountProgress={accountProgress}
        privacyProgress={privacyProgress}
        onBackToCheckup={handleBackToCheckup}
      />
    )
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Security Check-up Progress</CardTitle>
          <CardDescription>Complete all sections to get your security score</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Overall Progress</span>
              <span>{progress}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className={activeTab === "device" ? "border-primary" : ""}>
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base flex items-center">
                    <Laptop className="mr-2 h-4 w-4" />
                    Device Security
                  </CardTitle>
                  <span className="text-sm font-medium">{deviceProgress}%</span>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <Progress value={deviceProgress} className="h-1.5" />
                <p className="text-xs text-muted-foreground mt-2">
                  {completedItems.filter((id) => id.startsWith("device-")).length} of {checkupItems.device.length} items
                  completed
                </p>
              </CardContent>
            </Card>

            <Card className={activeTab === "account" ? "border-primary" : ""}>
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base flex items-center">
                    <Lock className="mr-2 h-4 w-4" />
                    Account Security
                  </CardTitle>
                  <span className="text-sm font-medium">{accountProgress}%</span>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <Progress value={accountProgress} className="h-1.5" />
                <p className="text-xs text-muted-foreground mt-2">
                  {completedItems.filter((id) => id.startsWith("account-")).length} of {checkupItems.account.length}{" "}
                  items completed
                </p>
              </CardContent>
            </Card>

            <Card className={activeTab === "privacy" ? "border-primary" : ""}>
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base flex items-center">
                    <Eye className="mr-2 h-4 w-4" />
                    Privacy Protection
                  </CardTitle>
                  <span className="text-sm font-medium">{privacyProgress}%</span>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <Progress value={privacyProgress} className="h-1.5" />
                <p className="text-xs text-muted-foreground mt-2">
                  {completedItems.filter((id) => id.startsWith("privacy-")).length} of {checkupItems.privacy.length}{" "}
                  items completed
                </p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="device" className="flex items-center justify-center">
            <Laptop className="mr-2 h-4 w-4" />
            <span>Device Security</span>
          </TabsTrigger>
          <TabsTrigger value="account" className="flex items-center justify-center">
            <Lock className="mr-2 h-4 w-4" />
            <span>Account Security</span>
          </TabsTrigger>
          <TabsTrigger value="privacy" className="flex items-center justify-center">
            <Eye className="mr-2 h-4 w-4" />
            <span>Privacy Protection</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="device" className="space-y-4">
          <DeviceCheckup items={checkupItems.device} completedItems={completedItems} onToggleItem={toggleItem} />
        </TabsContent>

        <TabsContent value="account" className="space-y-4">
          <AccountCheckup items={checkupItems.account} completedItems={completedItems} onToggleItem={toggleItem} />
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4">
          <PrivacyCheckup items={checkupItems.privacy} completedItems={completedItems} onToggleItem={toggleItem} />
        </TabsContent>
      </Tabs>

      <div className="flex justify-end">
        <Button onClick={handleViewResults} className="flex items-center">
          <BarChart className="mr-2 h-4 w-4" />
          View Security Results
        </Button>
      </div>
    </div>
  )
}
