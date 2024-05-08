import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  Overlay,
  useMantineColorScheme,
  Flex,
  Highlight,
} from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import image from './hero_background.jpg';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    // paddingTop: `calc(${theme.spacing.xl} * 4)`,
    // paddingBottom: `calc(${theme.spacing.xl} * 4)`,
    width: "100%",
  },

  content: {
    maxWidth: "75%",

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const highlights: {
    key: string;
    value: string;
  }[] = [
      { key: "Massive Data-Sets", value: "All the financial data from the most popular sources at your finger-tips." },
      { key: "Actionable Insights", value: "Gain valuable, actionable insights from deep data analysis, enabling you to make informed decisions and prioritize areas of growth." },
      { key: "Truly Transparent Algorithms", value: "Find a vast array of mathematics and statistics backed AI algorithms that can be used to build systematic prediction and analytical stratgeies." },
      { key: "Chat With Data", value: "Chat with the data and massive documents to uncover information with ease and simplicity." },
      { key: "Notebook-like UI", value: "Empower yourself with a no-code, modern and responsive user experience driven through a notebook-like interface where you can store your own thoughts, ideas and findings along-with output from the data and AI." },
    ]
  return (
    <Container h={"100%"} mih={"100%"} mah={"100%"} w={"100%"} maw={"100%"} miw={"100%"} px={0}>
      <div className={classes.inner}>
        <Image alt={"Alt"} src={image.src} className={classes.image} />
        <Overlay blur={"0"} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Flex justify={"center"} align={"center"} direction={"column"} maw={"75%"}>
            <Title className={classes.title}>
              <Highlight highlightColor="teal" highlight="state-of-the-art">
                Get state-of-the-art finance research at your finger-tips!
              </Highlight>
            </Title>
            <Text mt="md">
              Unlock the power of cutting-edge analytics, AI, and deep data insights with our finance research platform. Stay steps ahead of current markets, detect market trends, and plan your investments like never before.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={1.5} />
                </ThemeIcon>
              }
            >
              {
                highlights.map((highlight) => {
                  return (
                    <List.Item key={highlight.key}>
                      <b>{highlight.key}</b> — {highlight.value}
                    </List.Item>
                  );
                })
              }
            </List>

            <Group mt={30}>
              <Button radius="xl" size="md" className={classes.control}>
                Get started
              </Button>
              <Button variant="default" radius="xl" size="md" className={classes.control}>
                Connect with us
              </Button>
            </Group>
          </Flex>
        </Overlay>
      </div>
    </Container>
  );
}