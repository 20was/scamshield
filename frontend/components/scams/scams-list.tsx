"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpDown, MoreHorizontal, Eye, ThumbsUp, Flag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { mockScams } from "@/services/mock-data"

export function ScamsList() {
  const [scams, setScams] = useState(mockScams)
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [sortField, setSortField] = useState<"date" | "severity" | "reports">("date")

  const handleSort = (field: "date" | "severity" | "reports") => {
    const newOrder = field === sortField && sortOrder === "asc" ? "desc" : "asc"
    setSortField(field)
    setSortOrder(newOrder)

    // Sort the scams based on the selected field and order
    const sortedScams = [...scams].sort((a, b) => {
      if (field === "date") {
        return newOrder === "asc"
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime()
      } else if (field === "severity") {
        const severityOrder = { high: 3, medium: 2, low: 1 }
        return newOrder === "asc"
          ? severityOrder[a.severity as keyof typeof severityOrder] -
              severityOrder[b.severity as keyof typeof severityOrder]
          : severityOrder[b.severity as keyof typeof severityOrder] -
              severityOrder[a.severity as keyof typeof severityOrder]
      } else {
        return newOrder === "asc" ? a.reports - b.reports : b.reports - a.reports
      }
    })

    setScams(sortedScams)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      <Card>
        <CardHeader>
          <CardTitle>Scams Database</CardTitle>
          <CardDescription>Browse and search through reported scams</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>
                    <Button
                      variant="ghost"
                      onClick={() => handleSort("severity")}
                      className="flex items-center p-0 h-auto font-medium"
                    >
                      Severity
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button
                      variant="ghost"
                      onClick={() => handleSort("date")}
                      className="flex items-center p-0 h-auto font-medium"
                    >
                      Date
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button
                      variant="ghost"
                      onClick={() => handleSort("reports")}
                      className="flex items-center p-0 h-auto font-medium"
                    >
                      Reports
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {scams.map((scam, index) => (
                  <TableRow key={scam.id} className="group transition-colors hover:bg-muted/50">
                    <TableCell className="font-medium">
                      <Link href={`/dashboard/scams/${scam.id}`} className="hover:text-primary transition-colors">
                        {scam.title}
                      </Link>
                    </TableCell>
                    <TableCell>{scam.category}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          scam.severity === "high" ? "destructive" : scam.severity === "medium" ? "warning" : "outline"
                        }
                        className="animate-scale-in"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        {scam.severity}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(scam.date).toLocaleDateString()}</TableCell>
                    <TableCell>{scam.reports}</TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem asChild>
                            <Link href={`/dashboard/scams/${scam.id}`} className="flex items-center cursor-pointer">
                              <Eye className="mr-2 h-4 w-4" />
                              <span>View details</span>
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ThumbsUp className="mr-2 h-4 w-4" />
                            <span>Verify report</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <Flag className="mr-2 h-4 w-4" />
                            <span>Report inaccuracy</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
