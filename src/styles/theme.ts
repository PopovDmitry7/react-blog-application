import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#2C3E50", // header & footer background
      contrastText: "#ECF0F1",
    },
    divider: "#BDC3C7", // divider and border color
    background: {
      default: "#ECF0F1", // page/body background
      paper: "#ECF0F1", // use same for surface if you like
    },
    text: {
      primary: "#2C3E50", // good contrast on light body
    },
  }});

export default defaultTheme;