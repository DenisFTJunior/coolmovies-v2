import { Box, Stack, Typography } from "@mui/material";
import React from "react";

class ThanksSection extends React.Component {
  render() {
    return (
      <Stack
        justifyContent="flex-end"
        sx={{
          background:
            "linear-gradient(180deg, rgba(2,0,36,0) 30%, rgba(136,38,138,1) 100%);",
          width: "100%",
          height: "6rem",
          margin: 0,
        }}
      >
        <Typography mb={2} color="white" align="center" variant="body2" component="div">
          THANKS FOR VISITING YOUR WEBSITE, HE DESIRE WHO YOU ENJOYED IT
        </Typography>
      </Stack>
    );
  }
}

export default ThanksSection;
