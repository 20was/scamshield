import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function NotificationsPage() {
  return (
    <div className="container py-10 space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Notifications</h1>
          <p className="text-muted-foreground">Stay updated on important alerts and activity</p>
        </div>
        <Button variant="outline">Mark All as Read</Button>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">
            Unread
            <Badge variant="secondary" className="ml-2">
              12
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <Card key={i} className={i < 3 ? "border-l-4 border-l-primary" : ""}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-base font-medium">
                    {i === 0 && "New scam reported in your area"}
                    {i === 1 && "Your report was verified by 5 users"}
                    {i === 2 && "Urgent alert: Banking scam on the rise"}
                    {i === 3 && "You earned the 'Vigilant Reporter' badge"}
                    {i === 4 && "New educational resource available"}
                  </CardTitle>
                  <Badge variant="outline">
                    {i < 2 ? "New" : i === 2 ? "Alert" : i === 3 ? "Achievement" : "Update"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  {i === 0 &&
                    "A new phishing scam targeting local residents has been reported in your area. Stay vigilant."}
                  {i === 1 &&
                    "Your recent scam report has been verified by 5 community members. Thank you for your contribution!"}
                  {i === 2 &&
                    "There's been a significant increase in banking scams. Please review the latest safety guidelines."}
                  {i === 3 &&
                    "Congratulations! You've earned the 'Vigilant Reporter' badge for your consistent contributions."}
                  {i === 4 &&
                    "We've added a new guide on identifying cryptocurrency scams to our educational resources."}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">
                    {i === 0
                      ? "2 hours ago"
                      : i === 1
                        ? "Yesterday"
                        : i === 2
                          ? "2 days ago"
                          : i === 3
                            ? "Last week"
                            : "2 weeks ago"}
                  </span>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="unread" className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <Card key={i} className="border-l-4 border-l-primary">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-base font-medium">
                    {i === 0 && "New scam reported in your area"}
                    {i === 1 && "Your report was verified by 5 users"}
                    {i === 2 && "Urgent alert: Banking scam on the rise"}
                  </CardTitle>
                  <Badge variant="outline">{i < 2 ? "New" : "Alert"}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">
                  {i === 0 &&
                    "A new phishing scam targeting local residents has been reported in your area. Stay vigilant."}
                  {i === 1 &&
                    "Your recent scam report has been verified by 5 community members. Thank you for your contribution!"}
                  {i === 2 &&
                    "There's been a significant increase in banking scams. Please review the latest safety guidelines."}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">
                    {i === 0 ? "2 hours ago" : i === 1 ? "Yesterday" : "2 days ago"}
                  </span>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <Card className="border-l-4 border-l-primary">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-base font-medium">Urgent alert: Banking scam on the rise</CardTitle>
                <Badge variant="outline">Alert</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                There's been a significant increase in banking scams. Please review the latest safety guidelines.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">2 days ago</span>
                <Button variant="ghost" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="community" className="space-y-4">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-base font-medium">You earned the 'Vigilant Reporter' badge</CardTitle>
                <Badge variant="outline">Achievement</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                Congratulations! You've earned the 'Vigilant Reporter' badge for your consistent contributions.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Last week</span>
                <Button variant="ghost" size="sm">
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
