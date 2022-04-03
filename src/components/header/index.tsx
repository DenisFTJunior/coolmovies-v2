import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";

import SideMenu from "./SideMenu";

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
            <SideMenu />
          </Stack>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
