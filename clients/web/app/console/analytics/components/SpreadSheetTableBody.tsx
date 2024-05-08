"use client"

import { Text } from '@mantine/core';
import { AnalyticsProjectType } from '../types/AnalyticsProjectType';

export default function SpreadSheetTableBody({ project }: { project: AnalyticsProjectType }) {
  return (
    <>
      {project.data.map((row) => {
        return (
          <tr style={{ whiteSpace: "nowrap" }} key={Math.random() * 1000}>
            {
              Object.keys(row).map((cell) => {
                return (
                  <td style={{ whiteSpace: "nowrap" }} key={row[cell]?.toString().concat((Math.random() * 1000).toString())}><Text>{row[cell]}</Text></td>
                );
              })
            }
          </tr>
        );
      })}
    </>
  )
}
