import type { Metadata } from "next"
import { ProfileForm } from "@/components/profile/profile-form"
import { ProfileStats } from "@/components/profile/profile-stats"
import { ProfileContributions } from "@/components/profile/profile-contributions"

export const metadata: Metadata = {
  title: "Profile - ScamShield",
  description: "Manage your ScamShield profile",
}

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your Profile</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <ProfileForm />
        <div className="space-y-6">
          <ProfileStats />
          <ProfileContributions />
        </div>
      </div>
    </div>
  )
}
