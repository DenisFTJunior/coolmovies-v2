enum OrderType {
  ID_ASC,
  ID_DESC,
  TITLE_ASC,
  TITLE_DESC,
  RELEASE_DATE_ASC,
  RELEASE_DATE_DESC,
}

type Filter = {
  id?: string;
  nodeId?: string;
  releaseDate?: string;
  title?: string;
  and?: Filter;
  or?: Filter;
  not?: Filter;
};

export type MoviesVars = {
  condition?: {
    id?: string;
    nodeId?: string;
    title?: string;
    releaseDate?: string;
  };
  filter?: Filter;
  orderBy?: OrderType;
  offset?: number;
  last?: number;
  first?: number;
};
