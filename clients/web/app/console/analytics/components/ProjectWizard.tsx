import { Box, Container, Paper, ScrollArea, Text } from "@mantine/core";
import { analyticsSelector } from "../state/analyticsSelector";
import { SpreadSheetPipelineStepper } from "./SpreadSheetPipelineStepper";
import { ConfigureData } from "./ConfigureData";
import { SpreadSheetUpload } from "./SpreadSheetUpload";
import { useApplicationSelector } from "@/hooks";
import { useEffect, useState } from "react";
import { ConfigureChart } from "./ConfigureChart";
import { Preview } from "./Preview";

const ProjectWizard = () => {
  const analytics = useApplicationSelector(analyticsSelector);
  const [steps, setSteps] = useState<{
    count: number;
    label: string;
    description: string;
  }[]>(
    [
      { count: 1, label: "Configure Data", description: "" },
      { count: 2, label: "Configure Charts", description: "" },
      { count: 3, label: "Preview", description: "" },
    ].sort((a, b) => a.count - b.count)
  );
  const [active, setActive] = useState(0);
  return (
    <>
      <Paper h={"100%"} w={"100%"} p={0} pb={"xl"} shadow="xs" sx={(theme) => ({ display: "flex", flexDirection: "column" })}>
        <Box h={"100%"} mah={"100%"} mih={"100%"} pb={"xl"}>
          <Box h={"100%"} mah={"100%"} mih={"100%"} pb={"xl"}>
            <Container fluid h={"100%"} px={0} pb={"xl"} display={"flex"} sx={{ flexDirection: "column", justifyContent: "stretch", alignItems: "stretch" }}>
              {
                analytics.AnalyticsProjectsToDo.length > 0
                  ? (
                    <>
                      <SpreadSheetPipelineStepper
                        steps={steps}
                        setSteps={setSteps}
                        active={active}
                        setActive={setActive}
                      />
                      {
                        (active + 1) === 1
                          ? <ConfigureData />
                          : (active + 1) === 2
                            ? <ConfigureChart />
                            : (active + 1) === 3
                              ? <Preview />
                              : <Container><Text>Nothing To Show</Text></Container>
                      }
                    </>
                  )
                  : (
                    <SpreadSheetUpload />
                  )
              }
            </Container>
          </Box>
        </Box>
      </Paper>
    </>
  );
}

export { ProjectWizard };