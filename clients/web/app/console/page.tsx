"use client"

import { Container, Skeleton } from '@mantine/core';

export default function Console() {
  return (
    <Container h={"100%"} fluid p={"sm"}>
      <Skeleton animate={false} height={40} width={"25%"} my={6} radius="md" />
      <Skeleton animate={false} height={8} radius="xl" mt={"xl"} />
      <Skeleton animate={false} height={8} mt={"xs"} width={"75%"} radius="xl" />
      <Skeleton animate={false} height={100} width={"10%"} radius={"md"} my="xl" />
      <Skeleton animate={false} height={8} mt={6} width="70%" radius="xl" />
    </Container>
  )
}
