import { AnalyticsDataRowType } from "./AnalyticsDataRowType";
import { AnalyticsProjectHeadersType } from "./AnalyticsProjectHeadersType";

type AnalyticsProjectType = {
  spreadsheet: string;
  data: AnalyticsDataRowType[];
  headers: AnalyticsProjectHeadersType;
  primaryAttribute: string | undefined;
}

export type { AnalyticsProjectType };