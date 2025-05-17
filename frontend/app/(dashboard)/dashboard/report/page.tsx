import type { Metadata } from "next"
import { ScamReportForm } from "@/components/scams/scam-report-form"
import { ReportingGuidelines } from "@/components/scams/reporting-guidelines"
import { ReportingBenefits } from "@/components/scams/reporting-benefits"

export const metadata: Metadata = {
  title: "Report Scam - ScamShield",
  description: "Report a new scam to the ScamShield platform",
}

export default function ReportScamPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Report a Scam</h1>
          <p className="text-muted-foreground mt-1">Help protect others by reporting scams you've encountered</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ScamReportForm />
        </div>
        <div className="space-y-6">
          <ReportingGuidelines />
          <ReportingBenefits />
        </div>
      </div>
    </div>
  )
}
