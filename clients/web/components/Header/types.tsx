import { Dispatch, SetStateAction } from "react";

type HeaderPropsType = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

export type { HeaderPropsType };