import { Paper, Tabs } from "@mantine/core";
import SpreadSheetTable from "./SpreadSheetTable";
import { useApplicationSelector } from "@/hooks";
import { analyticsSelector } from "../state/analyticsSelector";

export const ConfigureData = () => {
  const analytics = useApplicationSelector(analyticsSelector);
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
                <SpreadSheetTable project={analyticsProject} />
              </Tabs.Panel>
            );
          })
        }
      </Tabs>
    </Paper>
  );
}