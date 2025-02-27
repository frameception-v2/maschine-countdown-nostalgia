import { NextResponse } from 'next/server'

export async function GET() {
  // Basic endpoint returning OK text
  return new NextResponse("OK", {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
