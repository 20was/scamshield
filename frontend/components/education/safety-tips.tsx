import { Shield, AlertTriangle, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function SafetyTips() {
  const tips = [
    {
      title: "Verify Before You Trust",
      description:
        "Always verify the identity of individuals or organizations before sharing personal information or sending money. Contact them through official channels, not the ones provided in suspicious messages.",
    },
    {
      title: "Be Wary of Urgency",
      description:
        "Scammers often create a false sense of urgency to pressure you into making quick decisions. Take your time and think critically about urgent requests.",
    },
    {
      title: "Check Website Security",
      description:
        "Before entering sensitive information online, ensure the website is secure. Look for 'https://' in the URL and a padlock icon in the address bar.",
    },
    {
      title: "Use Strong, Unique Passwords",
      description:
        "Create strong, unique passwords for each of your accounts and consider using a password manager to keep track of them securely.",
    },
    {
      title: "Enable Two-Factor Authentication",
      description:
        "Add an extra layer of security to your accounts by enabling two-factor authentication whenever possible.",
    },
    {
      title: "Be Skeptical of 'Too Good to Be True' Offers",
      description:
        "If an offer seems too good to be true, it probably is. Be especially cautious of unexpected winnings, inheritances, or investment opportunities with guaranteed high returns.",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Safety Tips
        </CardTitle>
        <CardDescription>Essential guidelines to protect yourself from scams</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="multiple" className="w-full">
          {tips.map((tip, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                  <span>{tip.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-muted-foreground pl-6">{tip.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 dark:border-amber-900 dark:bg-amber-950">
          <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300">
            <AlertTriangle className="h-4 w-4" />
            <p className="text-sm font-medium">Remember</p>
          </div>
          <p className="mt-1 text-sm text-amber-800 dark:text-amber-300">
            If you suspect you've encountered a scam, report it immediately to ScamShield and relevant authorities.
            Quick reporting helps protect others.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
