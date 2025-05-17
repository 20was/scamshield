import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FAQPage() {
  return (
    <div className="container py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Frequently Asked Questions</h1>
        <p className="text-muted-foreground">Find answers to common questions about ScamShield</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="reporting">Reporting Scams</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Questions</CardTitle>
              <CardDescription>Basic information about ScamShield</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is ScamShield?</AccordionTrigger>
                  <AccordionContent>
                    ScamShield is a comprehensive platform designed to help users identify, report, and protect
                    themselves from online scams. It combines community reporting, educational resources, and
                    verification systems to create a safer online environment for everyone.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How does ScamShield work?</AccordionTrigger>
                  <AccordionContent>
                    ScamShield works by leveraging the power of community reporting. Users can report scams they
                    encounter, which are then verified by other community members. We also provide educational resources
                    to help users recognize and avoid scams, and maintain a database of known scams for reference.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Is ScamShield free to use?</AccordionTrigger>
                  <AccordionContent>
                    Yes, ScamShield is completely free for individual users. We believe that everyone should have access
                    to tools that help them stay safe online. We may offer premium features for organizations in the
                    future.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How can I contribute to ScamShield?</AccordionTrigger>
                  <AccordionContent>
                    You can contribute by reporting scams you encounter, verifying reports from other users, creating
                    educational content, and participating in community discussions. Every contribution helps make the
                    platform more effective for everyone.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Questions</CardTitle>
              <CardDescription>Information about your ScamShield account</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I create an account?</AccordionTrigger>
                  <AccordionContent>
                    You can create an account by clicking the "Register" button in the top right corner of the page.
                    You'll need to provide a valid email address and create a password. You can also sign up using your
                    Google or Facebook account.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I reset my password?</AccordionTrigger>
                  <AccordionContent>
                    If you've forgotten your password, click on the "Login" button, then select "Forgot password?"
                    You'll be prompted to enter your email address, and we'll send you instructions to reset your
                    password.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I delete my account?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can delete your account at any time. Go to your account settings, scroll to the bottom, and
                    click on "Delete Account." Please note that this action is permanent and cannot be undone.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reporting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Reporting Scams</CardTitle>
              <CardDescription>Information about reporting scams on ScamShield</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I report a scam?</AccordionTrigger>
                  <AccordionContent>
                    To report a scam, click on the "Report Scam" button in the navigation bar. Fill out the form with as
                    much detail as possible, including the type of scam, how you encountered it, and any evidence you
                    have. The more information you provide, the more helpful your report will be.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What happens after I report a scam?</AccordionTrigger>
                  <AccordionContent>
                    After you submit a report, it will be reviewed by our community members for verification. Once
                    verified, it will be added to our database and made available to other users. You'll receive
                    notifications about the status of your report and any updates.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I report a scam anonymously?</AccordionTrigger>
                  <AccordionContent>
                    Yes, you can choose to report a scam anonymously. However, creating an account allows you to track
                    your reports, receive updates, and earn points for your contributions to the community.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="community" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Community Questions</CardTitle>
              <CardDescription>Information about the ScamShield community</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is the points system?</AccordionTrigger>
                  <AccordionContent>
                    The points system rewards users for their contributions to the community. You can earn points by
                    reporting scams, verifying reports, creating educational content, and participating in discussions.
                    Points help determine your rank and unlock special badges.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I become a verified member?</AccordionTrigger>
                  <AccordionContent>
                    To become a verified member, you need to consistently contribute high-quality content to the
                    platform. This includes accurate scam reports, helpful verifications, and constructive participation
                    in the community. Once you reach a certain threshold of points and activity, you'll be eligible for
                    verification.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Are there community guidelines?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we have community guidelines that all members are expected to follow. These include being
                    respectful to other members, providing accurate information, and not using the platform for
                    harassment or spam. You can find the full guidelines in the Community section.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
