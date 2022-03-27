import { identity, times } from "ramda";
import React from "react";

import { Review } from "../../entities/review";
import ReviewCard from "../card/ReviewCard";
import { Stack } from "@mui/material";
import useReviews from "../../services/stateManagament/reviews/helpers/useReviews";

const ReviewCards = () => {
  const [reviews] = useReviews({});

  console.log("reviews", reviews);

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      mt={4}
      sx={{ width: "100%" }}
      spacing={4}
    >
      {reviews?.map((review: Review) => {
        <ReviewCard key={`${review.title}-${review.id}`} review={review} />;
      })}
      {times(identity, 3 - reviews?.length > 0 ? 3 - reviews?.length : 0).map(
        (item, index) => (
          <ReviewCard key={index} review={undefined} />
        )
      )}
      {!reviews &&
        times(identity, 3).map((item, index) => (
          <ReviewCard key={index} review={undefined} />
        ))}
    </Stack>
  );
};

export default ReviewCards;