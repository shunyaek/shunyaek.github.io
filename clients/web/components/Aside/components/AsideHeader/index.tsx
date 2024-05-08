import { Aside, Badge, Flex, Title, useMantineColorScheme } from '@mantine/core';

type AsideHeaderPropsType = {
  title: string | undefined;
}

function AsideHeader({ title }: AsideHeaderPropsType) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Aside.Section>
      <Flex align={"center"} justify={"space-between"} mb={"xs"} mx={"xs"}>
        <Title size={"h2"}>
          {title?.split(";").slice(0, 1) || ""}
        </Title>
        <Badge size='xl' color={colorScheme === 'dark' ? 'gray' : 'dark'} radius="xs" variant="dot">{title?.split(";").slice(-1)}</Badge>
      </Flex>
    </Aside.Section>
  );
}

export default AsideHeader;