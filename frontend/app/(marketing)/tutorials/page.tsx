import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Clock, Play, Star } from "lucide-react"

export default function TutorialsPage() {
  return (
    <div className="container py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">Tutorials</h1>
        <p className="text-muted-foreground">Learn how to use ScamShield and protect yourself from scams</p>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Tutorials</TabsTrigger>
          <TabsTrigger value="beginner">Beginner</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video relative bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="rounded-full h-12 w-12">
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">
                      {i === 0 && "Getting Started with ScamShield"}
                      {i === 1 && "How to Report a Scam"}
                      {i === 2 && "Understanding Phishing Attacks"}
                      {i === 3 && "Protecting Your Online Accounts"}
                      {i === 4 && "Recognizing Social Engineering"}
                      {i === 5 && "Advanced Scam Detection Techniques"}
                    </CardTitle>
                    <Badge variant={i < 2 ? "default" : i < 4 ? "secondary" : "outline"}>
                      {i < 2 ? "Beginner" : i < 4 ? "Intermediate" : "Advanced"}
                    </Badge>
                  </div>
                  <CardDescription>
                    {i === 0 && "Learn the basics of using ScamShield to protect yourself online"}
                    {i === 1 && "A step-by-step guide to reporting scams on our platform"}
                    {i === 2 && "Learn to identify and avoid sophisticated phishing attempts"}
                    {i === 3 && "Best practices for securing your online accounts"}
                    {i === 4 && "How to recognize and defend against social engineering tactics"}
                    {i === 5 && "Expert techniques for identifying complex scams"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{(i % 3) + 1}0 min</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
                      <span>4.{i + 5}/5</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="mr-1 h-4 w-4" />
                      <span>{(i + 1) * 123} views</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Watch Tutorial</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="beginner" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(2)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video relative bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="rounded-full h-12 w-12">
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">
                      {i === 0 && "Getting Started with ScamShield"}
                      {i === 1 && "How to Report a Scam"}
                    </CardTitle>
                    <Badge>Beginner</Badge>
                  </div>
                  <CardDescription>
                    {i === 0 && "Learn the basics of using ScamShield to protect yourself online"}
                    {i === 1 && "A step-by-step guide to reporting scams on our platform"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{(i % 3) + 1}0 min</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
                      <span>4.{i + 5}/5</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="mr-1 h-4 w-4" />
                      <span>{(i + 1) * 123} views</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Watch Tutorial</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="intermediate" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(2)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video relative bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="rounded-full h-12 w-12">
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">
                      {i === 0 && "Understanding Phishing Attacks"}
                      {i === 1 && "Protecting Your Online Accounts"}
                    </CardTitle>
                    <Badge variant="secondary">Intermediate</Badge>
                  </div>
                  <CardDescription>
                    {i === 0 && "Learn to identify and avoid sophisticated phishing attempts"}
                    {i === 1 && "Best practices for securing your online accounts"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{(i % 3) + 1}0 min</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
                      <span>4.{i + 5}/5</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="mr-1 h-4 w-4" />
                      <span>{(i + 1) * 123} views</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Watch Tutorial</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(2)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="aspect-video relative bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="icon" variant="secondary" className="rounded-full h-12 w-12">
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">
                      {i === 0 && "Recognizing Social Engineering"}
                      {i === 1 && "Advanced Scam Detection Techniques"}
                    </CardTitle>
                    <Badge variant="outline">Advanced</Badge>
                  </div>
                  <CardDescription>
                    {i === 0 && "How to recognize and defend against social engineering tactics"}
                    {i === 1 && "Expert techniques for identifying complex scams"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      <span>{(i % 3) + 1}0 min</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="mr-1 h-4 w-4 fill-primary text-primary" />
                      <span>4.{i + 5}/5</span>
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="mr-1 h-4 w-4" />
                      <span>{(i + 1) * 123} views</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Watch Tutorial</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
