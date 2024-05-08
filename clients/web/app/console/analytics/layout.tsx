"use client"

import { useAuthentication } from "@/app/authentication/state";
import { useApplicationDispatch } from "@/hooks";
import { ChangeEvent, useEffect, useState } from "react";
import { Button, Center, Text, Container, Loader, Paper, TextInput } from "@mantine/core";
import { IconNetwork } from "@tabler/icons-react";

export default function AnalyticsLayout({
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
              title: "Projects",
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
            showAsideBar: true,
            asideState: {
              title: "Projects",
              data: [],
            }
          }
        });
      }
    }
    readData(authentication.metadata.authenticationTokens.access_token);
  }, [authentication.metadata.authenticationTokens.access_token, dispatch]);
  return (
    // <Container h={"100%"} w={"100%"} fluid sx={{ border: "1px solid teal" }}>
    <>
      {children}
    </>
    // </Container>
  )
}
