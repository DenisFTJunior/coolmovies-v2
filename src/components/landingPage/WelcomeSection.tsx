import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

import localImage from "../../../public/localImage.png";

class WelcomeSection extends React.Component {
  render() {
    return (
      <Box sx={{ width: "100%", height: "90vh" }}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Box sx={{ flex: 1 }}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography sx={{ width: "52%" }} variant="h4" component="div">
                SHARE YOUR
              </Typography>
              <Typography
                sx={{ width: "52%" }}
                noWrap
                variant="h4"
                component="div"
              >
                GOOD MOVIE STYLE
              </Typography>
              <Typography
                sx={{ marginLeft: "-10%" }}
                variant="body1"
                component="div"
              >
                {" "}
                Write. Read. Share Reviews
              </Typography>
              <Button
                sx={{
                  justifySelf: "flex-end",
                  width: "52%",
                  height: "4rem",
                  marginTop: "4rem",
                  borderRadius: "10px",
                }}
                size="large"
                variant="contained"
              >
                <Typography variant="button">WRITE YOUR REVIEW</Typography>
              </Button>
            </Stack>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Image
              src={localImage}
              alt="Picture of local"
              width="1080"
              height="1080"
            />
          </Box>
        </Stack>
      </Box>
    );
  }
}

export default WelcomeSection;
