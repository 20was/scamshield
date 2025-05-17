import { PageHeader } from '@/components/layout/page-header';
import { RiskAssessmentTool } from '@/components/risk-assessment/risk-assessment-tool';
import { ShieldAlert } from 'lucide-react';

export default function RiskAssessmentPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        heading="Personalized Risk Assessment"
        subheading="Evaluate your digital habits and get personalized security recommendations"
        icon={ShieldAlert}
      />

      <RiskAssessmentTool />
    </div>
  );
}
