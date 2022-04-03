import { review, expectedReview } from "./review";

const localReview = {
  id: "string",
  title: "string",
  body: "string",
  rating: 3,
  movie: { id: "string", title: "string", releaseDate: new Date() },
  user: { id: "string", name: "string" },
};

export const reviews = {
  allMovieReviews: {
    totalCount: 0,
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
    },
    reviews: [localReview],
  },
};

export const expectedReviews = [localReview];
