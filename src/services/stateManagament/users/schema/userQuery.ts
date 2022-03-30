enum OrderType {
  ID_ASC,
  ID_DESC,
  NAME_ASC,
  NAME_DESC,
}

export type UsersVars = {
  condition?: {
    id: string;
    name: string;
  };
  filter?: Filter;
  orderBy?: OrderType;
  offset?: number;
  last?: number;
  first?: number;
};

type Filter = {
  id: string;
  name: string;
  and: Filter;
  or: Filter;
  not: Filter;
};
