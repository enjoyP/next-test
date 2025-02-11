import { NextResponse } from "next/server"

export function GET() {
    console.log("GET /api/time")
    return NextResponse.json({ 
        time: new Date().toLocaleTimeString() 
    })
}
