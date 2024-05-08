import { NextRequest, NextResponse } from "next/server";
import { readGlobalMarketStatus } from "../utilities";
import { AlphaVantageAPIGlobalMarketsStatusType } from "../../types";
import mockData from "./mock.json";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const mode = url.searchParams.get("mock");
  if (mode === "true") {
    return NextResponse.json(mockData as AlphaVantageAPIGlobalMarketsStatusType);
  }
  const data: AlphaVantageAPIGlobalMarketsStatusType = await readGlobalMarketStatus();
  return NextResponse.json(data);
}