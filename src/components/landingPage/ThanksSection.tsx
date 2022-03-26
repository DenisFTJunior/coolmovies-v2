import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import localImage from "../../../public/localImage.png";

class ThanksSection extends React.Component {
  render() {
    return (
      <Stack justifyContent="center" alignItems="center">
        <Box
          sx={{
            flex: 1,
            backgroundColor:
              "linear-gradient(180deg, rgba(136,38,138,1) 25%, rgba(0,212,255,0) 100%);",
            width: "100%",
            height: "100%",
          }}
        >
          <Typography variant="h5" component="div">
            THANKS FOR VISITING YOUR WEBSITE, HE DESIRE WHO YOU ENJOYED IT
          </Typography>
        </Box>
      </Stack>
    );
  }
}

export default ThanksSection;
