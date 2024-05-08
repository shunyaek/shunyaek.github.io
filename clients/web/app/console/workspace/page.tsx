"use client"

import { ActionIcon, Avatar, Container, Flex, Grid, Paper, ScrollArea, Text, Textarea, ThemeIcon, Title } from '@mantine/core';
import { IconSend } from '@tabler/icons-react';
import { useState } from 'react';

export default function WorkSpace() {
  return (
    <Container fluid h={"100%"} p={0} m={0} pb={"md"}>
      <Flex
        h={"100%"} w={"100%"}
        mah={"100%"} maw={"100%"}
        direction={"row"} justify={"stretch"} align={"stretch"}
        gap={"xs"} px={"xs"}
      >
        <Paper h={"100%"} w={"100%"} withBorder my={"xs"}>
          <Flex h={"100%"} w={"100%"} m={0} direction={"column"} justify={"center"} align={"center"}>
            <Title>Notebook Pane</Title>
          </Flex>
        </Paper>
      </Flex>
    </Container>
  )
}
