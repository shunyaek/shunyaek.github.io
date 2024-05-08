type AnalyticsProjectHeadersType = {
  [header: string]: {
    datatype: "Integer" | "Float" | "String" | "Date" | "Time" | "DateTime";
    sorting: "Ascending" | "Descending";
  },
}

export type { AnalyticsProjectHeadersType };