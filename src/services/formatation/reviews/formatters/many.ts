import { Review, UnformattedReviews } from "../../../../entities/review";

export const many = (unformattedReviews: UnformattedReviews): Review[] => {
  const reviews = unformattedReviews.allMovieReviews.reviews.map((review) => {
    return {
      id: review.id,
      title: review.title,
      body: review.body,
      rating: review.rating,
      movie: review.movie,
    };
  });
  return reviews;
};

