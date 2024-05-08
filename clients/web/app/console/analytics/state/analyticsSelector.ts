import { ApplicationState } from "@/store";

export const analyticsSelector = (state: ApplicationState) =>
  state.analytics;
