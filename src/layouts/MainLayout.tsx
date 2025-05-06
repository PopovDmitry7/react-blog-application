import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Divider, Toolbar } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import defaultTheme from "../styles/theme";

export default function MainLayout() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh", // make the whole page at least viewport-height
        }}
      >
        <Header />
        <Divider sx={{ bgcolor: "divider", height: 2 }} />
        <Toolbar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: "100%",
            bgcolor: "background.default",
            p: 2,
          }}
        >
          <Outlet />
        </Box>
        <Divider sx={{ bgcolor: "divider", height: 1 }} />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
