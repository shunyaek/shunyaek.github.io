import { NextRequest, NextResponse } from "next/server";
import { searchKeyWords } from "../../utilities";

export async function GET(request: Request, { params }: { params: { symbol: string } }) {
  const symbol = params.symbol;
  const data = await searchKeyWords(symbol);
  return NextResponse.json(data);
}