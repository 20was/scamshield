import { type NextRequest, NextResponse } from "next/server"
import { scamsService } from "@/services/scams-service"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const scam = await scamsService.getScamById(params.id)
    if (!scam) {
      return NextResponse.json({ error: "Scam not found" }, { status: 404 })
    }
    return NextResponse.json(scam)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch scam" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const data = await request.json()
    const updatedScam = await scamsService.updateScam(params.id, data)
    return NextResponse.json(updatedScam)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update scam" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await scamsService.deleteScam(params.id)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete scam" }, { status: 500 })
  }
}
