"use client"

import { AppShell as MantineAppShell, Text } from '@mantine/core';
import { ApplicationShellPropsType } from './types';
import Header from "../Header";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
import Aside from '../Aside';
import { useEffect, useState } from 'react';
import { useApplicationDispatch, useApplicationSelector } from '@/hooks';
import { clientStateSelector } from '@/app/state/clientSelector';
import { readGeoLocationDataThunk } from '@/app/state/geo-location/geoLocationSlice';

function ApplicationShell({ children }: ApplicationShellPropsType) {
  const [opened, setOpened] = useState<boolean>(false);
  const clientState = useApplicationSelector(clientStateSelector);
  const dispatch = useApplicationDispatch();
  useEffect(() => {
    const readGeoLocation = async () => {
      await dispatch(readGeoLocationDataThunk()).unwrap();
    }
    readGeoLocation();
  }, [dispatch]);
  return (
    <MantineAppShell
      padding={clientState.applicationShellPadding}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={clientState.showNavigationBar ? <NavigationBar opened={opened} setOpened={setOpened} /> : undefined}
      aside={clientState.showAsideBar ? <Aside mounted={clientState.showAsideBar} header={clientState.asideState.title} data={clientState.asideState.data} /> : undefined}
      header={clientState.showHeader ? <Header opened={opened} setOpened={setOpened} /> : undefined}
      footer={clientState.showFooter ? <Footer /> : undefined}
      styles={(theme) => ({
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          maxHeight: "100vh",
          maxWidth: "100vw",
        },
      })}
    >
      {children}
    </MantineAppShell>
  );
}

export default ApplicationShell;