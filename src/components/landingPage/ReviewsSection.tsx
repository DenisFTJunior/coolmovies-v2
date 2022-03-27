import { Box, Stack, Typography } from "@mui/material";
import React from "react";

type LocalProps = {};

class ReviewsSection extends React.Component<LocalProps> {
  render() {
    return (
      <Box sx={{ width: "100%", height: "100%" }}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Typography variant="h4" component="div" fontWeight={700}>
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
            flexWrap="wrap"
          ></Stack>
        </Stack>
      </Box>
    );
  }
}

export default ReviewsSection;
