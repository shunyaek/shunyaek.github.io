import { useApplicationDispatch } from "@/hooks";
import { Text, Container, Group, useMantineTheme } from "@mantine/core";
import { Dropzone, DropzoneProps, FileWithPath } from "@mantine/dropzone";
import { IconCsv, IconUpload, IconX } from "@tabler/icons-react";
import Papa from "papaparse";
import { AnalyticsProjectType } from "../types/AnalyticsProjectType";
import { AnalyticsDataRowType } from "../types/AnalyticsDataRowType";
import { AnalyticsProjectHeadersType } from "../types/AnalyticsProjectHeadersType";

export const SpreadSheetUpload = (props: Partial<DropzoneProps>) => {
  const dispatch = useApplicationDispatch();
  const theme = useMantineTheme();
  const readCSV = async (files: FileWithPath[]) => {
    files.forEach((dataFile) => {
      Papa.parse(dataFile, {
        dynamicTyping: true,
        skipEmptyLines: true,
        header: true,
        worker: true,
        error(error, file) {
          console.log({ error, file });
        },
        complete: (results, file) => {
          const rows = results.data as AnalyticsDataRowType[];
          const filteredEmptyRows = rows.filter((row) => {
            const rowSet = new Set();
            results.meta.fields?.forEach((field) => {
              rowSet.add(row[field]);
            });
            const isEmptyRow = ((rowSet.size === 1) && (Array.from(rowSet).at(0) === null))
            if (isEmptyRow) console.log({ row, isEmptyRow });
            return !isEmptyRow;
          })
          let headersMapping: AnalyticsProjectHeadersType = {};
          results.meta.fields?.forEach((field) => {
            headersMapping[field] = {
              datatype: "String",
              sorting: "Ascending",
            }
          })
          // let columnsWithUniqueValues: string[] = [];
          // if (results.meta.fields) {
          //   results.meta.fields?.forEach((header) => {
          //     const dataSet = new Set(results.data.map((dataPoint: AnalyticsDataRowType) => dataPoint[header]))
          //   });
          // }
          const newAnalyticsProject: AnalyticsProjectType = {
            spreadsheet: dataFile ? dataFile.name : `File ${(Math.random() * 1000).toFixed(2)}`,
            data: filteredEmptyRows,
            headers: headersMapping,
            primaryAttribute: undefined,
          }
          dispatch({ type: "Analytics/CreateAnalyticsProjectToDo", payload: newAnalyticsProject });
        }
      });
    })
  }
  return (
    // <Container fluid h={"100%"} mih={"100%"} w={"100%"} p={0} sx={{ border: "1px solid teal" }}>
    <Group position={"apart"} w={"100%"} maw={"100%"} h={"100%"} my={"xs"}>
      <Dropzone
        sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
        h={"100%"}
        w={"100%"}
        mx={"sm"}
        onDrop={async (files: FileWithPath[]) => {
          await readCSV(files);
        }}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={5 * (1024 ** 2)}
        accept={{ "text/csv": ['.csv'] }}
        {...props}
      >
        <Group position="center" spacing="xl" style={{ minHeight: "100%", pointerEvents: 'none' }}>
          <Dropzone.Accept>
            <IconUpload
              size="3.2rem"
              stroke={1.5}
              color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              size="3.2rem"
              stroke={1.5}
              color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconCsv size="3.2rem" stroke={1.5} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag CSVs here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach as many files as you like. Each file should be 5 MB or less in size.
            </Text>
          </div>
        </Group>
      </Dropzone>
      </Group>
    // </Container>
  );
}