"use client"

import { useApplicationDispatch } from "@/hooks";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import { useAuthentication } from "../authentication/state";
import { Container } from "@mantine/core";

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const dispatch = useApplicationDispatch();
  const authentication = useAuthentication();
  useEffect(() => {
    if (authentication.metadata.status === "unauthenticated") {
      router.push("/authentication/signin");
    } else {
      dispatch({
        type: "Client/UpdateApplicationShellPadding", payload: {
          applicationShellPadding: 0,
        }
      });
      dispatch({
        type: "Client/ControlApplicationShellComponents", payload: {
          showHeader: true,
          showFooter: false,
          showNavigationBar: true,
          showAsideBar: false,
        }
      });
    }
  }, [authentication.metadata.status, dispatch, router]);
  return (
    <Container h={"100%"} mah={"100%"} fluid p={0}>
      {children}
    </Container>
  )
}
