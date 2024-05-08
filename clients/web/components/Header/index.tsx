import { useMantineTheme, Header as MantineHeader, MediaQuery, Text, Burger, Box, Group, ActionIcon, useMantineColorScheme, rem, Button, Title, Container, Flex, TextInput, Kbd, ThemeIcon, Menu, UnstyledButton, Avatar, createStyles, Switch, Badge, Indicator, Card, Tooltip } from '@mantine/core';
import { HeaderPropsType } from './types';
import { IconSun, IconMoonStars, IconLayoutSidebarLeftExpand, IconLayoutSidebarLeftCollapse, IconLayoutSidebarRightCollapse, IconLayoutSidebarRightExpand, IconSearch, IconHome, IconDashboard, IconFileText, IconSlash, IconChevronDown, IconHeart, IconStar, IconMessage, IconSettings, IconSwitchHorizontal, IconLogout, IconPlayerPause, IconTrash, IconAt, IconPhoneCall, IconLayout, IconCheck, IconUserCheck, IconUserX, IconMail, IconHome2, IconKeyboard, IconCommand } from '@tabler/icons-react';
import { Logo } from './_logo';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useAuthentication } from '@/app/authentication/state';
import { useEffect, useState } from 'react';
import { useApplicationDispatch, useApplicationSelector } from '@/hooks';
import { signOutThunk } from '@/app/authentication/state/authenticationSlice';
import { clientStateSelector } from '@/app/state/clientSelector';
import { useSpotlight } from '@mantine/spotlight';
import { useHotkeys } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    // padding: `${theme.spacing.xs}`,
    borderRadius: theme.radius.sm,
    // transition: 'background-color 100ms ease',
    // '&:hover': {
    //   backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[1],
    // },
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
}));

function SpotlightControl() {
  const spotlight = useSpotlight();
  return (
    <Group position="center">
      <Button
        variant={"default"}
        color={"teal"}
        leftIcon={<ThemeIcon color={"teal"} variant={"light"}><IconSearch size={"1rem"} /></ThemeIcon>}
        rightIcon={
          <Flex direction={"row"} justify={"center"} align={"center"}>
            <Kbd c={"teal"} w={"100%"}>
              <Text ff={"monospace"}>{"⌘"}</Text>
            </Kbd>
            <Text mx={"xs"}>{"+"}</Text>
            <Kbd c={"teal"} w={"100%"}>
              <Text ff={"monospace"}>{"/"}</Text>
            </Kbd>
          </Flex>
        }
        onClick={() => spotlight.openSpotlight()}
      >
        <Text color={"teal"} mr={"xl"}>Search</Text>
      </Button>
    </Group>
  );
}

