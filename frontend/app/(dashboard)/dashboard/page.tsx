'use client';

import type { Metadata } from 'next';
import { DashboardOverview } from '@/components/dashboard/dashboard-overview';
import { DashboardStats } from '@/components/dashboard/dashboard-stats';
import { RecentScams } from '@/components/dashboard/recent-scams';
import { TrendingScams } from '@/components/dashboard/trending-scams';
import { UserLeaderboard } from '@/components/dashboard/user-leaderboard';
import { QuickActions } from '@/components/dashboard/quick-actions';
import { UserContributionStats } from '@/components/dashboard/user-contribution-stats';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function DashboardPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome to ScamShield</h1>
          <p className="text-muted-foreground mt-1">
            Your central hub for scam awareness and prevention
          </p>
        </div>
        <QuickActions />
      </div>

      <DashboardStats />

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="overview" className="flex-1">
                Overview
              </TabsTrigger>
              <TabsTrigger value="recent" className="flex-1">
                Recent Scams
              </TabsTrigger>
              <TabsTrigger value="trending" className="flex-1">
                Trending
              </TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6 mt-6">
              <DashboardOverview />
            </TabsContent>
            <TabsContent value="recent" className="space-y-6 mt-6">
              <RecentScams />
            </TabsContent>
            <TabsContent value="trending" className="space-y-6 mt-6">
              <TrendingScams />
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <UserContributionStats />
          <UserLeaderboard />
        </div>
      </div>
    </div>
  );
}
