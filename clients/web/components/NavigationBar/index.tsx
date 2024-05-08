import { Navbar } from '@mantine/core';
import { NavigationBarPropsType } from './types';
import { NavigationBarFooter, NavigationBarHeader, NavigationBarMain } from './components';

function NavigationBar(props: NavigationBarPropsType) {
  const { opened, setOpened } = props;
  return (
    <Navbar p="xs" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 60, lg: 60 }}>
      <NavigationBarHeader />
      <NavigationBarMain />
      <NavigationBarFooter />
    </Navbar>
  );
}

export default NavigationBar;