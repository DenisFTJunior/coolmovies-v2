import { createTheme } from "@mui/material";

const coolestMoviesTheme = createTheme({
  palette: {
    primary: {
      main: "#88268A",
      contrastText: "white",
    },
    secondary: {
      main: "#fff",
      contrastText: "black",
    },
  },
});

export default coolestMoviesTheme;
