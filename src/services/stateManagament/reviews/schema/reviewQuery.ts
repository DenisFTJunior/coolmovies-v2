enum OrderType {
  ID_ASC,
  ID_DESC,
  TITLE_ASC,
  TITLE_DESC,
  BODY_ASC,
  BODY_DESC,
  RATING_ASC,
  RATING_DESC,
  MOVIE_ID_ASC,
  MOVIE_ID_DESC,
  USER_REVIEWER_ID_ASC,
  USER_REVIEWER_ID_DESC,
}

type Filter = {
  id?: string;
  nodeId?: string;
  body?: string;
  movieId?: string;
  rating?: string;
  title?: string;
  userReviewerId?: string;
  and?: Filter;
  or?: Filter;
  not?: Filter;
};

export type reviewsVars = {
  condition?: {
    id?: string;
    nodeId?: string;
    body?: string;
    movieId?: string;
    rating?: string;
    title?: string;
    userReviewerId?: string;
  };
  filter?: Filter;
  orderBy?: OrderType;
  offset?: number;
  last?: number;
  first?: number;
};

export type ReviewVars = {
  id?: string | string[];
  nodeId?: string;
};
