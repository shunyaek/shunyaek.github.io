import { Box } from "@radix-ui/themes";
import { ReactNode } from "react";

const Island = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      as={"div"}
      minWidth={"calc(100%-1rem)"}
      width={"calc(100%-1rem)"}
      maxWidth={"calc(100%-1rem)"}
      className={`
        border border-gray-200
        sm:border-red-200
        md:border-blue-200
        lg:border-yellow-200
        xl:border-pink-200
        2xl:border-purple-200
        2xl:min-w-[calc(100%-1rem)] 2xl:w-[calc(100%-1rem)] 2xl:max-w-[calc(100%-1rem)]
        2xl:min-h-[100%] 2xl:h-[100%] 2xl:max-h-[100%]
        2xl:flex 2xl:flex-row 2xl:justify-center 2xl:items-center 2xl:gap-0
        xl:min-w-[calc(100%-1rem)] xl:w-[calc(100%-1rem)] xl:max-w-[calc(100%-1rem)]
        xl:min-h-[100%] xl:h-[100%] xl:max-h-[100%]
        xl:flex xl:flex-row xl:justify-center xl:items-center xl:gap-0
        lg:min-w-[calc(100%-1rem)] lg:w-[calc(100%-1rem)] lg:max-w-[calc(100%-1rem)]
        lg:min-h-[100%] lg:h-[100%] lg:max-h-[100%]
        lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-0 lg:overflow-y-auto
        md:min-w-[calc(100%-1rem)] md:w-[calc(100%-1rem)] md:max-w-[calc(100%-1rem)]
        md:min-h-[100%] md:h-[100%] md:max-h-[100%]
        md:flex md:flex-col md:justify-center md:items-center md:gap-0 md:overflow-y-auto
        sm:min-w-[calc(100%-1rem)] sm:w-[calc(100%-1rem)] sm:max-w-[calc(100%-1rem)]
        sm:min-h-[100%] sm:h-[100%] sm:max-h-[100%]
        sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-0 sm:overflow-y-auto
        min-w-[calc(100%-1rem)] w-[calc(100%-1rem)] max-w-[calc(100%-1rem)]
        min-h-[100%] h-[100%] max-h-[100%]
        flex flex-col justify-center items-center gap-0 overflow-y-auto
        shadow-none
        rounded-lg sm:rounded-lg md:rounded-lg lg:rounded-lg xl:rounded-lg 2xl:rounded-lg
      `}
    >
      {children}
    </Box>
  );
};

export default Island;