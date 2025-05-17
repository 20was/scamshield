import type { Metadata } from 'next';
import { PageHeader } from '@/components/layout/page-header';
import { PageContainer } from '@/components/layout/page-container';
import { ScamsList } from '@/components/scams/scams-list';
import { ScamsFilter } from '@/components/scams/scams-filter';
import { Database } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Scams Database - ScamShield',
  description: 'Browse and search the ScamShield scams database',
};

export default function ScamsPage() {
  return (
    <PageContainer>
      <PageHeader
        heading="Scams Database"
        subheading="Browse and search our comprehensive database of reported scams"
        icon={Database}
      />
      <ScamsFilter />
      <ScamsList />
    </PageContainer>
  );
}
