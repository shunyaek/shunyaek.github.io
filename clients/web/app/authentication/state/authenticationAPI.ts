import { AuthenticationStateType } from "@/app/authentication/types";

const AUTHENTICATION_URL = "http://localhost:3000/authentication/server/";

const signInWithEMail = async (email?: string, password?: string) => {
  if (email !== undefined && password !== undefined) {
    const credentials = `${email}:${password}`;
    const encodedCredentials = btoa(credentials);
    const authenticationHeaderValue = `Basic ${encodedCredentials}`;
    const response = await fetch(AUTHENTICATION_URL, {
      method: "POST",
      headers: {
        "Authorization": authenticationHeaderValue,
      }
    });
    const responseJSON: AuthenticationStateType = await response.json();
    window.sessionStorage.setItem("authentication.shunyaek.se", JSON.stringify(responseJSON));
    return responseJSON;
  } else {
    const returnValue: AuthenticationStateType = {
      user: undefined,
      metadata: {
        status: "unauthenticated",
        authenticationTokens: {
          access_token: undefined,
          refresh_token: undefined,
        },
      }
    }
    return returnValue;
  }
}

export { signInWithEMail };