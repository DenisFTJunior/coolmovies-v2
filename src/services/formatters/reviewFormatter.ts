import {
  Review,
  UnformattedReview,
  UnformattedReviews,
} from "../../entities/review";

const reviewsFormmatter = (
  unformattedReviews: UnformattedReviews
): Review[] => {
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

export const reviewFormatter = (unformattedReview: UnformattedReview) => {
  const comments = unformattedReview.movieReview.commentsQuery.comments.map(
    (comment) => ({
      id: comment.id,
      title: comment.title,
      body: comment.body,
    })
  );
  return {
    id: unformattedReview.movieReview.id,
    title: unformattedReview.movieReview.title,
    body: unformattedReview.movieReview.body,
    rating: unformattedReview.movieReview.rating,
    movie: unformattedReview.movieReview.movie,
    comments,
  };
};

export default reviewsFormmatter;
