"use client"

import { useApplicationDispatch } from '@/hooks';
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  rem,
  ActionIcon,
  useMantineColorScheme,
  Group,
} from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { useEffect } from 'react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "100%",
    height: "100%",
    maxHeight: "100%",
    backgroundSize: 'cover',
    backgroundImage: `url(${theme.colorScheme === "dark" ? "https://images.unsplash.com/photo-1655721528985-c491cc1a3d57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80" : "https://images.unsplash.com/photo-1664447972862-e26efc5b709f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"})`,
  },

  form: {
    borderRight: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    minHeight: "100%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: rem(450),
    paddingTop: rem(80),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export default function SignUp() {
  const dispatch = useApplicationDispatch();
  useEffect(() => {
    dispatch({
      type: "Client/UpdateApplicationShellPadding", payload: {
        applicationShellPadding: 0,
      }
    });
    dispatch({
      type: "Client/ControlApplicationShellComponents", payload: {
        showHeader: false,
        showFooter: false,
        showNavigationBar: false,
        showAsideBar: false,
      }
    });
  }, [dispatch]);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Paper h={"100%"} className={classes.form} radius={0} p={30}>
        <Group position="apart" mt="md" mb={50}>
          <Title order={2} className={classes.title} ta={"start"}>
            Hello!
          </Title>
          <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
            {colorScheme === 'dark' ? <IconSun size="1rem" /> : <IconMoonStars size="1rem" />}
          </ActionIcon>
        </Group>

        <Group grow position='apart'>
          <TextInput label="First Name" placeholder="john.doe@foo.bar" mt={"md"} size="md" />
          <TextInput label="Last Name" placeholder="john.doe@foo.bar" mt={"md"} size="md" />
        </Group>
        <TextInput label="E-Mail" placeholder="john.doe@foo.bar" mt={"md"} size="md" />
        <TextInput label="Phone Number" placeholder="john.doe@foo.bar" mt={"md"} size="md" />
        <PasswordInput label="Password" placeholder="Enter your password" mt="md" size="md" />
        <PasswordInput label="Confirm Password" placeholder="Enter your password" mt="md" size="md" />
        {/* <Checkbox label="Keep me logged in" mt="xl" size="md" /> */}
        <Button fullWidth mt="xl" size="md">
          Sign-Up
        </Button>

        <Text ta="center" mt="md">
          Already have an account?{' '}
          <Anchor<'a'> href="/authentication/signin" weight={700}>
            Sign-In
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
