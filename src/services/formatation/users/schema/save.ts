export type SaveUserOutput = {
  user: {
    id?: string;
    nodeId?: string;
    name: string;
  };
};

export type SaveUserInput = {
  id?: string;
  nodeId?: string;
  name: string;
};
