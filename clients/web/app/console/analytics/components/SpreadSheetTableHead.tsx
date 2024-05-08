"use client"

import { ActionIcon, Button, Container, Flex, Group, Indicator, LoadingOverlay, Menu, Paper, Radio, Select, Text, Title, rem, useMantineTheme } from '@mantine/core';
import { AnalyticsProjectType } from '../types/AnalyticsProjectType';
import { forwardRef, useEffect, useState } from 'react';
import { useApplicationDispatch, useApplicationSelector } from '@/hooks';
import { analyticsSelector } from '../state/analyticsSelector';
import { DataTypeOption } from './DataTypeOption';
import { Icon123, IconAdjustments, IconAdjustmentsOff, IconAlphabetLatin, IconArrowsLeftRight, IconCalendar, IconCalendarTime, IconCircleKey, IconClock, IconDecimal, IconMessageCircle, IconPhoto, IconSearch, IconSelector, IconSettings, IconSortAscending, IconSortDescending, IconTrash } from '@tabler/icons-react';

export default function SpreadSheetTableHead({ project }: { project: AnalyticsProjectType }) {
  const analytics = useApplicationSelector(analyticsSelector);
  const dispatch = useApplicationDispatch();
  const headerDataTypeOptions: {
    value: "Integer" | "Float" | "String" | "Date" | "Time" | "DateTime";
    label: "Integer" | "Float" | "String" | "Date" | "Time" | "DateTime";
    description: string;
    icon: JSX.Element;
  }[] = [
      { value: 'Integer', label: 'Integer', description: "Lorem ipsum doler sit amet.", icon: <Icon123 size={"1.5rem"} /> },
      { value: 'Float', label: 'Float', description: "Lorem ipsum doler sit amet.", icon: <IconDecimal size={"1.5rem"} /> },
      { value: 'String', label: 'String', description: "Lorem ipsum doler sit amet.", icon: <IconAlphabetLatin size={"1.5rem"} /> },
      { value: 'Date', label: 'Date', description: "Lorem ipsum doler sit amet.", icon: <IconCalendar size={"1.5rem"} /> },
      { value: 'Time', label: 'Time', description: "Lorem ipsum doler sit amet.", icon: <IconClock size={"1.5rem"} /> },
      { value: 'DateTime', label: 'DateTime', description: "Lorem ipsum doler sit amet.", icon: <IconCalendarTime size={"1.5rem"} /> },
    ]
  const headerSortingOptions: {
    value: "Ascending" | "Descending";
    label: "Ascending" | "Descending";
    icon: JSX.Element;
  }[] = [{
    value: "Ascending",
    label: "Ascending",
    icon: <IconSortAscending size={"1.5rem"} />,
  }, {
    value: "Descending",
    label: "Descending",
    icon: <IconSortDescending size={"1.5rem"} />,
  }]
  const [currentPrimaryAttribute, setCurrentPrimaryAttribute] = useState<string>(analytics.AnalyticsProjectsToDo.at(0)?.primaryAttribute || "undefined");
  const theme = useMantineTheme();
  const [showAttributesConfiguration, setShowAttributeConfiguration] = useState<boolean>(false);
  return (
    <>
      <tr style={{ position: "relative" }}>
        {
          Object.keys(project.headers).map((header) => {
            const dataSet = new Set(project.data.map((dataPoint) => dataPoint[header]))
            return (
              <th key={header} style={{ whiteSpace: "nowrap", padding: 0, backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white, }}>
                <Flex sx={(theme) => ({ border: `${rem(1)} solid ${theme.colorScheme === "dark" ? "#373a40" : "#dee2e6"}` })} miw={"100%"} w={"100%"} direction={"column"} wrap={"nowrap"} justify={"center"} align={"stretch"}>
                  {
                    showAttributesConfiguration
                    &&
                    <>
                      <Container fluid w={"100%"} pt={"xs"}>
                        <Indicator processing disabled={project.primaryAttribute !== undefined || dataSet.size !== project.data.length}>
                          <Radio
                            label="Primary Attribute"
                            checked={header === currentPrimaryAttribute}
                            disabled={dataSet.size !== project.data.length}
                            onChange={(event) => {
                              dispatch({
                                type: "Analytics/UpdateAnalyticsProjectToDoPrimaryAttribute", payload: {
                                  spreadsheet: project.spreadsheet,
                                  primaryAttribute: header,
                                }
                              });
                              setCurrentPrimaryAttribute(header);
                            }}
                          />
                        </Indicator>
                      </Container>
                      <Container fluid w={"100%"} pt={"xs"}>
                        <Menu shadow="md">
                          <Menu.Target>
                            <Button disabled={project.primaryAttribute === undefined} fullWidth px={0} variant={"default"}>
                              {headerDataTypeOptions.find((hdto) => hdto.value === project.headers[header].datatype)?.icon}
                              <Text mx={"lg"} ff={"monospace"}>{project.headers[header].datatype}</Text>
                              <IconSelector size={"1.5rem"} />
                            </Button>
                          </Menu.Target>
                          <Menu.Dropdown>
                            <Menu.Label>Select column data-type</Menu.Label>
                            {
                              headerDataTypeOptions.map((hdto) => {
                                return (
                                  <Menu.Item onClick={(event) => {
                                    dispatch({
                                      type: "Analytics/UpdateAnalyticsProjectToDoHeaders", payload: {
                                        spreadsheet: project.spreadsheet,
                                        header: header,
                                        datatype: hdto.value,
                                      }
                                    });
                                  }} key={hdto.value} icon={hdto.icon} ff={"monospace"}>{hdto.label}</Menu.Item>
                                );
                              })
                            }
                          </Menu.Dropdown>
                        </Menu>
                      </Container>
                      <Container fluid w={"100%"} pt={"xs"}>
                        <Menu shadow="md">
                          <Menu.Target>
                            <Button disabled={project.primaryAttribute === undefined || dataSet.size !== project.data.length} fullWidth px={0} variant={"default"}>
                              {headerSortingOptions.find((hso) => hso.value === project.headers[header].sorting)?.icon}
                              <Text mx={"xs"} ff={"monospace"}>{project.headers[header].sorting}</Text>
                              <IconSelector size={"1.5rem"} />
                            </Button>
                          </Menu.Target>
                          <Menu.Dropdown>
                            <Menu.Label>Select column sorting type</Menu.Label>
                            {
                              headerSortingOptions.map((sortType) => {
                                return (
                                  <Menu.Item onClick={(event) => {
                                    dispatch({
                                      type: "Analytics/SortAnalyticsProjectToDoData",
                                      payload: {
                                        spreadsheet: project.spreadsheet,
                                        sorting: sortType.value,
                                      }
                                    });
                                    dispatch({
                                      type: "Analytics/UpdateAnalyticsProjectToDoHeaders", payload: {
                                        spreadsheet: project.spreadsheet,
                                        header: header,
                                        sorting: sortType.value,
                                      }
                                    });
                                  }} key={sortType.value} icon={sortType.icon} ff={"monospace"}>{sortType.label}</Menu.Item>
                                );
                              })
                            }
                          </Menu.Dropdown>
                        </Menu>
                      </Container>
                    </>
                  }
                  <Paper withBorder w={"100%"} mt={showAttributesConfiguration ? "xs" : 0} px={0} radius={0}>
                    <Flex direction={"row"} justify={"space-between"} align={"center"}>
                      <Title order={4} my={"xs"} mx={"sm"}>
                        {header}
                      </Title>
                      <ActionIcon onClick={() => setShowAttributeConfiguration(!showAttributesConfiguration)} variant="light" my={"xs"} mx={"sm"} radius={"sm"}>
                        {
                          showAttributesConfiguration
                            ? <IconAdjustmentsOff size="1.5rem" />
                            : <IconAdjustments size="1.5rem" />
                        }
                      </ActionIcon>
                    </Flex>
                  </Paper>
                </Flex>
              </th>
            );
          })
        }
      </tr>
    </>
  )
}
