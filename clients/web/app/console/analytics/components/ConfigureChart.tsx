import { useApplicationSelector } from "@/hooks";
import { ColorInput, Container, Flex, Group, MultiSelect, Paper, ScrollArea, Select, Tabs, Text, Title } from "@mantine/core";
import { analyticsSelector } from "../state/analyticsSelector";
import { IconAxisX, IconAxisY, IconChartArea, IconChartBar, IconChartDots, IconChartLine, IconChartPie, IconGraph } from "@tabler/icons-react";
import { forwardRef, useState } from "react";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";

interface ChartSelectOptionProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: JSX.Element;
  label: string;
  description: string;
}

const ChartSelectOption = forwardRef<HTMLDivElement, ChartSelectOptionProps>(
  ({ icon, label, ...others }: ChartSelectOptionProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        {icon}
        <div>
          <Text>{label}</Text>
          {/* <Text size="xs" color="dimmed">
            {description}
          </Text> */}
        </div>
      </Group>
    </div>
  )
);

ChartSelectOption.displayName = "ChartSelectOption";

export const ConfigureChart = () => {
  const analytics = useApplicationSelector(analyticsSelector);
  const chartTypeOptions = [
    {
      label: "Area",
      value: "Area",
      icon: <IconChartArea size={"1.5rem"} />,
    },
    {
      label: "Bar",
      value: "Bar",
      icon: <IconChartBar size={"1.5rem"} />,
    },
    {
      label: "Line",
      value: "Line",
      icon: <IconChartLine size={"1.5rem"} />,
    },
    {
      label: "Scatter",
      value: "Scatter",
      icon: <IconChartDots size={"1.5rem"} />,
    },
    {
      label: "Pie",
      value: "Pie",
      icon: <IconChartPie size={"1.5rem"} />,
    },
  ];
  const [selectedChartTypeOption, setSelectedChartTypeOption] = useState<string>("");
  const [chartAxes, setChartAxes] = useState<{
    X: string;
    Y: string;
  }>({
    X: "",
    Y: "",
  });
  const [chartColor, setChartColor] = useState<string>("");
  return (
    <Paper h={"100%"} m={0} px={0} pos={"sticky"} top={0}>
      <Tabs h={"100%"} mx={0} my={0} variant={"outline"} defaultValue={analytics.AnalyticsProjectsToDo.at(0)?.spreadsheet}>
        <Tabs.List>
          {
            analytics.AnalyticsProjectsToDo.map((analyticsProject) => {
              return (
                <Tabs.Tab key={analyticsProject.spreadsheet} value={analyticsProject.spreadsheet}>{analyticsProject.spreadsheet}</Tabs.Tab>
              );
            })
          }
        </Tabs.List>
        {
          analytics.AnalyticsProjectsToDo.map((analyticsProject) => {
            return (
              <Tabs.Panel h={"100%"} key={analyticsProject.spreadsheet} value={analyticsProject.spreadsheet}>
                <Paper m={0} p={0} withBorder radius={0}>
                  <Flex m={"xs"} direction={"row"} justify={"flex-start"} align={"center"}>
                    <Select
                      mr={"xs"}
                      value={selectedChartTypeOption}
                      onChange={(event) => {
                        setSelectedChartTypeOption(event || "");
                      }}
                      data={chartTypeOptions}
                      placeholder="Charts"
                      itemComponent={ChartSelectOption}
                      icon={<IconGraph />}
                    />
                    <Select
                      mr={"xs"}
                      value={chartAxes.X}
                      onChange={(event) => {
                        setChartAxes((previousChartAxes) => {
                          return {
                            ...previousChartAxes,
                            X: event || "",
                          }
                        })
                      }}
                      data={Object.keys(analyticsProject.headers)}
                      placeholder="X Axis"
                      itemComponent={ChartSelectOption}
                      icon={<IconAxisX />}
                    />
                    <Select
                      mr={"xs"}
                      value={chartAxes.Y}
                      onChange={(event) => {
                        setChartAxes((previousChartAxes) => {
                          return {
                            ...previousChartAxes,
                            Y: event || "",
                          }
                        })
                      }}
                      data={Object.keys(analyticsProject.headers)}
                      placeholder="Y Axis"
                      itemComponent={ChartSelectOption}
                      icon={<IconAxisY />}
                    />
                    <ColorInput value={chartColor} onChange={setChartColor} placeholder="Chart color" />
                  </Flex>
                </Paper>
                <ScrollArea h={"100%"} w={"100%"}>
                  <Paper m={0} p={0} withBorder radius={0} pb={"xl"}>
                    {/* {
                      selectedChartTypeOption === "Area"
                      ? <AreaChart analyticsProject={analyticsProject} chartAxes={chartAxes} />
                      : selectedChartTypeOption === "Bar"
                        ? <BarChart analyticsProject={analyticsProject} chartAxes={chartAxes} />
                        : <AreaChart analyticsProject={analyticsProject} chartAxes={chartAxes} />
                    } */}
                    <AreaChart color={chartColor} analyticsProject={analyticsProject} chartAxes={chartAxes} />
                  </Paper>
                </ScrollArea>
              </Tabs.Panel>
            );
          })
        }
      </Tabs>
    </Paper>
  );
}