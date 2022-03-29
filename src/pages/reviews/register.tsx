import { Stack, TextField } from "@mui/material";
import React from "react";

class RegisterReview extends React.Component {
  render() {
    return (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ marginX: "5%" }}
      >
        <TextField label="Title" variant="outlined" sx={{ width: "100%" }} />
        
        <TextField
          label="Comment"
          variant="outlined"
          sx={{ width: "100%" }}
          rows={4}
        />
      </Stack>
    );
  }
}

export default RegisterReview;
