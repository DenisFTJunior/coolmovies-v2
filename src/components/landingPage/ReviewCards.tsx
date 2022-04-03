import { identity, times } from "ramda";
import React from "react";

import { Review } from "../../entities/review";
import ReviewCard from "../card/ReviewCard";
import { Stack } from "@mui/material";
import useReviews from "../../services/stateManagament/reviews/helpers/useReviews";

const ReviewCards = () => {
  const [reviews] = useReviews({ first: 4 });

  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      flexWrap="wrap"
      spacing={4}
      sx={{
        width: "100%",
        marginY: "2rem",
      }}
    >
      {times(identity, 4 - reviews?.length > 0 ? 4 - reviews?.length : 0).map(
        (item, index) => (
          <ReviewCard key={index} review={undefined} />
        )
      )}
      {reviews?.map((review: Review) => (
        <ReviewCard key={`${review.title}-${review.id}`} review={review} />
      ))}
      {!reviews &&
        times(identity, 4).map((item, index) => (
          <ReviewCard key={index} review={undefined} />
        ))}
    </Stack>
  );
};

export default ReviewCards;
