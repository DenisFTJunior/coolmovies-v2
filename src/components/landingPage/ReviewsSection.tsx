import { Stack, Typography } from "@mui/material";
import React from "react";
import ReviewRepository from "../../repositories/review/ReviewRepository";

class ReviewsSection extends React.Component {
  reviewRepository = new ReviewRepository();

  render() {
    return (
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h4" component="div">
          Reviews by users
        </Typography>
        <Typography variant="body1" component="div">
          Tell they what you think!
        </Typography>
      </Stack>
    );
  }
}

export default ReviewsSection;
