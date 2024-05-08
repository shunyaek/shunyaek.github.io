type AlphaVantageAPIMarketStatusType = {
  market_type: string;
  region: string;
  primary_exchanges: string;
  local_open: string;
  local_close: string;
  current_status: string;
  notes: string;
}

type AlphaVantageAPIGlobalMarketsStatusType = {
  endpoint: string;
  markets: AlphaVantageAPIMarketStatusType[];
}

export type { AlphaVantageAPIGlobalMarketsStatusType };