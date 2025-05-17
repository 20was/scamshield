export interface Scam {
  id: string
  title: string
  category: string
  severity: "high" | "medium" | "low"
  description: string
  url?: string
  date: string
  reports: number
  status: "reported" | "verified" | "investigating" | "resolved" | "disputed"
  userId: string
  contactInfo?: string
  evidence?: string
}
