import { ScamFeed } from "@/components/home/scam-feed"
import { SidebarStats } from "@/components/home/sidebar-stats"
import { TopContributors } from "@/components/home/top-contributors"
import { TrendingTags } from "@/components/home/trending-tags"
import { WelcomeBanner } from "@/components/home/welcome-banner"
import { SiteFooter } from "@/components/layout/site-footer"
import { CommunityHighlights } from "@/components/home/community-highlights"
import { FeaturedScam } from "@/components/home/featured-scam"

export default function Home() {
  return (
    <>
      <WelcomeBanner />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        {/* Main content area - 3/4 width on desktop */}
        <div className="lg:col-span-3 space-y-6">
          <FeaturedScam />
          <ScamFeed />
        </div>

        {/* Sidebar - 1/4 width on desktop */}
        <div className="space-y-6">
          <SidebarStats />
          <TopContributors />
          <TrendingTags />
          <CommunityHighlights />
        </div>
      </div>

      <SiteFooter />
    </>
  )
}
