"use client";

import {
  Group,
  AppShell,
  useMantineTheme,
  Header,
  Button,
  Title,
  Flex,
} from '@mantine/core';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import type { Database } from '@/database.types';
import { UserResponse } from '@supabase/supabase-js';

export const dynamic = 'force-dynamic'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [authentication, setAuthentication] = useState<UserResponse>();
  const supabase = createClientComponentClient<Database>();
  useEffect(() => {
    supabase.auth.getUser().then((response) => {
      setAuthentication(response);
    });
  }, []);
  const theme = useMantineTheme();

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <AppShell
          styles={{
            main: {
              width: "100%",
              height: "100%",
              padding: 0,
              margin: 0,
              paddingTop: 60,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
          header={
            <>
              <Header height={60} px="md">
                <Group position="apart" sx={{ height: '100%' }}>
                  <Flex direction={"row"} justify={"center"} align={"center"}>
                    <Title color={"dark"}>{"♠️"}</Title>
                    <Title color={"red"}>{"♦️"}</Title>
                    <Title color={"dark"}>{"♣️"}</Title>
                    <Title color={"red"}>{"♥️"}</Title>
                  </Flex>
                  <Group>
                    {authentication?.data.user ? (
                      <div>
                        Hey, {authentication.data.user.email}!
                        <Button component={Link} href="/authentication/signout" variant="default">Sign-Out</Button>
                      </div>
                    ) : (
                      <>
                        <Button component={Link} href="/authentication/signin" variant="default">Sign-In</Button>
                        <Button>Sign-Up</Button>
                      </>
                    )}
                  </Group>
                </Group>
              </Header>
            </>
          }
        >
          {children}
        </AppShell>
      </body>
    </html>
  )
}
