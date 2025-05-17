import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Join ScamShield Today</h2>
            <p className="max-w-[900px] md:text-xl">
              Start protecting yourself and others from online scams. Join our community of vigilant users.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg" variant="secondary">
              <Link href="/register">Create Account</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/dashboard/education">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
