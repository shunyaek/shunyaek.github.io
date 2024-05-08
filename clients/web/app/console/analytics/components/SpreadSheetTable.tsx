"use client"

import { ScrollArea, Table, createStyles, rem } from '@mantine/core';
import { AnalyticsProjectType } from '../types/AnalyticsProjectType';
import SpreadSheetTableHead from './SpreadSheetTableHead';
import SpreadSheetTableBody from './SpreadSheetTableBody';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[2]
      }`,
    },
  },
}));

export default function SpreadSheetTable({ project }: { project: AnalyticsProjectType }) {
  const { classes, cx } = useStyles();
  return (
    <ScrollArea w={"100%"} h={"100%"}>
      <Table h={"100%"} key={project.spreadsheet} striped highlightOnHover withBorder withColumnBorders>
        <thead className={cx(classes.header)}>
          <SpreadSheetTableHead project={project} />
        </thead>
        <tbody style={{ height: "100%" }}>
          <SpreadSheetTableBody project={project} />
        </tbody>
      </Table>
    </ScrollArea>
  )
}
