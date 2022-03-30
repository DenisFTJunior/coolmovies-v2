export type User = {
  id: string;
  nodeId: string;
  name: string;
};

export type UnformattedUser = {
  allUsers: {
    users: User[];
    totalCount: number;
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    };
  };
};
