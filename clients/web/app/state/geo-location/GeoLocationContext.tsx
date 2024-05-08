import { createContext } from "react";
import { GeoLocationStateType } from "./types";

export const GeoLocationContext = createContext<GeoLocationStateType>({
  ip: "",
  hostname: "",
  city: "",
  region: "",
  country: "",
  loc: "",
  org: "",
  postal: "",
  timezone: "",
});