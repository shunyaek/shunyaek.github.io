import Loader from "@/app/loader/page";
import { useAuthentication } from "./useAuthentication";

export const WithAuthenticationContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { user, metadata: { status, authenticationTokens: { access_token, refresh_token } } } = useAuthentication();
  if (access_token !== undefined && refresh_token !== undefined && user !== undefined) {
    return (
      <>
        {children}
      </>
    );
  }
  return <Loader />
}