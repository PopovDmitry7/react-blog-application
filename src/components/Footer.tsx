import { Box, Container, Typography, Link } from "@mui/material";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#34495E",
        color: "primary.contrastText",
        py: 2,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="body2">© {currentYear} Dmitrii Popov.</Typography>
        <Box sx={{ mt: 1 }}>
          <Link
            component={ReactRouterLink}
            to="/about"
            color="inherit"
            underline="hover"
            variant="body2"
            sx={{ mx: 1 }}
          >
            About
          </Link>
          <Link
            href="/contact"
            color="inherit"
            underline="hover"
            variant="body2"
            sx={{ mx: 1 }}
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            color="inherit"
            underline="hover"
            variant="body2"
            sx={{ mx: 1 }}
          >
            Privacy
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
