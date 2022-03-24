import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h4">COOLESTMOVIES</Typography>
        <Box>
          <Link href="/">
            <Button size="small">Home</Button>
          </Link>
          <Link href="/reviews">
            <Button size="small">Reviews</Button>
          </Link>
        </Box>
      </Stack>
    );
  }
}

export default Header;
