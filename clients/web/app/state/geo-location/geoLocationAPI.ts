import { GeoLocationStateType } from "./types";

const GEO_LOCATION_URL = "http://localhost:3000/state/geo-location/server";

const readGeoLocationData = async () => {
  const response = await fetch(GEO_LOCATION_URL, {
    method: "GET",
  });
  const responseJSON: GeoLocationStateType = JSON.parse(await response.json());
  // window.sessionStorage.setItem("geo-location.shunyaek.se", JSON.stringify(responseJSON));
  return responseJSON;
}

export { readGeoLocationData };