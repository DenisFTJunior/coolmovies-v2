import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <AppBar position="sticky">
        <Toolbar variant="regular">
          <Stack
            sx={{ margin: "2rem 5rem", width: "100%" }}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontWeight={900} variant="h6">
              COOLESTMOVIES
            </Typography>
            <Box>
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
