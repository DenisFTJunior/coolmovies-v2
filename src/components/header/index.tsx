import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <AppBar sx={{ margin: "2rem 5%", width: "95%" }} position="sticky">
        <Toolbar variant="regular">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Typography fontWeight={900} variant="h6">
              COOLESTMOVIES
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <Link href="/">
                <Button size="small" color="secondary">
                  Home
                </Button>
              </Link>
              <Link href="/reviews">
                <Button size="small" color="secondary">
                  Reviews
                </Button>
              </Link>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
