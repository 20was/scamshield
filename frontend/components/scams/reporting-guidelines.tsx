import { AlertTriangle, CheckCircle2, HelpCircle, Shield } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ReportingGuidelines() {
  return (
    <Card>
      <CardHeader className="bg-primary/5 border-b">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Shield className="h-5 w-5 text-primary" />
          Reporting Guidelines
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Be specific and detailed
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Include as many details as possible about the scam. The more information you provide, the easier it will
              be for others to identify and avoid similar scams.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Include evidence when possible
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Screenshots, email headers, phone numbers, and website URLs are all valuable pieces of evidence. Remember
              to redact any personal information.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Be objective and factual
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Focus on the facts of what happened rather than opinions. Describe the scam techniques, red flags, and any
              losses incurred.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-warning" />
                Protect personal information
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              Never share your own or others' personal information such as full names, addresses, phone numbers, or
              financial details in your report.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-info" />
                Need help with your report?
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground">
              If you're unsure about any aspect of your report, you can save it as a draft and ask for guidance from our
              community moderators.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
