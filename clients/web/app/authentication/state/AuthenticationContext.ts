import { createContext } from "react";
import { AuthenticationStateType } from "../types";

export const AuthenticationContext = createContext<AuthenticationStateType>({
  metadata: {
    status: "unauthenticated",
    authenticationTokens: {
      access_token: undefined,
      refresh_token: undefined,
    },
  },
  user: undefined,
});