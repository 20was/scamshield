"use client"
import { Card, CardContent } from "@/components/ui/card"
import { scamTypes } from "@/lib/recovery-guide"
import { CreditCard, User, Mail, Heart, Laptop, Ticket, Briefcase, ShoppingBag, Bitcoin } from "lucide-react"

interface ScamTypeSelectorProps {
  selectedType: string | null
  onSelect: (scamTypeId: string) => void
  searchQuery: string
}

export function ScamTypeSelector({ selectedType, onSelect, searchQuery }: ScamTypeSelectorProps) {
  // Function to get the appropriate icon based on the icon string
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "credit-card":
        return <CreditCard className="h-5 w-5" />
      case "user":
        return <User className="h-5 w-5" />
      case "mail":
        return <Mail className="h-5 w-5" />
      case "heart":
        return <Heart className="h-5 w-5" />
      case "laptop":
        return <Laptop className="h-5 w-5" />
      case "ticket":
        return <Ticket className="h-5 w-5" />
      case "briefcase":
        return <Briefcase className="h-5 w-5" />
      case "shopping-bag":
        return <ShoppingBag className="h-5 w-5" />
      case "bitcoin":
        return <Bitcoin className="h-5 w-5" />
      default:
        return <CreditCard className="h-5 w-5" />
    }
  }

  // Filter scam types based on search query
  const filteredScamTypes = scamTypes.filter(
    (scam) =>
      searchQuery === "" ||
      scam.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      scam.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredScamTypes.map((scamType) => (
        <Card
          key={scamType.id}
          className={`cursor-pointer transition-all hover:shadow-md ${
            selectedType === scamType.id ? "border-primary ring-2 ring-primary ring-opacity-50" : ""
          }`}
          onClick={() => onSelect(scamType.id)}
        >
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className="rounded-full bg-primary/10 p-3 text-primary">{getIconComponent(scamType.icon)}</div>
              <div>
                <h3 className="font-medium">{scamType.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{scamType.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
