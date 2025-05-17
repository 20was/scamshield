import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/page-header';
import { PageContainer } from '@/components/layout/page-container';
import { RecoveryGuide } from '@/components/recovery-guide/recovery-guide';
import { LifeBuoy } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Scam Recovery Guide | ScamShield',
  description: 'Comprehensive guidance for recovering from scams and fraud',
};

export default function RecoveryGuidePage() {
  return (
    <PageContainer>
      <PageHeader
        heading="Scam Recovery Guide"
        subheading="Step-by-step guidance to help you recover from scams and protect yourself from further harm"
        icon={LifeBuoy}
      />
      <RecoveryGuide />
    </PageContainer>
  );
}
