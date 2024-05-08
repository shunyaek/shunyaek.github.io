import { ApplicationState } from "@/store";

export const clientStateSelector = (state: ApplicationState) =>
  state.client;
