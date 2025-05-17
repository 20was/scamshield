"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Info } from "lucide-react"
import { useState } from "react"
import type { SecurityCheckItem } from "@/lib/security-checkup"

interface DeviceCheckupProps {
  items: SecurityCheckItem[]
  completedItems: string[]
  onToggleItem: (itemId: string) => void
}

export function DeviceCheckup({ items, completedItems, onToggleItem }: DeviceCheckupProps) {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({})

  const toggleInfo = (itemId: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Device Security Check</CardTitle>
        <CardDescription>Ensure your devices are protected against security threats</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="border rounded-md p-4 space-y-2">
            <div className="flex items-start space-x-2">
              <Checkbox
                id={item.id}
                checked={completedItems.includes(item.id)}
                onCheckedChange={() => onToggleItem(item.id)}
                className="mt-1"
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-start justify-between">
                  <label htmlFor={item.id} className="font-medium cursor-pointer">
                    {item.title}
                  </label>
                  <Collapsible open={openItems[item.id]} onOpenChange={() => toggleInfo(item.id)}>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                        {openItems[item.id] ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        <span className="sr-only">Toggle info</span>
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-2 space-y-2">
                      <div className="rounded-md bg-muted p-3 text-sm">
                        <div className="flex items-start space-x-2">
                          <Info className="h-4 w-4 mt-0.5 text-muted-foreground" />
                          <div>
                            <p>{item.description}</p>
                            {item.howTo && (
                              <div className="mt-2">
                                <p className="font-medium">How to check:</p>
                                <p className="text-muted-foreground">{item.howTo}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
                <p className="text-sm text-muted-foreground">{item.shortDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
