enum OrderType {
  ID_ASC,
  ID_DESC,
  TITLE_ASC,
  TITLE_DESC,
  RELEASE_DATE_ASC,
  RELEASE_DATE_DESC,
}

export type MoviesVars = {
  condition?: {
    id: string;
    movieDirectorId: string;
    releaseDate: string;
    title: string;
    userCreatorId: string;
  };
  filter?: Filter;
  orderBy?: OrderType;
  offset?: number;
  last?: number;
  first?: number;
};

type Filter = {
  id: string;
  movieDirectorId: string;
  releaseDate: string;
  title: string;
  userCreatorId: string;
  and: Filter;
  or: Filter;
  not: Filter;
}
