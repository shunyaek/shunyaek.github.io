"use client"

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
  LoadingOverlay,
} from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';
import { useApplicationDispatch, useApplicationSelector } from '@/hooks';
import { signInWithEMailThunk } from '../state/authenticationSlice';
import { useAuthentication } from '../state';
import { useDisclosure } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: "100%",
    width: "100%",
    maxWidth: "100%",
    minHeight: "100%",
    height: "100%",
    maxHeight: "100%",
  },

  form: {
    borderRight: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    minHeight: "100%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "30%",
    width: "30%",
    minWidth: "30%",

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  showcase: {
    borderRight: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
    minHeight: "100%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "70%",
    width: "70%",
    minWidth: "70%",
    backgroundSize: 'cover',
    backgroundImage: `url(${theme.colorScheme === "dark" ? "https://images.unsplash.com/photo-1655721528985-c491cc1a3d57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80" : "https://images.unsplash.com/photo-1664447972862-e26efc5b709f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"})`,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '0%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

export default function SignIn() {
  const router = useRouter();
  const dispatch = useApplicationDispatch();
  const authentication = useAuthentication();
  useEffect(() => {
    if (authentication.metadata.status === "authenticated") {
      router.push("/");
    } else {
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
    }
  }, [authentication.metadata.status, dispatch, router]);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30} pos={"relative"}>
        <LoadingOverlay visible={visible} overlayBlur={2} />
        <Group position="apart" mt="md" mb={50}>
          <Title order={2} className={classes.title} ta={"start"}>
            Welcome
            {
              authentication.user?.first_name && `, ${authentication.user.first_name}`
            }
            {"!"}
          </Title>
          <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
            {colorScheme === 'dark' ? <IconSun size="16px" /> : <IconMoonStars size="16px" />}
          </ActionIcon>
        </Group>

        <TextInput onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setEmailInput(event.currentTarget.value);
        }
        } value={emailInput} label="E-Mail" placeholder="john.doe@foo.bar" size="md" />
        <PasswordInput onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setPasswordInput(event.currentTarget.value);
        }
        } value={passwordInput} label="Password" placeholder="Enter your password" mt="md" size="md" />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button onClick={async () => {
          toggle();
          try {
            await dispatch(signInWithEMailThunk({ email: emailInput, password: passwordInput })).unwrap();
            setEmailInput("");
            setPasswordInput("");
          } catch (error) {
            toggle();
            console.log({ error });
          } finally {
            console.log("Sign-In Call Completed...");
            toggle();
          }
        }} fullWidth mt="xl" size="md">
          Sign-In
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor<'a'> href="/authentication/signup" weight={700}>
            Sign-Up
          </Anchor>
        </Text>
      </Paper>
      <Paper className={classes.showcase} radius={0} p={30}></Paper>
    </div>
  );
}
