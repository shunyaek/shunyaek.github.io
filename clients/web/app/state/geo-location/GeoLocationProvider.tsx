import { useApplicationSelector } from "@/hooks";
import { GeoLocationContext } from "./GeoLocationContext";
import { geoLocationSelector } from "./geoLocationSelector";
import { useEffect, useState } from "react";

export function GeoLocationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  let geoLocation = useApplicationSelector(geoLocationSelector);
  // const [geoLocationStateFromSessionStorage, setGeoLocationStateFromSessionStorage] = useState<string | null>(null);
  useEffect(() => {
    // const fetchedGeoLocationStateFromSessionStorage = window.sessionStorage.getItem("geo-location.shunyaek.se");
    // setGeoLocationStateFromSessionStorage(fetchedGeoLocationStateFromSessionStorage);
  }, []);
  // if (geoLocationStateFromSessionStorage !== null) {
  //   geoLocation = JSON.parse(geoLocationStateFromSessionStorage);
  // }
  console.log("::: GEO-LOCATION :::", { geoLocation });
  return (
    <GeoLocationContext.Provider value={geoLocation}>
      {children}
    </GeoLocationContext.Provider>
  );
}