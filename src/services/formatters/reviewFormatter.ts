import { assoc, compose, map, pick } from "ramda";
import { Review, UnformattedReviews } from "../../entities/review";

const reviewsFormmatter = (unformattedReviews: UnformattedReviews): Review[] => {
  const reviews = unformattedReviews.allMovieReviews.reviews.map((review) => {
    const comments = review.commentsByMovieReviewId.comments.map((comment) => ({
      id: comment.id,
      title: comment.title,
      body: comment.body,
    }));
    return {
      id: review.id,
      title: review.title,
      body: review.body,
      rating: review.rating,
      movie: review.movie,
      comments,
    };
  });
  return reviews;
};

export default reviewsFormmatter;
