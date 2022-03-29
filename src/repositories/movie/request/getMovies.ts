import { gql } from "@apollo/client";
import { UnformattedReviews } from "../../../entities/review";

import { moviesClient } from "../../config/movieClient";
import { MoviesVars } from "./schema/movieQuery";

const QUERY = gql`
  query Movies(
    $condition: MovieCondition
    $filter: MovieFilter
    $orderBy: [MoviesOrderBy!]
    $offset: Int
    $last: Int
    $first: Int
  ) {
    allMovies(
      condition: $condition
      filter: $filter
      orderBy: $orderBy
      offset: $offset
      last: $last
      first: $first
    ) {
      movies: nodes {
        id
        nodeId
        movieDirectorId
        releaseDate
        title
        userCreatorId
        director: movieDirectorByMovieDirectorId {
          age
          id
          name
          nodeId
        }
        user: userByUserCreatorId {
          id
          name
          nodeId
        }
        reviewsQuery: movieReviewsByMovieId {
          reviews: nodes {
            rating
            movieId
            title
            id
            body
            userReviewerId
          }
          totalCount
        }
      }

      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
  }
`;

const getMoviesQuery = (vars: MoviesVars) =>
  moviesClient.query({
    query: QUERY,
    variables: vars,
    fetchPolicy: "network-only",
  });

export default getMoviesQuery;
