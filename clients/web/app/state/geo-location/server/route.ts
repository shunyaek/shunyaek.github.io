import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await fetch(`https://ipinfo.io?token=${process.env.NEXT_PUBLIC_IPINFO_KEY}`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
    },
  })
  const dataText = await data.text();
  const response = NextResponse.json(dataText);
  return response;
}