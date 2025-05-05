import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#36454F", // header & footer background
      contrastText: "#fff",
    },
    divider: "#1C2321", // divider and border color
    background: {
      default: "#BCC9D2", // page/body background
      paper: "#BCC9D2", // use same for surface if you like
    },
    text: {
      primary: "#1C2321", // good contrast on light body
    },
  }});

export default defaultTheme;