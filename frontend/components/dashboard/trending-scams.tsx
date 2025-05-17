import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts"

interface TrendingScamsProps {
  showAll?: boolean
}

export function TrendingScams({ showAll = false }: TrendingScamsProps) {
  const data = [
    {
      name: "Phishing",
      count: 120,
      color: "#ef4444",
    },
    {
      name: "Investment",
      count: 80,
      color: "#f97316",
    },
    {
      name: "Romance",
      count: 70,
      color: "#8b5cf6",
    },
    {
      name: "Shopping",
      count: 60,
      color: "#3b82f6",
    },
    {
      name: "Tech Support",
      count: 50,
      color: "#10b981",
    },
    {
      name: "Employment",
      count: 40,
      color: "#6366f1",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Trending Scam Categories</CardTitle>
        <CardDescription>Most reported scam categories in the last 30 days</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip
                formatter={(value, name, props) => [`${value} reports`, "Count"]}
                labelFormatter={(value) => `Category: ${value}`}
              />
              <Bar dataKey="count" barSize={20}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {data.map((category) => (
            <Badge key={category.name} style={{ backgroundColor: category.color }}>
              {category.name}: {category.count} reports
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
