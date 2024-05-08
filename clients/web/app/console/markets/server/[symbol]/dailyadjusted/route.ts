import { NextRequest, NextResponse } from "next/server";
import { readDailyAdjusted } from "../../utilities";

export async function GET(request: Request, { params }: { params: { symbol: string } }) {
  const symbol = params.symbol;
  const data = await readDailyAdjusted({
    symbol: symbol,
    outputSize: "full",
    dataFormat: "JSON",
  });
  return NextResponse.json(data);
}