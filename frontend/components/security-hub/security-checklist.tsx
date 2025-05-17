"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { CheckCircle } from "lucide-react"

interface SecurityChecklistProps {
  items: string[]
}

export function SecurityChecklist({ items }: SecurityChecklistProps) {
  const [checkedItems, setCheckedItems] = useState<string[]>([])

  const progress = (checkedItems.length / items.length) * 100

  const handleCheck = (item: string) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter((i) => i !== item))
    } else {
      setCheckedItems([...checkedItems, item])
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-primary" />
          Security Checklist
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>
              {checkedItems.length} of {items.length} complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Checkbox
                id={`item-${index}`}
                checked={checkedItems.includes(item)}
                onCheckedChange={() => handleCheck(item)}
                className="mt-1"
              />
              <Label htmlFor={`item-${index}`} className="text-sm leading-tight cursor-pointer">
                {item}
              </Label>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
