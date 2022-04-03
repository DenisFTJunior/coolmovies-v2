export const review = {
  movieReview: {
    id: "string",

    title: "string",
    movie: { id: "string", title: "string", releaseDate: new Date() },
    user: { id: "string", name: "string" },
    rating: 0,
    body: "string",

    commentsByMovieReviewId: {
      comments: [],
    },
  },
};

export const expectedReview = {
  id: "string",
  title: "string",
  movie: { id: "string", title: "string", releaseDate: new Date() },
  user: { id: "string", name: "string" },
  rating: 0,
  body: "string",
  comments: [],
};
