"use client"

import Hero from '@/components/LandingPage/Hero';
import { Container, ScrollArea } from '@mantine/core';
import { useEffect } from 'react';
import { useApplicationDispatch } from '@/hooks';

export default function Home() {
  const dispatch = useApplicationDispatch();
  useEffect(() => {
    dispatch({
      type: "Client/UpdateApplicationShellPadding", payload: {
        applicationShellPadding: 0,
      }
    });
    dispatch({
      type: "Client/ControlApplicationShellComponents", payload: {
        showHeader: true,
        showFooter: false,
        showNavigationBar: false,
        showAsideBar: false,
      }
    });
  }, [dispatch]);
  return (
    <Container
      p={0}
      w={"100%"} maw={"100%"} miw={"100%"}
      h={"100%"} mah={"100%"} mih={"100%"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <ScrollArea h={"100%"} w={"100%"} type="never">
        <Hero />
      </ScrollArea>
    </Container>
  )
}