function Header(props: HeaderPropsType) {
  const authentication = useAuthentication();
  const dispatch = useApplicationDispatch();
  const clientState = useApplicationSelector(clientStateSelector);
  const router = useRouter();
  const pathname = usePathname();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  useHotkeys([
    ['mod+[', () => {
      dispatch({
        type: "Client/ControlApplicationShellComponents", payload: {
          ...clientState,
          showNavigationBar: !clientState.showNavigationBar,
        }
      });
    }],
    ['mod+]', () => {
      dispatch({
        type: "Client/ControlApplicationShellComponents", payload: {
          ...clientState,
          showAsideBar: !clientState.showAsideBar,
        }
      });
    }],
  ]);
  const [emoji, setEmoji] = useState("");
  const { classes, theme, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  useEffect(() => {
    const getRandomEmoji = (options: string[]) => {
      const randomEmoji = options[Math.floor(Math.random() * options.length)];
      return randomEmoji;
    }
    const randomEmoji = getRandomEmoji(["👋", "👋🏻", "👋🏼", "👋🏽", "👋🏾", "👋🏿"]);
    setEmoji(randomEmoji);
  }, []);
  return (
    <MantineHeader height={{ base: 40, md: 50 }} p="sm">
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <Box
          sx={(theme) => ({
            width: '100%',
          })}
        >
          <Flex direction={"row"} justify={"space-between"} align={"center"} px={0} w={"100%"} maw={"100%"} miw={"100%"}>
            <Flex direction={"row"} justify={"flex-start"} align={"center"} maw={"40%"} w={"40%"}>
              {
                authentication.metadata.status === "authenticated" && pathname !== "/"
                && <Tooltip radius={"sm"} color={theme.colorScheme === "dark" ? "dark" : "gray"} withinPortal label={
                  <Flex direction={"row"} justify={"center"} align={"center"}>
                    <Kbd c={"teal"} w={"100%"}>
                      <Text fz={"xl"} ff={"monospace"}>{"⌘"}</Text>
                    </Kbd>
                    <Text mx={"xs"}>{"+"}</Text>
                    <Kbd c={"teal"} w={"100%"}>
                      <Text fz={"xl"} ff={"monospace"}>{"["}</Text>
                    </Kbd>
                  </Flex>
                }>
                  <ActionIcon size={"lg"} radius="xs" onClick={() => {
                    dispatch({
                      type: "Client/ControlApplicationShellComponents", payload: {
                        ...clientState,
                        showNavigationBar: !clientState.showNavigationBar,
                      }
                    });
                  }}
                  >
                    {
                      clientState.showNavigationBar
                        ? <ThemeIcon color={"teal"} variant={"light"} size={"xl"}><IconLayoutSidebarLeftCollapse /></ThemeIcon>
                        : <ThemeIcon color={"teal"} variant={"light"} size={"xl"}><IconLayoutSidebarLeftExpand /></ThemeIcon>
                    }
                  </ActionIcon>
                </Tooltip>
              }
              {/* <Logo colorScheme={colorScheme} /> */}
            </Flex>
            {/* <Flex direction={"column"} justify={"center"} align={"center"} w={"20%"} maw={"20%"}>
              <Title fw={"normal"} order={2}>
                {emoji}
                {" "}
                {authentication.metadata.status === "authenticated" ? `Hello, ${authentication.user?.first_name}!` : "Hello!"}
              </Title>
            </Flex> */}
            <Group spacing={"xs"} position="right" maw={"40%"} w={"40%"}>
              {
                authentication.metadata.status === "authenticated"
                  ? (
                    <>
                      {
                        pathname !== "/" && pathname !== "/authentication/signin" && pathname !== "/authentication/signup" &&
                        (
                          <SpotlightControl />
                        )
                      }
                      {
                        pathname === "/" &&
                        (<Link href={"/console"}>
                          <Button variant={"filled"} leftIcon={<IconLayout />}>
                            Open Console
                          </Button>
                        </Link>)
                      }
                    </>
                  )
                  : (
                    <>
                      <Link href={"/authentication/signup"}>
                        <Button variant={"light"}>Sign-Up</Button>
                      </Link>
                      <Link href={"/authentication/signin"}>
                        <Button variant={"filled"}>Sign-In</Button>
                      </Link>
                    </>
                  )
              }
              {
                authentication.metadata.status !== "authenticated"
                && <Flex direction={"row"} justify={"center"} align={"center"}>
                  <Switch
                    checked={colorScheme === 'dark'}
                    onChange={() => toggleColorScheme()}
                    size="md"
                    mx={"xs"}
                    onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
                    offLabel={<IconMoonStars color={theme.colors.gray[6]} size="1.25rem" stroke={1.5} />}
                  />
                </Flex>
              }
              {
                authentication.metadata.status === "authenticated" &&
                <Menu
                  width={"25%"}
                  position="bottom-end"
                  transitionProps={{ transition: 'pop-top-right' }}
                  onClose={() => setUserMenuOpened(false)}
                  onOpen={() => setUserMenuOpened(true)}
                  withinPortal
                >
                  <Menu.Target>
                    <UnstyledButton
                      className={cx(classes.user)}
                    >
                      <Flex direction={"row"} justify={"center"} align={"center"}>
                        <Avatar alt={`${authentication.user?.first_name} ${authentication.user?.middle_name} ${authentication.user?.last_name}`} radius="xl" size={"md"}>{`${authentication.user?.first_name.at(0)}${authentication.user?.last_name.at(0)}`}</Avatar>
                        {
                          pathname === "/" && <Text color={"dimmed"} weight={"bold"} size="md">
                            {`${authentication.user?.first_name} ${authentication.user?.last_name}`}
                          </Text>
                        }
                      </Flex>
                    </UnstyledButton>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Card>
                      <div>
                        <Group noWrap w={"100%"}>
                          <Avatar size={"lg"} radius="xl">
                            {`${authentication.user?.first_name.at(0)}${authentication.user?.last_name.at(0)}`}
                          </Avatar>
                          <div>
                            <Text fz="lg" fw={500}>
                              {`${authentication.user?.first_name} ${authentication.user?.middle_name} ${authentication.user?.last_name}`}
                            </Text>
                            <Group noWrap spacing={10} mt={3}>
                              <IconMail stroke={1.5} size="1rem" />
                              <Text fz="xs" c="dimmed">
                                {authentication.user?.email}
                              </Text>
                            </Group>
                            <Group noWrap spacing={10} mt={5}>
                              <IconPhoneCall stroke={1.5} size="1rem" />
                              <Text fz="xs" c="dimmed">
                                {authentication.user?.phone_number}
                              </Text>
                            </Group>
                          </div>
                        </Group>
                      </div>
                    </Card>
                    <Menu.Divider />
                    <Flex direction={"row"} justify={"space-between"} align={"center"}>
                      <Menu.Label fz={"md"} fw={"bold"}>Configuration</Menu.Label>
                      <Switch
                        checked={colorScheme === 'dark'}
                        onChange={() => toggleColorScheme()}
                        size="md"
                        mx={"xs"}
                        onLabel={<IconSun color={theme.white} size="1.25rem" stroke={1.5} />}
                        offLabel={<IconMoonStars color={theme.colors.gray[6]} size="1.25rem" stroke={1.5} />}
                      />
                    </Flex>
                    <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>
                      Account
                    </Menu.Item>
                    <Menu.Item icon={<IconKeyboard size="0.9rem" stroke={1.5} />}>
                      Keyboard Shortcuts
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item
                      color={"yellow"}
                      onClick={async () => {
                        router.push("/");
                      }}
                      icon={<IconHome2 size="0.9rem" stroke={1.5} />}
                    >
                      Open Home-Page
                    </Menu.Item>
                    <Menu.Item
                      color={"red"}
                      onClick={async () => {
                        await dispatch(signOutThunk()).unwrap();
                        router.push("/");
                      }}
                      icon={<IconLogout size="0.9rem" stroke={1.5} />}
                    >
                      Sign-Out
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              }
              {
                authentication.metadata.status === "authenticated" && pathname !== "/"
                && <Tooltip radius={"sm"} color={theme.colorScheme === "dark" ? "dark" : "gray"} withinPortal label={
                  <Flex direction={"row"} justify={"center"} align={"center"}>
                    <Kbd c={"teal"} w={"100%"}>
                      <Text fz={"xl"} ff={"monospace"}>{"⌘"}</Text>
                    </Kbd>
                    <Text mx={"xs"}>{"+"}</Text>
                    <Kbd c={"teal"} w={"100%"}>
                      <Text fz={"xl"} ff={"monospace"}>{"]"}</Text>
                    </Kbd>
                  </Flex>
                }>
                  <ActionIcon size={"lg"} radius="xs" onClick={() => {
                    dispatch({
                      type: "Client/ControlApplicationShellComponents", payload: {
                        ...clientState,
                        showAsideBar: !clientState.showAsideBar,
                      }
                    });
                  }}
                  >
                    {
                      clientState.showAsideBar
                        ? <ThemeIcon color={"teal"} variant={"light"} size={"xl"}><IconLayoutSidebarRightCollapse /></ThemeIcon>
                        : <ThemeIcon color={"teal"} variant={"light"} size={"xl"}><IconLayoutSidebarRightExpand /></ThemeIcon>
                    }
                  </ActionIcon>
                </Tooltip>
              }
            </Group>
          </Flex>
        </Box>
      </div>
    </MantineHeader>
  );
}

export default Header;