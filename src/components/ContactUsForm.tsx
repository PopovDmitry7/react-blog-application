import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "../secret";
import {
  Stack,
  Button,
  Box,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

export default function ContactUsForm() {
  const subjectMenuItems = [
    { value: "", displayValue: "--None--" },
    { value: "about_blog", displayValue: "About Blog" },
    { value: "blog_feature", displayValue: "Blog Feature" },
    { value: "other", displayValue: "Other" },
  ];
  const [subject, setSubject] = useState("");
  const [sending, setSending] = useState(false);
  const [messageHelperText, setMessageHelperText] = useState("0/500");
  const form = useRef<HTMLFormElement>(null);

  const onMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const len = event.target.value.length;
    setMessageHelperText(`${len}/500`);
  };

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(form);

    if (!form.current) return;

    setSending(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        alert("Message sent sucessfully!");
        form.current?.reset();
        setSubject("");
        setMessageHelperText("0/500");
      })
      .catch((error) => {
        console.error("Email send error:", error);
        alert("Failed to send message, please try again.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <Stack
      component="form"
      gap={1}
      mt={4}
      sx={{
        width: {
          xs: "100%",
          sm: 580,
          md: 700,
          lg: 800,
        },
      }}
      justifyContent="center"
      alignItems="center"
      ref={form}
      onSubmit={sendEmail}
    >
      <Box
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        gap={1}
      >
        <TextField
          label="Full Name"
          name="full_name"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineOutlinedIcon />
                </InputAdornment>
              ),
            },
          }}
          required
          sx={{ width: { xs: "100%", sm: "50%" } }}
          disabled={sending}
        />
        <TextField
          type="email"
          label="Email Address"
          name="email"
          required
          sx={{ width: { xs: "100%", sm: "50%" } }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailOutlinedIcon />
                </InputAdornment>
              ),
            },
          }}
          disabled={sending}
        />
      </Box>
      <Box
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        gap={1}
      >
        <TextField
          label="Phone Number"
          name="phone_number"
          required
          sx={{ width: { xs: "100%", sm: "50%" } }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneOutlinedIcon />
                </InputAdornment>
              ),
            },
          }}
          disabled={sending}
        />
        <FormControl sx={{ width: { xs: "100%", sm: "50%" } }} required>
          <InputLabel id="subject-label">Subject</InputLabel>
          <Select
            labelId="subject-label"
            label="Subject"
            name="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            defaultValue=""
            id="subject-select"
            fullWidth
            disabled={sending}
          >
            {subjectMenuItems.map((subject) => {
              return (
                <MenuItem key={subject.value || "none"} value={subject.value}>
                  {subject.displayValue}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <TextField
        label="Message"
        name="message"
        minRows={4}
        multiline
        slotProps={{ htmlInput: { maxLength: 500 } }}
        helperText={messageHelperText}
        onChange={onMessageChange}
        required
        fullWidth
        disabled={sending}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ maxWidth: "20rem", mt: "1rem" }}
        size="medium"
        disabled={sending}
      >
        Submit
      </Button>
    </Stack>
  );
}
