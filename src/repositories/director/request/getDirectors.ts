import { gql } from "@apollo/client";
import { UnformattedReviews } from "../../../entities/review";

import { moviesClient } from "../../config/movieClient";
import { DirectorsVars } from "./schema/directorQuery";

const QUERY = gql`
  query Users(
    $orderBy: [MovieDirectorsOrderBy!]
    $condition: MovieDirectorCondition
    $filter: MovieDirectorFilter
    $offset: Int
    $last: Int
    $first: Int
  ) {
    allMovieDirectors(
      condition: $condition
      filter: $filter
      orderBy: $orderBy
      offset: $offset
      last: $last
      first: $first
    ) {
      directors: nodes {
        id
        nodeId
        name
        age
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

const getDirectorsQuery = (vars: DirectorsVars) =>
  moviesClient.query({
    query: QUERY,
    variables: vars,
    fetchPolicy: "network-only",
  });

export default getDirectorsQuery;
