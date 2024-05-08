import { ActionIcon, Avatar, Badge, Button, Card, Container, Flex, Paper, ScrollArea, Text, Textarea } from "@mantine/core";
import { IconSend } from "@tabler/icons-react";
import { useState } from "react";
import { ChatType } from "../types";
import { useAuthentication } from "@/app/authentication/state";

function AIChat() {
  const authentication = useAuthentication();
  const [chat, setChat] = useState<ChatType>({
    chatID: "testchat",
    data: [
      { id: 1, author: "USER", content: "Hello! What can you do?" },
      { id: 2, author: "AI", content: "Hey there! I can help you with all sorts of finance-related questions that you may have. I can fetch latest quotes for a symbol, I can generate fetch charts for latest market trends, I can extract information from large, complex financial docs and much more. Whatb do you want me to do for you today?" },
      { id: 3, author: "USER", content: "That's really helpful! Can you provide some information about AAPL?" },
      { id: 4, author: "AI", content: "Sure! Here's a brief about AAPL: AAPL is the stock ticker symbol for Apple Inc., a multinational technology company. Founded in 1976, Apple is renowned for its innovative products such as the iPhone, iPad, Mac computers, and software like iOS and macOS. With a strong brand, expansive ecosystem, and consistent product updates, Apple has become one of the world's leading tech companies." },
      { id: 5, author: "USER", content: "Thanks! Can you fetch the latest quotes for AAPL?" },
      { id: 6, author: "AI", content: "The latest quotes for AAPL are as follows: \n01. symbol: AAPL, \n02. open: 177.1300, \n03. high: 178.5400, \n04. low: 176.5000, \n05. price: 176.5700, \n06. volume: 46964857, \n07. latest trading day: 2023-08-16, \n08. previous close: 177.4500, \n09. change: -0.8800, \n10. change percent: -0.4959%" },
      { id: 7, author: "USER", content: "Awesome! Thanks!" },
    ]
  });
  return (
    <Flex h={"100%"} w={"100%"} m={0} px={"xs"} direction={"column"} justify={"stretch"} align={"flex-end"}>
      {/* <ScrollArea.Autosize
        type={"never"}
        h={"100%"}
        mah={"100%"}
        w={"100%"}
        maw={"100%"}
        m={0}
        sx={(theme) => {
          return {
            borderRadius: theme.radius.sm,
          }
        }}
      > */}
      <Flex h={"100%"} w={"100%"} m={0} direction={"column"} justify={"stretch"} align={"stretch"}>
        <Container w={"100%"} fluid py={0} px={0}>
          {
            chat.data.map((chatNode) => {
              return (
                <Flex
                  key={chatNode.id}
                  py={"xs"} w={"100%"} direction={chatNode.author === "USER" ? "row-reverse" : "row"} justify={chatNode.author === "USER" ? "flex-start" : "flex-start"} align={"flex-start"}
                >
                  <Card shadow="sm" padding="xs" radius="sm" withBorder>
                    <Card.Section sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <Badge
                        fullWidth radius={"xs"}
                        ff={"monospace"}
                        color={chatNode.author === "AI" ? "teal" : "pink"}
                      >{chatNode.author === "AI" ? "Assistant" : authentication.user?.first_name}</Badge>
                    </Card.Section>
                    <Text
                      w={"100%"}
                      ta={chatNode.author === "AI" ? "left" : "right"}
                      size="sm"
                      mt={"xs"}
                    >{chatNode.content}</Text>
                    {/* <Button variant="light" color="blue" fullWidth mt="md" radius="md">Book classic tour now</Button> */}
                  </Card>
                </Flex>
              );
            })
          }
        </Container>
        <Paper w={"100%"} pos={"sticky"} bottom={0}>
          <Textarea
            p={0}
            placeholder="Enter a message"
            autosize
            minRows={1}
            maxRows={4}
            rightSectionWidth={"10%"}
            rightSection={
              <Flex h={"100%"} w={"100%"} direction={"column"} justify={"center"} align={"center"}>
                <ActionIcon
                  size={"lg"}
                  color={"teal"}
                  variant={"light"}
                  onClick={() => {
                    setChat((previousChat) => {
                      const latestChatNodeID = Math.max(...previousChat.data.map((c) => c.id));
                      return {
                        ...previousChat,
                        data: [...previousChat.data, {
                          author: previousChat.data.find((c) => c.id === latestChatNodeID)?.author === "USER" ? "AI" : "USER",
                          content: "Lorem ipsum",
                          id: latestChatNodeID + 1,
                        }]
                      };
                    })
                  }}>
                  <IconSend />
                </ActionIcon>
              </Flex>
            }
          />
        </Paper>
      </Flex>
      {/* </ScrollArea.Autosize> */}
    </Flex>
  );
}

export default AIChat;