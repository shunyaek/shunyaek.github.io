"use client"

import { useAuthentication } from "@/app/authentication/state";
import { useApplicationDispatch } from "@/hooks";
import { useEffect } from "react";

export default function WorkSpaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useApplicationDispatch();
  const authentication = useAuthentication();
  useEffect(() => {
    async function readData(credentials?: string) {
      if (credentials !== undefined) {
        dispatch({
          type: "Client/ControlApplicationShellComponents", payload: {
            showHeader: true,
            showFooter: false,
            showNavigationBar: true,
            showAsideBar: true,
            asideState: {
              title: "Assistant",
              data: [],
            }
          }
        });
      } else {
        dispatch({
          type: "Client/ControlApplicationShellComponents", payload: {
            showHeader: true,
            showFooter: false,
            showNavigationBar: true,
            showAsideBar: false,
            asideState: {
              title: "",
              data: [],
            }
          }
        });
      }
    }
    readData(authentication.metadata.authenticationTokens.access_token);
  }, [authentication.metadata.authenticationTokens.access_token, dispatch]);
  return (
    <>
      {children}
    </>
  )
}
