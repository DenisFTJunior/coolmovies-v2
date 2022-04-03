import { gql } from "@apollo/client";
import { UnformattedReviews } from "../../../entities/review";

import { moviesClient } from "../../config/movieClient";
import { reviewsVars } from "./schema/reviewQuery";

const QUERY = gql`
  query MovieReviews(
    $condition: MovieReviewCondition
    $filter: MovieReviewFilter
    $first: Int
    $last: Int
    $offset: Int
    $orderBy: [MovieReviewsOrderBy!]
  ) {
    allMovieReviews(
      condition: $condition
      filter: $filter
      first: $first
      last: $last
      offset: $offset
      orderBy: $orderBy
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      reviews: nodes {
        movie: movieByMovieId {
          id
          title
        }
        user: userByUserReviewerId {
          id
          name
        }
        body
        id
        nodeId
        rating
        title
        userReviewerId
      }
    }
  }
`;

const getReviewsQuery = (vars: reviewsVars) =>
  moviesClient.query<UnformattedReviews, reviewsVars>({
    query: QUERY,
    variables: vars,
    fetchPolicy: "network-only",
  });

export default getReviewsQuery;
