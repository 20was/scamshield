import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/page-header';
import { PageContainer } from '@/components/layout/page-container';
import { SecurityCheckupTool } from '@/components/security-checkup/security-checkup-tool';
import { Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Security Check-up | ScamShield',
  description:
    'Perform a comprehensive security audit of your accounts and devices',
};

export default function SecurityCheckupPage() {
  return (
    <PageContainer>
      <PageHeader
        heading="Security Check-up Tool"
        subheading="Perform a comprehensive security audit of your accounts and devices with step-by-step guidance"
        icon={Shield}
      />
      <SecurityCheckupTool />
    </PageContainer>
  );
}
