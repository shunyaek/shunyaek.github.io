import { useState } from 'react';
import MantineProvider from "@/app/state/user-interface/MantineProvider";
import ColorSchemeProvider from "@/app/state/user-interface/ColorSchemeProvider";
import { ColorScheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { IconDashboard, IconFileText, IconHome, IconMoonStars, IconSearch, IconSun } from '@tabler/icons-react';
import { SpotlightProvider, type SpotlightAction } from '@mantine/spotlight';
import { useDebouncedValue } from '@mantine/hooks';
import { usePathname, useRouter } from 'next/navigation';

type AlphaVantageAPISearchResultType = {
  "1. symbol": string;
  "2. name": string;
  "3. type": string;
  "4. region": string;
  "5. marketOpen": string;
  "6. marketClose": string;
  "7. timezone": string;
  "8. currency": string;
  "9. matchScore": string;
}

type AlphaVantageAPISearchResultsType = {
  bestMatches: Array<AlphaVantageAPISearchResultType>;
}

export function UIConfigurationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const defaultSpotlightActions: SpotlightAction[] = [
    {
      title: 'Home',
      description: 'Get to home page',
      onTrigger: () => router.push("/"),
      icon: <IconHome size="1.2rem" />,
    },
    {
      title: 'Console',
      description: 'Get to the console landing',
      onTrigger: () => router.push("/console"),
      icon: <IconDashboard size="1.2rem" />,
    },
    {
      title: 'Toggle Theme',
      description: 'Toggle between light and dark themes',
      onTrigger: () => toggleColorScheme(),
      icon: colorScheme === "dark" ? <IconSun size="1.2rem" /> : <IconMoonStars size="1.2rem" />,
    },
  ]
  const [spotlightQuery, setSpotlightQuery] = useState('');
  const [debouncedSpotlightQuery] = useDebouncedValue(spotlightQuery, 500);
  const [spotlightActions, setSpotlightActions] = useState<SpotlightAction[]>(defaultSpotlightActions);
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme, loader: 'dots', primaryColor: "teal" }}
      >
        <SpotlightProvider
          actions={spotlightActions}
          query={spotlightQuery}
          cleanQueryOnClose={true}
          closeOnClickOutside={true}
          closeOnEscape={true}
          // onQueryChange={async (query) => {
          //   setSpotlightQuery(query);
          //   if (query.length > 0) {
          //     console.log(" ==> ENTERED SEARCH QUERY: ", query, spotlightQuery, debouncedSpotlightQuery);
          //     if (debouncedSpotlightQuery === query) {
          //       const searchResponse = await fetch(`/console/markets/server/${debouncedSpotlightQuery}/search`, {
          //         method: "GET",
          //       });
          //       const searchResponseJSON = await searchResponse.json() as AlphaVantageAPISearchResultsType;
          //       console.log({ searchResponseJSON });
          //       const bestMatches = searchResponseJSON["bestMatches"];
          //       const searchResultsActions: SpotlightAction[] = bestMatches.map((bestMatch) => {
          //         return {
          //           title: `${bestMatch['2. name']} (${bestMatch['1. symbol']})`,
          //           description: `TYPE: ${bestMatch['3. type']}, REGION: ${bestMatch['4. region']}, CURRENCY: ${bestMatch['8. currency']}`,
          //           onTrigger: () => console.log(`Clicked on ${bestMatch['2. name']}`),
          //           icon: <IconFileText size="1.2rem" />,
          //         }
          //       });
          //       setSpotlightActions((previousSpotlightActions) => {
          //         return [
          //           ...searchResultsActions,
          //           ...previousSpotlightActions,
          //         ];
          //       });
          //     }
          //   } else {
          //     setSpotlightActions(defaultSpotlightActions);
          //   }
          // }}
          searchIcon={<IconSearch size="1.2rem" />}
          searchPlaceholder="Search..."
          shortcut={["mod + /"]}
          highlightQuery
          highlightColor={"teal"}
          nothingFoundMessage="Nothing found!"
          disabled={pathname === "/" || pathname === "/authentication/signin" || pathname === "/authentication/signup"}
        >
          <Notifications />
          {children}
        </SpotlightProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}