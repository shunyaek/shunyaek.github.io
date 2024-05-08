import { Dispatch, SetStateAction } from "react";

type NavigationBarPropsType = {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

export type { NavigationBarPropsType };