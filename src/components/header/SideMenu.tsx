import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/material";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

export default function SideMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
        }}
      >
        <Button onClick={handleClick} color="secondary">
          <MenuIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <Link href="/">Home</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {" "}
            <Link href="/reviews">Reviews</Link>
          </MenuItem>
        </Menu>
      </Box>

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
    </>
  );
}
