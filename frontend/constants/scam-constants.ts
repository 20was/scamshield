export const SCAM_CATEGORIES = [
  { value: "phishing", label: "Phishing" },
  { value: "investment", label: "Investment" },
  { value: "romance", label: "Romance" },
  { value: "shopping", label: "Shopping" },
  { value: "tech-support", label: "Tech Support" },
  { value: "employment", label: "Employment" },
  { value: "lottery", label: "Lottery/Prize" },
  { value: "charity", label: "Charity" },
  { value: "identity-theft", label: "Identity Theft" },
  { value: "cryptocurrency", label: "Cryptocurrency" },
  { value: "social-media", label: "Social Media" },
  { value: "other", label: "Other" },
]

export const SCAM_SEVERITY = [
  { value: "high", label: "High - Immediate financial/data risk" },
  { value: "medium", label: "Medium - Potential for harm" },
  { value: "low", label: "Low - Minimal risk" },
]

export const SCAM_STATUS = {
  REPORTED: "reported",
  VERIFIED: "verified",
  INVESTIGATING: "investigating",
  RESOLVED: "resolved",
  DISPUTED: "disputed",
}
