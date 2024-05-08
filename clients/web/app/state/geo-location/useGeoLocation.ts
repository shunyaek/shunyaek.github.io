import { useContext } from "react";
import { GeoLocationContext } from "./GeoLocationContext";

const useGeoLocation = () => useContext(GeoLocationContext);

export { useGeoLocation };