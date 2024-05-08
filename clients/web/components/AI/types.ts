type ChatNodeType = {
  id: number;
  author: "USER" | "AI";
  content: string;
}

type ChatNodesType = Array<ChatNodeType>;

type ChatType = {
  chatID: string;
  data: ChatNodesType;
}

export type { ChatType, ChatNodesType };