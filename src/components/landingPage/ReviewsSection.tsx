import { Stack, Typography } from "@mui/material";
import React from "react";

class ReviewsSection extends React.Component {
  render() {
    return (
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Typography variant="h4" component="div">
          Reviews by users
        </Typography>
        <Typography variant="body1" component="div">
          Tell they what you think!
        </Typography>
        {/* add reviews card here after  */}
      </Stack>
    );
  }
}

export default ReviewsSection;
