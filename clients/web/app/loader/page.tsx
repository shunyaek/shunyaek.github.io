"use client"

import ApplicationShell from '@/components/ApplicationShell';
import { Container, Loader as MantineLoader } from '@mantine/core';

export default function Loader() {
  return (
    <ApplicationShell
      // showNavigationBar={false}
      // showAsideBar={false}
      // showHeader={true}
      // showFooter={false}
      // padding={"xs"}
    >
      <Container>
        <MantineLoader size="xl" variant="dots" />
      </Container>
    </ApplicationShell>
  )
}
