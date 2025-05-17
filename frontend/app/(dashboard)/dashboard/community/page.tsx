import { MessageSquare, Heart, Award, Users } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PageHeader } from '@/components/layout/page-header';
import { PageContainer } from '@/components/layout/page-container';

export default function CommunityPage() {
  return (
    <PageContainer>
      <PageHeader
        heading="Community"
        subheading="Connect with other users and share knowledge"
        icon={Users}
      />

      <Tabs defaultValue="discussions">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
        </TabsList>
        <TabsContent value="discussions" className="space-y-6 pt-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Recent Discussions</h2>
            <Button>New Discussion</Button>
          </div>

          {[1, 2, 3, 4].map((i) => (
            <Card key={i}>
              <CardHeader className="pb-3">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={`/placeholder.svg?height=40&width=40`}
                        alt="User"
                      />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">User Name {i}</div>
                      <div className="text-xs text-muted-foreground">
                        Posted 2 days ago
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline">Discussion</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-lg font-medium mb-2">
                  How to identify fake shopping websites?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  I've been seeing a lot of suspicious shopping sites lately.
                  What are some key indicators to watch out for?
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>24 replies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4" />
                    <span>18 likes</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="members" className="space-y-6 pt-6">
          <h2 className="text-xl font-semibold">Community Members</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={`/placeholder.svg?height=48&width=48`}
                        alt="User"
                      />
                      <AvatarFallback>U{i}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">Member Name {i}</div>
                      <div className="text-xs text-muted-foreground">
                        Joined 3 months ago
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Award className="h-3 w-3 text-primary" />
                        <span className="text-xs">Trusted Contributor</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-6 pt-6">
          <h2 className="text-xl font-semibold">Upcoming Events</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>Webinar: Protecting Seniors from Scams</CardTitle>
                  <CardDescription>May 15, 2023 • 2:00 PM EST</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Join our expert panel as they discuss strategies to help
                    seniors identify and avoid common scams targeting their
                    demographic.
                  </p>
                  <div className="flex items-center gap-2">
                    <Button size="sm">Register</Button>
                    <Button size="sm" variant="outline">
                      Add to Calendar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
}
