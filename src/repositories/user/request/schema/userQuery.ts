enum OrderType {
  ID_ASC,
  ID_DESC,
  NAME_ASC,
  NAME_DESC,
}

type Filter = {
  id?: string;
  nodeId?: string;
  NAME?: string;
  and?: Filter;
  or?: Filter;
  not?: Filter;
};

export type UsersVars = {
  condition?: {
    id?: string;
    nodeId?: string;
    name?: string;
  };
  filter?: Filter;
  orderBy?: OrderType;
  offset?: number;
  last?: number;
  first?: number;
};
