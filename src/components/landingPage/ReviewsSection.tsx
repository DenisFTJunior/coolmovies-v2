import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import ReviewRepository from "../../repositories/review/ReviewRepository";

class ReviewsSection extends React.Component {
  reviewRepository = new ReviewRepository();

  render() {
    return (
      <Box sx={{ width: "100%", height: "100%" }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography variant="h4" component="div">
            Reviews by users
          </Typography>
          <Typography
            sx={{ marginLeft: "10%" }}
            variant="body1"
            component="div"
          >
            Tell they what you think!
          </Typography>

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
          ></Stack>
        </Stack>
      </Box>
    );
  }
}

export default ReviewsSection;
