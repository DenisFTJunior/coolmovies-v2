import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

import ReviewCard from "../../components/card/ReviewCard";
import SlideCards from "../../components/presenters/SlideCards";
import useReviews from "../../services/stateManagament/reviews/helpers/useReviews";

const Reviews = () => {
  const [reviews] = useReviews({});

  return (
    <Box sx={{ margin: "5%" }}>
      {" "}
      <Typography variant="h4" component="div">
        Reviews
      </Typography>
      <SlideCards
        itens={reviews}
        Card={(item) => <ReviewCard review={item} />}
      />
    </Box>
  );
};

export default Reviews;
