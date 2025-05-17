import { type NextRequest, NextResponse } from "next/server"
import { scamsService } from "@/services/scams-service"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const category = searchParams.get("category")
  const query = searchParams.get("query")
  const page = Number.parseInt(searchParams.get("page") || "1")
  const limit = Number.parseInt(searchParams.get("limit") || "10")

  try {
    const scams = await scamsService.getScams({ category, query, page, limit })
    return NextResponse.json(scams)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch scams" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const newScam = await scamsService.createScam(data)
    return NextResponse.json(newScam, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create scam report" }, { status: 500 })
  }
}
