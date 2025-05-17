import { PageHeader } from '@/components/layout/page-header';
import { PlatformCard } from '@/components/security-hub/platform-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Shield,
  Lock,
  AlertTriangle,
  Smartphone,
  Globe,
  CreditCard,
} from 'lucide-react';

export default function SecurityHubPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        heading="Account Security Hub"
        subheading="Step-by-step guides to secure your accounts across popular platforms"
        icon={Shield}
      />

      <Tabs defaultValue="social" className="space-y-6">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 h-auto">
          <TabsTrigger value="social" className="flex flex-col py-2 h-auto">
            <Globe className="h-4 w-4 mb-1" />
            <span>Social Media</span>
          </TabsTrigger>
          <TabsTrigger value="email" className="flex flex-col py-2 h-auto">
            <Lock className="h-4 w-4 mb-1" />
            <span>Email</span>
          </TabsTrigger>
          <TabsTrigger value="shopping" className="flex flex-col py-2 h-auto">
            <CreditCard className="h-4 w-4 mb-1" />
            <span>Shopping</span>
          </TabsTrigger>
          <TabsTrigger value="banking" className="flex flex-col py-2 h-auto">
            <AlertTriangle className="h-4 w-4 mb-1" />
            <span>Banking</span>
          </TabsTrigger>
          <TabsTrigger value="devices" className="flex flex-col py-2 h-auto">
            <Smartphone className="h-4 w-4 mb-1" />
            <span>Devices</span>
          </TabsTrigger>
          <TabsTrigger value="all" className="flex flex-col py-2 h-auto">
            <Shield className="h-4 w-4 mb-1" />
            <span>All Guides</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="social" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PlatformCard
              name="Facebook"
              icon="/placeholder.svg?height=80&width=80"
              description="Secure your Facebook account with two-factor authentication and privacy settings"
              difficulty="easy"
              steps={5}
              slug="facebook"
            />
            <PlatformCard
              name="Instagram"
              icon="/placeholder.svg?height=80&width=80"
              description="Protect your Instagram account from hackers and unwanted access"
              difficulty="easy"
              steps={4}
              slug="instagram"
            />
            <PlatformCard
              name="TikTok"
              icon="/placeholder.svg?height=80&width=80"
              description="Secure your TikTok account and manage privacy settings"
              difficulty="easy"
              steps={6}
              slug="tiktok"
            />
            <PlatformCard
              name="Twitter/X"
              icon="/placeholder.svg?height=80&width=80"
              description="Protect your Twitter account with advanced security features"
              difficulty="medium"
              steps={7}
              slug="twitter"
            />
            <PlatformCard
              name="LinkedIn"
              icon="/placeholder.svg?height=80&width=80"
              description="Secure your professional identity on LinkedIn"
              difficulty="medium"
              steps={5}
              slug="linkedin"
            />
            <PlatformCard
              name="Snapchat"
              icon="/placeholder.svg?height=80&width=80"
              description="Protect your Snapchat account from unauthorized access"
              difficulty="easy"
              steps={4}
              slug="snapchat"
            />
          </div>
        </TabsContent>

        <TabsContent value="email" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PlatformCard
              name="Gmail"
              icon="/placeholder.svg?height=80&width=80"
              description="Secure your Gmail account with advanced security features"
              difficulty="medium"
              steps={8}
              slug="gmail"
            />
            <PlatformCard
              name="Outlook"
              icon="/placeholder.svg?height=80&width=80"
              description="Protect your Microsoft Outlook account from hackers"
              difficulty="medium"
              steps={7}
              slug="outlook"
            />
            <PlatformCard
              name="Yahoo Mail"
              icon="/placeholder.svg?height=80&width=80"
              description="Secure your Yahoo Mail account with best practices"
              difficulty="easy"
              steps={5}
              slug="yahoo"
            />
            <PlatformCard
              name="ProtonMail"
              icon="/placeholder.svg?height=80&width=80"
              description="Maximize security for your encrypted ProtonMail account"
              difficulty="hard"
              steps={9}
              slug="protonmail"
            />
          </div>
        </TabsContent>

        <TabsContent value="shopping" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PlatformCard
              name="Amazon"
              icon="/placeholder.svg?height=80&width=80"
              description="Secure your Amazon account and payment information"
              difficulty="medium"
              steps={6}
              slug="amazon"
            />
            <PlatformCard
              name="eBay"
              icon="/placeholder.svg?height=80&width=80"
              description="Protect your eBay account from unauthorized access"
              difficulty="medium"
              steps={5}
              slug="ebay"
            />
            <PlatformCard
              name="Etsy"
              icon="/placeholder.svg?height=80&width=80"
              description="Secure your Etsy account with best practices"
              difficulty="easy"
              steps={4}
              slug="etsy"
            />
            <PlatformCard
              name="Walmart"
              icon="/placeholder.svg?height=80&width=80"
              description="Protect your Walmart account and payment details"
              difficulty="easy"
              steps={5}
              slug="walmart"
            />
            <PlatformCard
              name="Target"
              icon="/placeholder.svg?height=80&width=80"
              description="Secure your Target account from unauthorized access"
              difficulty="easy"
              steps={4}
              slug="target"
            />
          </div>
        </TabsContent>

        <TabsContent value="banking" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PlatformCard
              name="Online Banking"
              icon="/placeholder.svg?height=80&width=80"
              description="General security practices for all online banking platforms"
              difficulty="hard"
              steps={10}
              slug="online-banking"
            />
            <PlatformCard
              name="PayPal"
              icon="/placeholder.svg?height=80&width=80"
              description="Secure your PayPal account and transactions"
              difficulty="medium"
              steps={7}
              slug="paypal"
            />
            <PlatformCard
              name="Venmo"
              icon="/placeholder.svg?height=80&width=80"
              description="Protect your Venmo account and payment information"
              difficulty="medium"
              steps={6}
              slug="venmo"
            />
            <PlatformCard
              name="Cash App"
              icon="/placeholder.svg?height=80&width=80"
              description="Secure your Cash App account from unauthorized access"
              difficulty="medium"
              steps={5}
              slug="cashapp"
            />
            <PlatformCard
              name="Credit Cards"
              icon="/placeholder.svg?height=80&width=80"
              description="Best practices for securing your credit card information online"
              difficulty="hard"
              steps={8}
              slug="credit-cards"
            />
          </div>
        </TabsContent>

        <TabsContent value="devices" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <PlatformCard
              name="iPhone"
              icon="/placeholder.svg?height=80&width=80"
              description="Secure your iPhone with advanced security settings"
              difficulty="medium"
              steps={9}
              slug="iphone"
            />
            <PlatformCard
              name="Android"
              icon="/placeholder.svg?height=80&width=80"
              description="Protect your Android device from malware and hackers"
              difficulty="medium"
              steps={8}
              slug="android"
            />
            <PlatformCard
              name="Windows PC"
              icon="/placeholder.svg?height=80&width=80"
              description="Secure your Windows computer from threats"
              difficulty="hard"
              steps={10}
              slug="windows"
            />
            <PlatformCard
              name="Mac"
              icon="/placeholder.svg?height=80&width=80"
              description="Protect your Mac with essential security settings"
              difficulty="medium"
              steps={7}
              slug="mac"
            />
            <PlatformCard
              name="Smart Home"
              icon="/placeholder.svg?height=80&width=80"
              description="Secure your smart home devices from hackers"
              difficulty="hard"
              steps={9}
              slug="smart-home"
            />
          </div>
        </TabsContent>

        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* This would include all platforms from all categories */}
            <PlatformCard
              name="Facebook"
              icon="/placeholder.svg?height=80&width=80"
              description="Secure your Facebook account with two-factor authentication and privacy settings"
              difficulty="easy"
              steps={5}
              slug="facebook"
            />
            <PlatformCard
              name="Gmail"
              icon="/placeholder.svg?height=80&width=80"
              description="Secure your Gmail account with advanced security features"
              difficulty="medium"
              steps={8}
              slug="gmail"
            />
            <PlatformCard
              name="Amazon"
              icon="/placeholder.svg?height=80&width=80"
              description="Secure your Amazon account and payment information"
              difficulty="medium"
              steps={6}
              slug="amazon"
            />
            <PlatformCard
              name="Online Banking"
              icon="/placeholder.svg?height=80&width=80"
              description="General security practices for all online banking platforms"
              difficulty="hard"
              steps={10}
              slug="online-banking"
            />
            <PlatformCard
              name="iPhone"
              icon="/placeholder.svg?height=80&width=80"
              description="Secure your iPhone with advanced security settings"
              difficulty="medium"
              steps={9}
              slug="iphone"
            />
            <PlatformCard
              name="Dating Apps"
              icon="/placeholder.svg?height=80&width=80"
              description="Protect your privacy and security on dating applications"
              difficulty="medium"
              steps={7}
              slug="dating-apps"
            />
            {/* More platforms would be listed here */}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
