import { Box } from "@radix-ui/themes";
import { ReactNode } from "react";

const Ocean = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      as={"div"}
      px={"1"}
      py={"1"}
      className={`
        flex flex-col justify-center items-center
        min-w-full w-full max-w-full
        min-h-full h-full max-h-full
        bg-background
      `}
    >
      {children}
    </Box>
  );
};

export default Ocean;