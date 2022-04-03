import { UnformattedReview } from "../../../../entities/review";

export const one = (unformattedReview: UnformattedReview) => {
  const comments =
    unformattedReview.movieReview.commentsByMovieReviewId.comments.map(
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
    user: unformattedReview.movieReview.user,
    comments,
  };
};
