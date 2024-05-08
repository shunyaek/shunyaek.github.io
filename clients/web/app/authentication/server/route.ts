import { NextRequest, NextResponse } from "next/server";
import { AuthenticationStateType, AuthenticationTokensType, UserType } from "../types";

const AUTHENTICATION_URL = "http://127.0.0.1:8000/authentication/signin/?username=email"

export async function POST(request: NextRequest) {
  const credentialsFromRequestHeaders = request.headers.get("Authorization");
  if (credentialsFromRequestHeaders !== undefined) {
    const responseFromServerAPI = await fetch(AUTHENTICATION_URL, {
      method: "POST",
      headers: {
        "Authorization": `${credentialsFromRequestHeaders}`,
      }
    });
    if (responseFromServerAPI.ok) {
      const responseFromServerAPIJSON: UserType = await responseFromServerAPI.json();
      const responseFromServerAPIHeaders = Array.from(responseFromServerAPI.headers.entries());
      const responseFromServerAPISetCookies = responseFromServerAPIHeaders.filter(responseFromServerAPIHeader => responseFromServerAPIHeader.includes("set-cookie"));
      let authenticationTokens: AuthenticationTokensType = {
        access_token: "",
        refresh_token: "",
      }
      responseFromServerAPISetCookies.forEach((responseFromServerAPISetCookie) => {
        const splitCookie = responseFromServerAPISetCookie[1].split(";");
        const tokenOfInterest = splitCookie[0];
        const splitTokenOfInterest = tokenOfInterest.split("=");
        if (splitTokenOfInterest[0] === "ACCESS_TOKEN") {
          authenticationTokens.access_token = splitTokenOfInterest[1];
        } else if (splitTokenOfInterest[0] === "REFRESH_TOKEN") {
          authenticationTokens.refresh_token = splitTokenOfInterest[1];
        } else {
          authenticationTokens.access_token = "";
          authenticationTokens.refresh_token = "";
        }
      });
      const returnValue: AuthenticationStateType = {
        user: responseFromServerAPIJSON,
        metadata: {
          authenticationTokens: authenticationTokens,
          status: "authenticated",
        }
      };
      return NextResponse.json(returnValue);
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
      return NextResponse.json(returnValue);
    }
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
    return NextResponse.json(returnValue);
  }
}