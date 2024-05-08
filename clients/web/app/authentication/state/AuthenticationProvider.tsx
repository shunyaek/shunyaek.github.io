import { useApplicationSelector } from "@/hooks";
import { AuthenticationContext } from "./AuthenticationContext";
import { authenticationSelector } from "./authenticationSelector";
import { AuthenticationStateType } from "../types";
import { useEffect, useState } from "react";

export function AuthenticationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  let authentication = useApplicationSelector(authenticationSelector);
  const [authenticationStateFromSessionStorage, setAuthenticationStateFromSessionStorage] = useState<string | null>(null);
  useEffect(() => {
    const fetchedAuthenticationStateFromSessionStorage = window.sessionStorage.getItem("authentication.shunyaek.se");
    setAuthenticationStateFromSessionStorage(fetchedAuthenticationStateFromSessionStorage);
  }, []);
  if (authenticationStateFromSessionStorage !== null) {
    authentication = JSON.parse(authenticationStateFromSessionStorage);
  }
  console.log("::: AUTHENTICATION :::", { authentication });
  return (
    <AuthenticationContext.Provider value={authentication}>
      {children}
    </AuthenticationContext.Provider>
  );
}