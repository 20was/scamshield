import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, FileQuestion, HelpCircle, Mail, MessageSquare, Phone } from "lucide-react"

export default function HelpPage() {
  return (
    <div className="container py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Help & Support</h1>
        <p className="text-muted-foreground">Find the resources you need to use ScamShield effectively</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileQuestion className="h-5 w-5 text-primary" />
              <span>Frequently Asked Questions</span>
            </CardTitle>
            <CardDescription>Find answers to common questions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Browse our comprehensive FAQ section to find answers to the most common questions about ScamShield.
            </p>
            <Button asChild>
              <Link href="/faq">View FAQs</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span>Tutorials & Guides</span>
            </CardTitle>
            <CardDescription>Learn how to use ScamShield</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Access our library of tutorials and guides to learn how to use ScamShield effectively.
            </p>
            <Button asChild>
              <Link href="/tutorials">View Tutorials</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span>Contact Support</span>
            </CardTitle>
            <CardDescription>Get help from our team</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Can't find what you're looking for? Contact our support team for personalized assistance.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span>Community Forum</span>
            </CardTitle>
            <CardDescription>Connect with other users</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Join our community forum to ask questions, share experiences, and learn from other ScamShield users.
            </p>
            <Button asChild>
              <Link href="/dashboard/community">Visit Forum</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span>Phone Support</span>
            </CardTitle>
            <CardDescription>Talk to a representative</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              For urgent matters, you can reach our support team by phone during business hours.
            </p>
            <div className="text-sm font-medium">+1 (555) 123-4567</div>
            <div className="text-xs text-muted-foreground">Monday-Friday, 9am-5pm EST</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-primary" />
              <span>Troubleshooting</span>
            </CardTitle>
            <CardDescription>Solve common issues</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Find solutions to common technical issues you might encounter while using ScamShield.
            </p>
            <Button asChild>
              <Link href="/help/troubleshooting">View Solutions</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Still need help?</CardTitle>
          <CardDescription>We're here to assist you</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="flex-1">
            <Link href="/contact">
              <Mail className="mr-2 h-4 w-4" />
              Email Support
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <Link href="/dashboard/community">
              <MessageSquare className="mr-2 h-4 w-4" />
              Ask the Community
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
