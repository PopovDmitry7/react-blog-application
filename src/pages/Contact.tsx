import { Box, Typography } from "@mui/material";
import ContactUsForm from "../components/ContactUsForm";

export default function Contact() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      flexDirection="column"
    >
      <Typography variant="h4" color="primary">
        Contact Us
      </Typography>
      <Typography variant="subtitle1" color="primary" textAlign="center">
        We'd love to hear from you. Please fill out the form below.
      </Typography>
      <ContactUsForm />
    </Box>
  );
}
