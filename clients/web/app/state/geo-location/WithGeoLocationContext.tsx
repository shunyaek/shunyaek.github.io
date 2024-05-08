import Loader from "@/app/loader/page";
import { useGeoLocation } from "./useGeoLocation";

export const WithGeoLocationContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    ip,
    hostname,
    city,
    region,
    country,
    loc,
    org,
    postal,
    timezone,
  } = useGeoLocation();
  if (
    ip !== undefined
    && hostname !== undefined
    && city !== undefined
    && region !== undefined
    && country !== undefined
    && loc !== undefined
    && org !== undefined
    && postal !== undefined
    && timezone !== undefined
  ) {
    return (
      <>
        {children}
      </>
    );
  }
  return <Loader />
}