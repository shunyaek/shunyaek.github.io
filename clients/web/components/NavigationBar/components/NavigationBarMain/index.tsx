import { Flex, Group, HoverCard, Navbar, Paper, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import { IconChartHistogram, IconNotebook, IconPlaceholder, IconTableImport } from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

function NavigationBarMain() {
  const pathname = usePathname();
  const consoleBaseURL = "/console";
  const navigationBarLinks = [
    { href: `${consoleBaseURL}/analytics`, icon: <IconTableImport size="2rem" />, color: 'teal', label: 'Analytics', description: "Visualize & Derive Information" },
    { href: `${consoleBaseURL}/markets`, icon: <IconChartHistogram size="2rem" />, color: 'teal', label: 'Markets', description: "Explore Markets Data" },
    { href: `${consoleBaseURL}/workspace`, icon: <IconNotebook size="2rem" />, color: 'teal', label: 'WorkSpace', description: "AI-Assisted Research WorkSpace" },
    { href: `${consoleBaseURL}/placeholder`, icon: <IconPlaceholder size="2rem" />, color: 'teal', label: 'Place-Holder', description: "foobar barfoo, foo bar, boofar farboo" },
  ];
  return (
    <Navbar.Section grow>
      <Flex gap={"xs"} direction={"column"} justify={"center"} align={"stretch"}>
        {
          navigationBarLinks.map((navigationBarLink) => {
            return (
              <HoverCard key={navigationBarLink.label} position={"right"} width={250} shadow={"sm"} withArrow withinPortal offset={0}>
                <HoverCard.Target>
                  <Link href={navigationBarLink.href} key={navigationBarLink.label}>
                    <UnstyledButton
                      sx={(theme) => ({
                        display: 'block',
                        width: '100%',
                        borderRadius: theme.radius.sm,
                        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
                      })}
                    >
                      <Flex p={0} w={"100%"} direction={"column"} justify={"center"} align={"center"}>
                        <ThemeIcon sx={(theme) => ({ padding: theme.spacing.xs })} size={"xl"} color={navigationBarLink.color} variant={navigationBarLink.href === pathname ? "filled" : "light"}>
                          {navigationBarLink.icon}
                        </ThemeIcon>
                      </Flex>
                    </UnstyledButton>
                  </Link>
                </HoverCard.Target>
                <HoverCard.Dropdown>
                  <div>
                    <Text>{navigationBarLink.label}</Text>
                    <Text size="xs" color="dimmed">{navigationBarLink.description}</Text>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
            );
          })
        }
      </Flex>
    </Navbar.Section>
  );
}

export default NavigationBarMain;