// Define the types
export type ScamType =
  | "phishing"
  | "identity_theft"
  | "financial"
  | "shopping"
  | "romance"
  | "tech_support"
  | "investment"
  | "employment"

export interface RecoveryStep {
  title: string
  description: string
  actionItems: string[]
}

export interface ReportingTemplate {
  authority: string
  website: string
  phone?: string
  email?: string
  template: string
}

export interface SupportResource {
  name: string
  description: string
  website: string
  phone?: string
}

// Map scam types to icon names
export const scamTypeIcons: Record<ScamType, string> = {
  phishing: "Mail",
  identity_theft: "ShieldAlert",
  financial: "CreditCard",
  shopping: "ShoppingCart",
  romance: "MessageSquare",
  tech_support: "AlertCircle",
  investment: "Shield",
  employment: "Phone",
}

// Original scamTypes export that's required by other components
export const scamTypes = [
  {
    id: "investment-fraud",
    name: "Investment Fraud",
    category: "financial",
    description: "Fraudulent investment opportunities promising high returns with little or no risk",
    icon: "credit-card",
  },
  {
    id: "credit-card-fraud",
    name: "Credit Card Fraud",
    category: "financial",
    description: "Unauthorized use of credit card information for fraudulent purchases",
    icon: "credit-card",
  },
  {
    id: "identity-theft",
    name: "Identity Theft",
    category: "personal",
    description: "Theft of personal information to commit fraud or other crimes",
    icon: "user",
  },
  {
    id: "phishing",
    name: "Phishing",
    category: "online",
    description: "Deceptive attempts to steal sensitive information by posing as trustworthy entities",
    icon: "mail",
  },
  {
    id: "romance-scam",
    name: "Romance Scam",
    category: "personal",
    description: "Fraudulent romantic intentions to gain financial advantage",
    icon: "heart",
  },
  {
    id: "tech-support-scam",
    name: "Tech Support Scam",
    category: "online",
    description: "Fraudulent technical support services claiming to fix non-existent computer issues",
    icon: "laptop",
  },
  {
    id: "lottery-scam",
    name: "Lottery Scam",
    category: "financial",
    description: "False notifications of lottery winnings requiring payment to claim prizes",
    icon: "ticket",
  },
  {
    id: "employment-scam",
    name: "Employment Scam",
    category: "financial",
    description: "Fake job opportunities designed to steal money or personal information",
    icon: "briefcase",
  },
  {
    id: "online-shopping-scam",
    name: "Online Shopping Scam",
    category: "online",
    description: "Fraudulent online stores or marketplace listings selling counterfeit or non-existent items",
    icon: "shopping-bag",
  },
  {
    id: "cryptocurrency-scam",
    name: "Cryptocurrency Scam",
    category: "financial",
    description: "Fraudulent cryptocurrency investment schemes or fake exchanges",
    icon: "bitcoin",
  },
]

export const recoveryStepsByType = {
  "investment-fraud": [
    {
      title: "Contact Financial Institutions",
      description:
        "Contact your bank or financial institution immediately to report the fraud and potentially stop or reverse transactions.",
    },
    {
      title: "Report to Authorities",
      description: "File a report with local law enforcement and financial regulatory bodies like the SEC or FTC.",
    },
    {
      title: "Document Everything",
      description: "Gather all communications, receipts, and evidence related to the fraudulent investment.",
    },
    {
      title: "Consult Legal Counsel",
      description: "Speak with an attorney specializing in investment fraud to understand your legal options.",
    },
  ],
  "credit-card-fraud": [
    {
      title: "Contact Card Issuer",
      description: "Immediately contact your credit card company to report the fraud and cancel the compromised card.",
    },
    {
      title: "Monitor Statements",
      description: "Review your credit card statements for any unauthorized charges and dispute them promptly.",
    },
    {
      title: "Place Fraud Alert",
      description: "Contact credit bureaus to place a fraud alert on your credit report to prevent further fraud.",
    },
    {
      title: "Update Passwords",
      description: "Change passwords for your financial accounts and enable two-factor authentication where available.",
    },
  ],
  // Additional recovery steps for other scam types would be defined here
}

export const reportingGuideByType = {
  "investment-fraud": {
    authorities: [
      {
        name: "Securities and Exchange Commission (SEC)",
        website: "https://www.sec.gov/tcr",
        phone: "1-800-732-0330",
      },
      {
        name: "Federal Trade Commission (FTC)",
        website: "https://reportfraud.ftc.gov",
        phone: "1-877-382-4357",
      },
      {
        name: "Financial Industry Regulatory Authority (FINRA)",
        website: "https://www.finra.org/investors/have-problem/file-complaint",
        phone: "1-301-590-6500",
      },
    ],
    tips: [
      "Provide detailed information about the investment opportunity and how you were approached",
      "Include copies of all communications, contracts, and payment receipts",
      "Report even if you didn't lose money, as it helps authorities track scam patterns",
      "Be prepared to provide statements from your financial institutions showing the transactions",
    ],
  },
  "credit-card-fraud": {
    authorities: [
      {
        name: "Federal Trade Commission (FTC)",
        website: "https://reportfraud.ftc.gov",
        phone: "1-877-382-4357",
      },
      {
        name: "Internet Crime Complaint Center (IC3)",
        website: "https://www.ic3.gov",
        phone: "N/A",
      },
      {
        name: "Local Police Department",
        website: "Varies by location",
        phone: "Varies by location",
      },
    ],
    tips: [
      "Report the fraud to your credit card issuer first to limit your liability",
      "File a police report, especially if you know the perpetrator or for larger fraud amounts",
      "Keep a log of all unauthorized charges and when you reported them",
      "Check your credit reports for other potential fraudulent accounts or inquiries",
    ],
  },
  // Additional reporting guides for other scam types would be defined here
}

export const supportResourcesByType = {
  "investment-fraud": [
    {
      name: "Investor.gov",
      description: "SEC's resource for investor education and protection",
      website: "https://www.investor.gov",
    },
    {
      name: "National Center for Victims of Crime",
      description: "Provides support and resources for victims of all types of crime",
      website: "https://victimsofcrime.org",
    },
    {
      name: "AARP Fraud Resource Center",
      description: "Resources and support for older adults affected by fraud",
      website: "https://www.aarp.org/money/scams-fraud",
    },
  ],
  "credit-card-fraud": [
    {
      name: "Identity Theft Resource Center",
      description: "Provides assistance to victims of identity theft and related crimes",
      website: "https://www.idtheftcenter.org",
    },
    {
      name: "Consumer Financial Protection Bureau",
      description: "Government agency that protects consumers in the financial marketplace",
      website: "https://www.consumerfinance.gov",
    },
    {
      name: "Credit Card Fraud Victim Support Groups",
      description: "Online communities where victims can share experiences and advice",
      website: "https://www.reddit.com/r/personalfinance",
    },
  ],
  // Additional support resources for other scam types would be defined here
}

// Add the missing exported functions that are being imported elsewhere
export function getRecoverySteps(scamTypeId: string) {
  return recoveryStepsByType[scamTypeId as keyof typeof recoveryStepsByType] || []
}

export function getReportingTemplates(scamTypeId: string) {
  return reportingGuideByType[scamTypeId as keyof typeof reportingGuideByType] || { authorities: [], tips: [] }
}

export function getSupportResources(scamTypeId: string) {
  return supportResourcesByType[scamTypeId as keyof typeof supportResourcesByType] || []
}
