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
          sx={{ direction: { xs: "column", sm: "column" } }}
          spacing={4}
        >
          <Box sx={{ flex: 1 }}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
            >
              <Typography
                sx={{ width: { sm: "90%", md: "80%", lg: "70%" } }}
                variant="h4"
                component="div"
                fontWeight={700}
              >
                SHARE YOUR
              </Typography>
              <Typography
                sx={{ width: { sm: "90%", md: "80%", lg: "70%" } }}
                noWrap
                variant="h4"
                component="div"
                fontWeight={700}
              >
                GOOD MOVIE STYLE
              </Typography>
              <Typography variant="body1" component="div">
                {" "}
                Write. Read. Share Reviews
              </Typography>
              <Button
                sx={{
                  justifySelf: "flex-end",
                  width: { xs: "90%", sm: "90%", md: "80%", lg: "70%" },
                  height: "4rem",
                  marginTop: "10%",
                  borderRadius: "10px",
                }}
                size="large"
                variant="contained"
              >
                <Typography variant="button">WRITE YOUR REVIEW</Typography>
              </Button>
            </Stack>
          </Box>
          <Box
            sx={{ flex: 1, display: { xs: "none", sm: "none", md: "block" } }}
          >
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
