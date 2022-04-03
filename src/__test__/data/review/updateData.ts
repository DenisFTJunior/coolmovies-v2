export const updateData = {
  id: "1111",

  title: "string",
  movieId: "string",
  userId: "string",
  rating: 0,
  body: "string",
};

export const expectedUpdateData = {
  id: "1111",

  movieReviewPatch: {
    id: "1111",

    title: "string",
    movieId: "string",
    userReviewerId: "string",
    rating: 0,
    body: "string",
  },
};
