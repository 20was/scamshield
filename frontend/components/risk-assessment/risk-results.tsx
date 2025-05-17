'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, Share2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

interface RiskResultsProps {
  results: {
    overallRisk: number;
    categoryScores: {
      [key: string]: number;
    };
    completedQuestions: number;
    totalQuestions: number;
  };
}

const categoryInfo = {
  password: {
    title: 'Password Security',
    icon: Shield,
    recommendations: [
      'Use a password manager to generate and store unique passwords',
      'Enable two-factor authentication on all accounts',
      'Change passwords at least every 3 months',
      'Use passphrases instead of simple passwords',
      'Never reuse passwords across multiple accounts',
    ],
  },
  authentication: {
    title: 'Authentication Practices',
    icon: CheckCircle,
    recommendations: [
      'Enable two-factor authentication on all accounts',
      'Use biometric authentication when available',
      'Avoid SMS-based 2FA in favor of authenticator apps',
      'Consider using hardware security keys for critical accounts',
      'Regularly review account activity logs',
    ],
  },
  phishing: {
    title: 'Phishing Awareness',
    icon: AlertTriangle,
    recommendations: [
      'Never click on links from unknown sources',
      "Verify the sender's email address carefully",
      'Contact companies directly through their official website',
      'Be suspicious of urgent requests requiring immediate action',
      'Look for spelling and grammar errors in communications',
    ],
  },
  privacy: {
    title: 'Privacy Practices',
    icon: Shield,
    recommendations: [
      'Regularly review and update privacy settings on social media',
      'Limit the personal information you share online',
      'Use private browsing mode when on public networks',
      'Consider using a VPN for additional privacy',
      'Regularly delete cookies and browsing history',
    ],
  },
  financial: {
    title: 'Financial Security',
    icon: Shield,
    recommendations: [
      'Monitor account statements weekly',
      'Set up alerts for all financial transactions',
      'Use credit cards instead of debit cards for online purchases',
      'Freeze your credit reports when not applying for credit',
      'Never share financial details over unsecured channels',
    ],
  },
  device: {
    title: 'Device Security',
    icon: Shield,
    recommendations: [
      'Keep operating systems and apps updated',
      'Only download apps from official app stores',
      'Use antivirus software and keep it updated',
      'Enable auto-lock on all devices',
      'Back up your data regularly',
    ],
  },
  scam: {
    title: 'Scam Awareness',
    icon: AlertTriangle,
    recommendations: [
      'Remember that if something seems too good to be true, it probably is',
      'Verify unexpected prizes or winnings through official channels',
      'Research companies before engaging with them',
      'Never pay money to claim a prize',
      'Learn about common scam techniques',
    ],
  },
};

function getRiskLevel(score: number) {
  if (score < 20)
    return { level: 'Very Low', color: 'text-success bg-success/10' };
  if (score < 40) return { level: 'Low', color: 'text-success bg-success/10' };
  if (score < 60)
    return { level: 'Moderate', color: 'text-warning bg-warning/10' };
  if (score < 80) return { level: 'High', color: 'text-warning bg-warning/10' };
  return { level: 'Very High', color: 'text-destructive bg-destructive/10' };
}

function getProgressColor(score: number) {
  if (score < 20) return 'bg-success';
  if (score < 40) return 'bg-success/80';
  if (score < 60) return 'bg-warning';
  if (score < 80) return 'bg-warning/80';
  return 'bg-destructive';
}

export function RiskResults({ results }: RiskResultsProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const { level, color } = getRiskLevel(results.overallRisk);

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Sort categories by risk level (highest first)
  const sortedCategories = Object.entries(results.categoryScores)
    .sort(([, a], [, b]) => b - a)
    .map(([category, score]) => ({
      category,
      score,
      info: categoryInfo[category as keyof typeof categoryInfo],
    }));

  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <Card className="border-2 overflow-hidden">
        <CardHeader className="bg-primary-foreground border-b pb-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="flex justify-center mb-4">
            <div className="rounded-full p-4 bg-background border-4 border-primary/20">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </motion.div>

          <CardTitle className="text-center text-2xl">
            Your Risk Assessment Results
          </CardTitle>
          <CardDescription className="text-center">
            Based on your responses to {results.completedQuestions} questions
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6 pb-0">
          <div className="space-y-8">
            <motion.div
              className="text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}>
              <h3 className="text-lg font-medium mb-2">
                Overall Vulnerability Score
              </h3>

              <div className="relative w-full max-w-xs mx-auto h-36 flex items-center justify-center mb-4">
                <div className="absolute inset-0 rounded-full border-8 border-muted"></div>
                <div
                  className={`absolute inset-0 rounded-full border-8 border-transparent border-t-primary`}
                  style={{
                    transform: `rotate(${results.overallRisk * 1.8}deg)`,
                    transition: 'transform 1s ease-out',
                  }}></div>
                <div className="text-4xl font-bold">
                  {Math.round(results.overallRisk)}%
                </div>
              </div>

              <div
                className={`inline-block px-3 py-1 rounded-full font-medium ${color}`}>
                {level} Risk
              </div>

              <p className="text-muted-foreground mt-2">
                Your digital security practices put you at a{' '}
                {level.toLowerCase()} risk for online scams
              </p>
            </motion.div>

            <motion.div
              className="space-y-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}>
              <h3 className="font-medium">Risk Breakdown by Category</h3>

              {sortedCategories.map((item, index) => (
                <div key={item.category} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="font-medium">{item.info.title}</div>
                    <div
                      className={`text-sm font-medium ${
                        getRiskLevel(item.score).color
                      } px-2 py-0.5 rounded`}>
                      {getRiskLevel(item.score).level}
                    </div>
                  </div>
                  <div className="relative">
                    <Progress value={item.score} className="h-2" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </CardContent>

        <Separator className="my-6" />

        <CardContent>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}>
            <h3 className="font-medium mb-4">Personalized Recommendations</h3>

            <Accordion type="multiple" className="space-y-2">
              {sortedCategories.map((item) => (
                <AccordionItem
                  key={item.category}
                  value={item.category}
                  className="border rounded-md px-4">
                  <AccordionTrigger className="py-3">
                    <div className="flex items-center gap-2">
                      <item.info.icon className="h-4 w-4 text-primary" />
                      <span>{item.info.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4">
                    <ul className="space-y-2 pl-6 list-disc text-muted-foreground">
                      {item.info.recommendations.map((rec, i) => (
                        <li key={i}>{rec}</li>
                      ))}
                    </ul>
                    {item.category === 'phishing' && (
                      <div className="mt-3">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/dashboard/simulations">
                            Try Phishing Simulation
                          </Link>
                        </Button>
                      </div>
                    )}
                    {item.category === 'password' && (
                      <div className="mt-3">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/dashboard/security-hub/passwords">
                            Password Security Guide
                          </Link>
                        </Button>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </CardContent>

        <CardFooter className="flex justify-between p-6 border-t">
          <Button variant="outline" asChild>
            <Link href="/dashboard/risk-assessment">Retake Assessment</Link>
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share Results
            </Button>
            <Button asChild>
              <Link href="/dashboard/security-hub">Improve Security</Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
