import { AlphaVantageAPIGlobalMarketsStatusType } from "../types";

const ALPHA_VANTAGE_BASE_URL = `https://www.alphavantage.co/query?&apikey=${process.env.NEXT_PUBLIC_ALPHA_VANTAGE_KEY}`;

type AlphaVantageAPIFunctionType = "OVERVIEW" | "TIME_SERIES_DAILY" | "SYMBOL_SEARCH" | "MARKET_STATUS";
type AlphaVantageAPISymbolType = string;
type AlphaVantageAPIKeyWordsType = string;
type AlphaVantageAPIOutputSizeType = "compact" | "full";
type AlphaVantageAPIDataFormatType = "JSON" | "CSV";

const readFunctionQuery = async (alphaVantageAPIFunction: AlphaVantageAPIFunctionType) => {
  return `&function=${alphaVantageAPIFunction}`;
}

const readSymbolQuery = async (alphaVantageAPISymbol: AlphaVantageAPISymbolType) => {
  return `&symbol=${alphaVantageAPISymbol}`;
}

const readOutputSizeQuery = async (alphaVantageAPIOutputSize: AlphaVantageAPIOutputSizeType) => {
  return `&outputsize=${alphaVantageAPIOutputSize}`;
}

const readDataFormatQuery = async (alphaVantageAPIDataFormat: AlphaVantageAPIDataFormatType) => {
  return `&datatype=${alphaVantageAPIDataFormat}`;
}

const readKeyWordsQuery = async (alphaVantageAPIKeyWords: AlphaVantageAPIKeyWordsType) => {
  return `&keywords=${alphaVantageAPIKeyWords}`;
}

const readCompany = async (symbol: AlphaVantageAPISymbolType) => {
  const functionQuery = await readFunctionQuery("OVERVIEW");
  const symbolQuery = await readSymbolQuery(symbol);
  const URL = `${ALPHA_VANTAGE_BASE_URL}${functionQuery}${symbolQuery}`;
  const response = await fetch(URL, {
    method: "GET",
  });
  return response.json();
}

const searchKeyWords = async (keyword: AlphaVantageAPIKeyWordsType) => {
  const functionQuery = await readFunctionQuery("SYMBOL_SEARCH");
  const keywordsQuery = await readKeyWordsQuery(keyword);
  const URL = `${ALPHA_VANTAGE_BASE_URL}${functionQuery}${keywordsQuery}`;
  const response = await fetch(URL, {
    method: "GET",
  });
  const responseJSON = await response.json();
  return responseJSON;
}

const readGlobalMarketStatus = async () => {
  const functionQuery = await readFunctionQuery("MARKET_STATUS");
  const URL = `${ALPHA_VANTAGE_BASE_URL}${functionQuery}`;
  console.log({ URL });
  const response = await fetch(URL, {
    method: "GET",
  });
  const responseJSON: AlphaVantageAPIGlobalMarketsStatusType = await response.json();
  return responseJSON;
}

type AlphaVantageAPIDailyAdjustedRequestParametersType = {
  symbol: AlphaVantageAPISymbolType;
  outputSize: AlphaVantageAPIOutputSizeType;
  dataFormat: AlphaVantageAPIDataFormatType;
}

const readDailyAdjusted = async ({ symbol, outputSize, dataFormat = "JSON" }: AlphaVantageAPIDailyAdjustedRequestParametersType) => {
  const functionQuery = await readFunctionQuery("TIME_SERIES_DAILY");
  const symbolQuery = await readSymbolQuery(symbol);
  const outputSizeQuery = await readOutputSizeQuery(outputSize);
  const dataFormatQuery = await readDataFormatQuery(dataFormat);
  const URL = `${ALPHA_VANTAGE_BASE_URL}${functionQuery}${symbolQuery}${outputSizeQuery}${dataFormatQuery}`;
  const response = await fetch(URL, {
    method: "GET",
  });
  if (dataFormat === "JSON") {
    const responseJSON = await response.json();
    return responseJSON;
  } else if (dataFormat === "CSV") {
    const readResponse = await response.blob();
    return readResponse;
  }
}

export { ALPHA_VANTAGE_BASE_URL, searchKeyWords, readDailyAdjusted, readCompany, readGlobalMarketStatus };