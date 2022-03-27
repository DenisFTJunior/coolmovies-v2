import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import ReviewCards from "./ReviewCards";

type LocalProps = {};

class ReviewsSection extends React.Component<LocalProps> {
  render() {
    return (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        sx={{ width: "100%", height: "100%" }}
      >
        <Typography variant="h4" component="div" fontWeight={700}>
          Reviews by users
        </Typography>
        <Typography variant="body1" component="div">
          Tell they what you think!
        </Typography>

        <ReviewCards />
      </Stack>
    );
  }
}

export default ReviewsSection;
