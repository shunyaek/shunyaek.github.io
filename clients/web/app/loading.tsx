"use client"

import { Container, Loader } from '@mantine/core';

export default function Loading() {
  return (
    <Container h={"100%"} mah={"100%"} mih={"100%"} sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Loader size="xl" variant="dots" />
    </Container>
  )
}
