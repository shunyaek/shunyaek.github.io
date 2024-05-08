import { ApplicationState } from "@/store";

export const authenticationSelector = (state: ApplicationState) =>
  state.authentication;
