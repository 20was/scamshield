import type { Scam } from "@/models/scam"
import { mockScams } from "@/services/mock-data"

// Mock scams service
export const scamsService = {
  async getScams({
    category,
    query,
    page = 1,
    limit = 10,
  }: {
    category?: string | null
    query?: string | null
    page?: number
    limit?: number
  }): Promise<{ scams: Scam[]; total: number; page: number; totalPages: number }> {
    // In a real app, this would make an API call to get scams
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Filter scams based on category and query
    let filteredScams = [...mockScams]

    if (category) {
      filteredScams = filteredScams.filter((scam) => scam.category === category)
    }

    if (query) {
      const searchQuery = query.toLowerCase()
      filteredScams = filteredScams.filter(
        (scam) =>
          scam.title.toLowerCase().includes(searchQuery) || scam.description.toLowerCase().includes(searchQuery),
      )
    }

    // Paginate results
    const total = filteredScams.length
    const totalPages = Math.ceil(total / limit)
    const startIndex = (page - 1) * limit
    const endIndex = startIndex + limit
    const paginatedScams = filteredScams.slice(startIndex, endIndex)

    return {
      scams: paginatedScams,
      total,
      page,
      totalPages,
    }
  },

  async getScamById(id: string): Promise<Scam | null> {
    // In a real app, this would make an API call to get a scam by ID
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Find scam by ID
    const scam = mockScams.find((scam) => scam.id === id)

    return scam || null
  },

  async createScam(data: Omit<Scam, "id" | "date" | "reports" | "status">): Promise<Scam> {
    // In a real app, this would make an API call to create a scam
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Create new scam
    const newScam: Scam = {
      id: `scam-${mockScams.length + 1}`,
      ...data,
      date: new Date().toISOString(),
      reports: 1,
      status: "reported",
    }

    return newScam
  },

  async updateScam(id: string, data: Partial<Scam>): Promise<Scam> {
    // In a real app, this would make an API call to update a scam
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Find scam by ID
    const scamIndex = mockScams.findIndex((scam) => scam.id === id)

    if (scamIndex === -1) {
      throw new Error("Scam not found")
    }

    // Update scam
    const updatedScam = {
      ...mockScams[scamIndex],
      ...data,
    }

    return updatedScam
  },

  async deleteScam(id: string): Promise<void> {
    // In a real app, this would make an API call to delete a scam
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Find scam by ID
    const scamIndex = mockScams.findIndex((scam) => scam.id === id)

    if (scamIndex === -1) {
      throw new Error("Scam not found")
    }
  },

  async verifyScam(id: string, userId: string): Promise<Scam> {
    // In a real app, this would make an API call to verify a scam
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Find scam by ID
    const scamIndex = mockScams.findIndex((scam) => scam.id === id)

    if (scamIndex === -1) {
      throw new Error("Scam not found")
    }

    // Update scam
    const updatedScam = {
      ...mockScams[scamIndex],
      status: "verified",
    }

    return updatedScam
  },
}
