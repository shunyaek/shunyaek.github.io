import { Aside as MantineAside, MediaQuery, Transition } from '@mantine/core';
import { AsideFooter, AsideHeader, AsideMain } from './components';
import { AsidePropsType } from './types';

function Aside({ data, header, mounted }: AsidePropsType) {
  return (
    <Transition mounted={mounted} keepMounted={false} transition={"slide-left"} duration={400} timingFunction="ease">
      {(styles) => (
        <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          <MantineAside py="sm" hiddenBreakpoint="sm" width={{ sm: 200, lg: "30%" }}>
            <AsideHeader title={`${header};${data !== undefined ? data.length : 0}`} />
            <AsideMain header={header} data={data} />
            {/* <AsideFooter /> */}
          </MantineAside>
        </MediaQuery>
      )}
    </Transition>
  );
}

export default Aside;