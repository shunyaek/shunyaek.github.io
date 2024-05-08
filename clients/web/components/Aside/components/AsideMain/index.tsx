import { Aside, Card, Text, Group, Badge, Button, ScrollArea } from '@mantine/core';
import { AsideMainPropsType } from './types';
import AIChat from '@/components/AI/Chat';

function AsideMain({ header, data }: AsideMainPropsType) {
  return (
    <Aside.Section
      grow
      component={ScrollArea}
      type={"never"}
      h={"100%"}
      mah={"100%"}
      w={"100%"}
      maw={"100%"}
      m={0}
      sx={(theme) => {
        return {
          borderRadius: theme.radius.sm,
        }
      }}
    >
      {
        header && (header.toUpperCase() === "ASSISTANT")
        && <AIChat />
      }
    </Aside.Section>
  );
}

export default AsideMain;