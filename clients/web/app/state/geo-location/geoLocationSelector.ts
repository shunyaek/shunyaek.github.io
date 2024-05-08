import { ApplicationState } from "@/store";

export const geoLocationSelector = (state: ApplicationState) =>
  state.geoLocation;
