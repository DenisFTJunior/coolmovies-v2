import { CircularProgress, Stack, Typography } from "@mui/material";
import React from "react";

const Loading = () => (
  <Stack
    sx={{ margin: "5%" }}
    direction="row"
    alignItems="center"
    justifyContent="center"
    spacing={4}
  >
    <CircularProgress />
    <Typography variant="h5">Loading</Typography>
  </Stack>
);

export default Loading;
