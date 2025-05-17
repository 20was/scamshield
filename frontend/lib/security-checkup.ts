export interface SecurityCheckItem {
  id: string
  title: string
  description: string
  shortDescription?: string
  status?: "secure" | "warning" | "danger" | "unknown"
  actionRequired?: boolean
  actionText?: string
  actionLink?: string
  howTo?: string
}

export interface CheckupCategory {
  id: string
  title: string
  description: string
  items: SecurityCheckItem[]
}
// @/lib/security-checkup.ts

export interface CheckupItem {
  id: string;
  title: string;
  description: string;
  actionText: string;
}

export const checkupItems = {
  device: [
    {
      id: "device-os-update",
      title: "Operating System Updates",
      description: "Ensure your operating system has the latest security patches installed.",
      actionText: "Check for updates"
    },
    {
      id: "device-antivirus",
      title: "Antivirus Software",
      description: "Verify your antivirus software is active and up-to-date.",
      actionText: "Verify protection"
    },
    {
      id: "device-firewall",
      title: "Firewall Status",
      description: "Confirm your firewall is enabled and properly configured.",
      actionText: "Check firewall"
    },
    {
      id: "device-disk-encryption",
      title: "Disk Encryption",
      description: "Enable full-disk encryption to protect your data if your device is lost or stolen.",
      actionText: "Enable encryption"
    },
    {
      id: "device-backup",
      title: "Backup Configuration",
      description: "Set up regular automated backups of your important files.",
      actionText: "Configure backups"
    }
  ],
  account: [
    {
      id: "account-password",
      title: "Strong Password",
      description: "Ensure you're using a strong, unique password for your account.",
      actionText: "Review password"
    },
    {
      id: "account-2fa",
      title: "Two-Factor Authentication",
      description: "Enable 2FA for an additional layer of security.",
      actionText: "Enable 2FA"
    },
    {
      id: "account-recovery",
      title: "Recovery Options",
      description: "Set up account recovery methods in case you lose access.",
      actionText: "Set recovery"
    },
    {
      id: "account-sessions",
      title: "Active Sessions",
      description: "Review and terminate any suspicious active sessions.",
      actionText: "Review sessions"
    },
    {
      id: "account-permissions",
      title: "App Permissions",
      description: "Review third-party apps and services with access to your account.",
      actionText: "Review permissions"
    }
  ],
  privacy: [
    {
      id: "privacy-sharing",
      title: "Sharing Settings",
      description: "Review what information is shared publicly on your profile.",
      actionText: "Check settings"
    },
    {
      id: "privacy-data",
      title: "Data Collection",
      description: "Manage what data is collected about your activities.",
      actionText: "Manage data"
    },
    {
      id: "privacy-location",
      title: "Location Services",
      description: "Control which apps can access your location information.",
      actionText: "Review location"
    },
    {
      id: "privacy-browsing",
      title: "Browsing Privacy",
      description: "Use private browsing mode and clear your history regularly.",
      actionText: "Enhance privacy"
    },
    {
      id: "privacy-cookies",
      title: "Cookie Management",
      description: "Review and manage cookie settings across your browsers.",
      actionText: "Manage cookies"
    }
  ]
};
