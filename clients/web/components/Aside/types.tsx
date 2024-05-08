import { ChatNodesType } from "../AI/types";

type AsidePropsType = {
  data?: [] | ChatNodesType;
  header: string | undefined;
  mounted: boolean;
}

export type { AsidePropsType };