import { Avatar, Group, Text } from "@mantine/core";
import { forwardRef } from "react";

interface DataTypeOptionProps extends React.ComponentPropsWithoutRef<'div'> {
  icon: JSX.Element;
  label: string;
  description: string;
}

export const DataTypeOption = forwardRef<HTMLDivElement, DataTypeOptionProps>(
  ({ icon, label, description, ...others }: DataTypeOptionProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar>
          {icon}
        </Avatar>
        <div>
          <Text ff={"monospace"} size="sm">{label}</Text>
          <Text size="xs" opacity={0.65}>
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

DataTypeOption.displayName = "DataTypeOption";