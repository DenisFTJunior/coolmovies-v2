import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import localImage from "../../../public/localImage.png";

class WelcomeSection extends React.Component {
  render() {
    return (
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Box sx={{ flex: 1 }}>
          <Stack direction="column" justifyContent="center" alignItems="center">
            <Typography variant="h3" component="div">
              SHARE YOUR GOOD MOVIE STYLE
            </Typography>
            <Typography variant="body1" component="div">
              {" "}
              Write. Read. Share Reviews
            </Typography>
          </Stack>
        </Box>
        <Box sx={{ flex: 1 }}>
          <Image
            src={localImage}
            alt="Picture of local"
            width="100%"
            height="100%"
          />
        </Box>
      </Stack>
    );
  }
}

export default WelcomeSection;
