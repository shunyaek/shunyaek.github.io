import { Box } from "@radix-ui/themes";
import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Box asChild>
      <main
        className={`
        container mx-auto
        min-h-full h-full max-h-full
        min-w-full w-full max-w-full
        px-0 gap-4
        flex flex-row flex-grow items-center justify-center
        pt-12 sm:pt-12 md:pt-12 lg:pt-12 xl:pt-12 2xl:pt-12
        pb-12 sm:pb-12 md:pb-12 lg:pb-12 xl:pb-12 2xl:pb-12
      `}
      >
        {children}
      </main>
    </Box>
  );
};

export default Main;