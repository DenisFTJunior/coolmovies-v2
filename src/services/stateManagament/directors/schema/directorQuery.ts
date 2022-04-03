enum OrderType {
  ID_ASC,
  ID_DESC,
  NAME_ASC,
  NAME_DESC,
  AGE_ASC,
  AGE_DESC,
}

type Filter = {
  id?: string;
  nodeId?: string;
  name?: string;
  age?: number;
  and?: Filter;
  or?: Filter;
  not?: Filter;
};

export type DirectorsVars = {
  condition?: {
    id?: string;
    nodeId?: string;
    name?: string;
    age?: number;
  };
  filter?: Filter;
  orderBy?: OrderType;
  offset?: number;
  last?: number;
  first?: number;
};
