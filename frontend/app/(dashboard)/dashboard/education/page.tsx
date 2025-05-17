import type { Metadata } from "next"
import { EducationResources } from "@/components/education/education-resources"
import { SafetyTips } from "@/components/education/safety-tips"
import { PageHeader } from "@/components/layout/page-header"
import { BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Education - ScamShield",
  description: "Educational resources and safety tips to protect yourself from scams",
}

export default function EducationPage() {
  return (
    <div className="container py-8 space-y-6">
      <PageHeader
        heading="Education Center"
        subheading="Learn how to protect yourself and others from scams"
        icon={BookOpen}
      />
      <div className="grid gap-6 md:grid-cols-2">
        <EducationResources />
        <SafetyTips />
      </div>
    </div>
  )
}
