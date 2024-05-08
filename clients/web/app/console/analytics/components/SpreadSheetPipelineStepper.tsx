import { useApplicationDispatch } from "@/hooks";
import { Button, Group, Text, rem } from "@mantine/core";
import { IconChevronLeft, IconChevronRight, IconClearAll } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useState } from "react";

export const SpreadSheetPipelineStepper = ({ steps, setSteps, active, setActive }: {
  steps: {
    count: number;
    label: string;
    description: string;
  }[]; setSteps: Dispatch<SetStateAction<{
    count: number;
    label: string;
    description: string;
  }[]>>; active: number; setActive: Dispatch<SetStateAction<number>>
}) => {
  const dispatch = useApplicationDispatch();
  return (
    <Group position={"apart"} w={"100%"} maw={"100%"} sx={{ position: "sticky", top: 0 }}>
      <Button mx={"xs"} my={"xs"} disabled={active === 0} variant="default" onClick={() => {
        active === 0
          ? setActive(0)
          : setActive(active - 1);
      }}>
        <IconChevronLeft size={rem(20)} />
        <Text mx={"sm"}>{active > 0 ? steps.at(active - 1)?.label : "Previous"}</Text>
      </Button>
      <Button mx={"xs"} my={"xs"} variant="light" onClick={() => {
        dispatch({ type: "Analytics/DeleteAnalyticsProjectToDos" });
        setActive(0);
      }}>
        <IconClearAll size={rem(20)} />
        <Text mx={"sm"}>Clear</Text>
      </Button>
      <Button mx={"xs"} my={"xs"} disabled={active === (steps.length - 1)} onClick={() => {
        active === (steps.length - 1)
          ? setActive(steps.length - 1)
          : setActive(active + 1)
      }}>
        <Text mx={"sm"}>{active < (steps.length - 1) ? steps.at(active + 1)?.label : "Next"}</Text>
        <IconChevronRight size={rem(20)} />
      </Button>
    </Group>
  );
}