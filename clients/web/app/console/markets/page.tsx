"use client"

import { Button, Container, Flex, HoverCard, Title, Text, Select, Card, Group, Badge, ThemeIcon, Grid, Indicator, Tooltip, Box, useMantineColorScheme, ScrollArea, Avatar } from '@mantine/core';
import { useEffect, useState } from 'react';
import { AlphaVantageAPIGlobalMarketsStatusType } from './types';
import { IconClockPause, IconClockPlay, IconWorld } from '@tabler/icons-react';

function convertISOToFlag(isoCode: string) {
  const base = 127397; // Unicode value offset for flag emojis
  const isoChars = isoCode.toUpperCase().split('');
  const flag = isoChars.map(char => String.fromCodePoint(char.charCodeAt(0) + base)).join('');
  return flag;
}

export default function Markets() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [globalMarketsStatus, setGlobalMarketsStatus] = useState<AlphaVantageAPIGlobalMarketsStatusType>();
  useEffect(() => {
    const readGlobalMarketsStatus = async () => {
      const data = await fetch("/console/markets/server/globalmarketstatus?mock=true", {
        method: "GET",
      });
      const dataJSON: AlphaVantageAPIGlobalMarketsStatusType = await data.json();
      setGlobalMarketsStatus(dataJSON);
    }
    readGlobalMarketsStatus();
  }, []);
  return (
    <Container h={"100%"} fluid p={0}>
      <Flex py={"xl"} h={"100%"} justify={"flex-start"} align={"center"} direction={"column"}>
        {/* <Button
          onClick={async () => {
            const data = await fetch("/console/markets/server/AAPL/dailyadjusted", {
              method: "GET",
            })
          }}
        >
          Fetch Data
        </Button> */}
        <HoverCard withinPortal withArrow width={1000} shadow="md" disabled={globalMarketsStatus === undefined}>
          <HoverCard.Target>
            <Button
              variant={"filled"}
              leftIcon={<ThemeIcon variant={"light"} color={"teal"}><IconWorld /></ThemeIcon>}
            >
              Global Markets Status
            </Button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <ScrollArea.Autosize type={"never"} mah={400}>
              <Flex w={"100%"} gap={"xs"} direction={"column"} justify={"center"} align={"stretch"}>
                {
                  (globalMarketsStatus !== undefined) && globalMarketsStatus.markets.sort((previous, next) => {
                    if (previous.current_status === next.current_status) return 0
                    else if (previous.current_status === "open" && next.current_status === "closed") return -1
                    else if (previous.current_status === "closed" && next.current_status === "open") return 1
                    else return 0;
                  }).map((market) => {
                    return <Card w={"100%"} key={JSON.stringify(market)} padding={"xs"} withBorder>
                      <Indicator
                        mx={"xs"}
                        color={
                          globalMarketsStatus.markets.find((m) => JSON.stringify(m) === JSON.stringify(market))?.current_status === "closed" ? "pink" : "teal"
                        }
                        position="middle-start"
                        size={16}
                        withBorder
                        processing
                      >
                        <Flex gap={"xs"} direction={"row"} justify={"space-between"} align={"center"}>
                          <Flex mx={"md"} gap={"xs"} direction={"row"} justify={"flex-start"} align={"center"}>
                            <Text weight={"bold"}>
                              {globalMarketsStatus.markets.find((m) => JSON.stringify(m) === JSON.stringify(market))?.region}
                            </Text>
                            {
                              globalMarketsStatus.markets.find((m) => JSON.stringify(m) === JSON.stringify(market))?.primary_exchanges.split(", ").map((exchange) => {
                                return <Badge key={exchange} color={
                                  globalMarketsStatus.markets.find((m) => JSON.stringify(m) === JSON.stringify(market))?.current_status === "closed" ? "pink" : "teal"
                                } variant={"light"} ff={"monospace"}>
                                  {exchange}
                                </Badge>
                              })
                            }
                            {/* <Text weight={"bold"} ff={"monospace"}>
                              {`(${globalMarketsStatus.markets.find((m) => JSON.stringify(m) === JSON.stringify(market))?.primary_exchanges})`}
                            </Text> */}
                          </Flex>
                          <Group position="apart" ml={"xl"}>
                            <Badge color={
                              colorScheme === "dark" ? "dark" : "gray"
                            } variant="light">
                              {globalMarketsStatus.markets.find((m) => JSON.stringify(m) === JSON.stringify(market))?.market_type}
                            </Badge>
                            <Tooltip sx={(theme) => {
                              return { border: colorScheme === "dark" ? `1px solid ${theme.colors.dark[5]}` : `1px solid ${theme.colors.gray[5]}` }
                            }} color={
                              colorScheme === "dark" ? "black" : "white"
                            } c={
                              colorScheme === "dark" ? "white" : "black"
                            } withinPortal label={
                              globalMarketsStatus.markets.find((m) => JSON.stringify(m) === JSON.stringify(market))?.notes || "No notes"
                            }>
                              <Flex gap={"xs"} direction={"row"} justify={"center"} align={"center"}>
                                <Badge pl={0} color={"teal"} size={"lg"} radius="xl" leftSection={
                                  <Avatar
                                    alt={globalMarketsStatus.markets.find((m) => JSON.stringify(m) === JSON.stringify(market))?.local_open}
                                    size={"md"}
                                    px={"xs"}
                                    mr={"xs"}
                                  >
                                    <ThemeIcon sx={(theme) => ({ padding: theme.spacing.xs })} size={"xl"} color={"teal"}>
                                      <IconClockPlay />
                                    </ThemeIcon>
                                  </Avatar>
                                }>
                                  {globalMarketsStatus.markets.find((m) => JSON.stringify(m) === JSON.stringify(market))?.local_open}
                                </Badge>
                                <Badge pl={0} color={"pink"} size={"lg"} radius="xl" leftSection={
                                  <Avatar
                                    alt={globalMarketsStatus.markets.find((m) => JSON.stringify(m) === JSON.stringify(market))?.local_close}
                                    size={"md"}
                                    px={"xs"}
                                    mr={"xs"}
                                  >
                                    <ThemeIcon sx={(theme) => ({ padding: theme.spacing.xs })} size={"xl"} color={"pink"}>
                                      <IconClockPause />
                                    </ThemeIcon>
                                  </Avatar>
                                }>
                                  {globalMarketsStatus.markets.find((m) => JSON.stringify(m) === JSON.stringify(market))?.local_close}
                                </Badge>
                              </Flex>
                            </Tooltip>
                          </Group>
                        </Flex>
                      </Indicator>
                    </Card>
                  })
                }
              </Flex>
            </ScrollArea.Autosize>
          </HoverCard.Dropdown>
        </HoverCard>
      </Flex>
    </Container>
  )
}
