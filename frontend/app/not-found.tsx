import Link from "next/link"
import { Shield, Home, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">ScamShield</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto flex-1 py-6 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
          <div className="rounded-full bg-muted p-6 mb-6">
            <AlertTriangle className="h-12 w-12 text-warning" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-2">Page Not Found</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-md">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/dashboard/scams">Browse Scams</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
