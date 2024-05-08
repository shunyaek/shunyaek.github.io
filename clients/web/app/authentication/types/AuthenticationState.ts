import { AuthenticationTokensType, UserType } from "@/app/authentication/types";

type AuthenticationStateType = {
  metadata: {
    authenticationTokens: AuthenticationTokensType;
    status: "authenticated" | "unauthenticated" | "authenticating";
  };
  user: UserType | undefined;
}

export type { AuthenticationStateType };