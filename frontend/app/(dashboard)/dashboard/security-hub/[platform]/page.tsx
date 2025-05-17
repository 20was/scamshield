import { PageHeader } from '@/components/layout/page-header';
import { SecurityGuide } from '@/components/security-hub/security-guide';
import { SecurityChecklist } from '@/components/security-hub/security-checklist';
import { notFound } from 'next/navigation';
import { Shield } from 'lucide-react';

// Mock data - in a real app, this would come from a database or API
const PLATFORM_GUIDES = {
  facebook: {
    name: 'Facebook',
    description:
      'Secure your Facebook account with two-factor authentication and privacy settings',
    steps: [
      {
        title: 'Enable Two-Factor Authentication',
        description:
          'Add an extra layer of security to your account by requiring a code in addition to your password.',
        instructions: [
          'Go to Settings & Privacy > Settings',
          'Click on Security and Login',
          'Scroll to Two-Factor Authentication and click Edit',
          'Choose a security method (Authentication app recommended)',
          'Follow the on-screen instructions to complete setup',
        ],
        image: '/placeholder.svg?height=300&width=600',
      },
      {
        title: 'Review Privacy Settings',
        description:
          'Control who can see your posts, profile information, and how people can find and contact you.',
        instructions: [
          'Go to Settings & Privacy > Privacy Shortcuts',
          "Review 'Who can see what you share'",
          "Update 'How people can find you on Facebook'",
          "Check 'Your data settings on Facebook'",
          'Review and update each section as needed',
        ],
        image: '/placeholder.svg?height=300&width=600',
      },
      {
        title: 'Manage Connected Apps',
        description:
          "Review and remove apps and websites that you've logged into with Facebook.",
        instructions: [
          'Go to Settings & Privacy > Settings',
          'Click on Apps and Websites',
          'Review the list of active apps',
          "Remove any apps you don't recognize or no longer use",
          'For remaining apps, click on each to review what information they can access',
        ],
        image: '/placeholder.svg?height=300&width=600',
      },
      {
        title: 'Set Up Alerts for Unrecognized Logins',
        description:
          'Get notified when someone logs into your account from an unrecognized device or browser.',
        instructions: [
          'Go to Settings & Privacy > Settings',
          'Click on Security and Login',
          "Under 'Setting Up Extra Security', find 'Get alerts about unrecognized logins'",
          'Click Edit and select where you want to receive alerts (email, Facebook notification)',
          'Save your changes',
        ],
        image: '/placeholder.svg?height=300&width=600',
      },
      {
        title: 'Secure Your Password',
        description:
          'Create a strong, unique password for your Facebook account.',
        instructions: [
          'Go to Settings & Privacy > Settings',
          'Click on Security and Login',
          "Find 'Change password' and click Edit",
          'Create a strong password (mix of letters, numbers, symbols)',
          "Don't reuse passwords from other sites",
          'Consider using a password manager',
        ],
        image: '/placeholder.svg?height=300&width=600',
      },
    ],
    checklist: [
      'Enable two-factor authentication',
      'Review and update privacy settings',
      'Remove unnecessary connected apps',
      'Set up alerts for unrecognized logins',
      'Use a strong, unique password',
      'Log out when using shared computers',
      "Don't accept friend requests from people you don't know",
      'Be cautious about clicking links in messages',
    ],
  },
  // Other platform guides would be defined here
};

export default function PlatformGuidePage({
  params,
}: {
  params: { platform: string };
}) {
  const platform = params.platform;
  const guide = PLATFORM_GUIDES[platform as keyof typeof PLATFORM_GUIDES];

  if (!guide) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <PageHeader
        heading={`${guide.name} Security Guide`}
        subheading={guide.description}
        icon={Shield}
      />

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SecurityGuide steps={guide.steps} />
        </div>

        <div>
          <SecurityChecklist items={guide.checklist} />
        </div>
      </div>
    </div>
  );
}
