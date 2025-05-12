import emailjs from "@emailjs/browser";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
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
  FormHelperText,
} from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

type formFields = {
  full_name: string;
  email: string;
  phone_number: string;
  subject: string;
  message: string;
};

export default function ContactUsForm() {
  const subjectMenuItems = [
    { value: "", displayValue: "--None--" },
    { value: "about_blog", displayValue: "About Blog" },
    { value: "blog_feature", displayValue: "Blog Feature" },
    { value: "other", displayValue: "Other" },
  ];
  const {
    control,
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<formFields>();
  const fullNameValue = watch("full_name", "");
  const emailValue = watch("email", "");
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const phoneNumberValue = watch("phone_number", "");
  const phoneNumberRegex =
    /^\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/;
  const subjectValue = watch("subject", "");
  const messageValue = watch("message", "");

  const onSubmit: SubmitHandler<formFields> = async (data) => {
    console.log(data);

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
      alert("Message sent successfully!");
      reset();
    } catch (err) {
      console.error(err);
      alert("Failed to send — please try again later.");
    }
  };

  return (
    <Stack
      component="form"
      gap={1.5}
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
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Box
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        gap={1}
      >
        <TextField
          label="Full Name"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineOutlinedIcon />
                </InputAdornment>
              ),
            },
          }}
          required={fullNameValue.trim().length === 0}
          sx={{ width: { xs: "100%", sm: "50%" } }}
          {...register("full_name", {
            required: "Full Name is required",
          })}
          error={errors.full_name ? true : false}
          helperText={errors.full_name?.message ? errors.full_name.message : ""}
        />
        <TextField
          type="email"
          label="Email Address"
          required={emailValue.trim().length === 0 || !!errors.email}
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
          {...register("email", {
            required: "Email is required",
            validate: (value) => {
              if (!emailRegex.test(value)) return "Enter a valid email";
              return true;
            },
          })}
          error={errors.email ? true : false}
          helperText={errors.email?.message ? errors.email.message : ""}
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
          required={
            phoneNumberValue.trim().length === 0 || !!errors.phone_number
          }
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
          {...register("phone_number", {
            required: "Phone Number is required",
            validate: (value) => {
              if (!phoneNumberRegex.test(value))
                return "Enter a valid Phone Number";
              return true;
            },
          })}
          error={errors.phone_number ? true : false}
          helperText={
            errors.phone_number?.message ? errors.phone_number.message : ""
          }
        />
        <Controller
          name="subject"
          control={control}
          rules={{ required: "Subject is required" }}
          render={({ field }) => (
            <FormControl
              sx={{ width: { xs: "100%", sm: "50%" } }}
              required={subjectValue === "" || !!errors.subject}
              error={!!errors.subject}
            >
              <InputLabel id="subject-label">Subject</InputLabel>
              <Select
                {...field}
                labelId="subject-label"
                label="Subject"
                value={subjectValue}
                id="subject-select"
              >
                {subjectMenuItems.map((subject) => {
                  return (
                    <MenuItem
                      key={subject.value || "none"}
                      value={subject.value}
                    >
                      {subject.displayValue}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelperText>{errors.subject?.message || ""}</FormHelperText>
            </FormControl>
          )}
        />
      </Box>
      <TextField
        label="Message"
        minRows={4}
        multiline
        slotProps={{ htmlInput: { maxLength: 500 } }}
        required={messageValue.trim().length === 0}
        fullWidth
        {...register("message", {
          required: "Message is required",
          maxLength: 500,
        })}
        error={errors.message ? true : false}
        helperText={errors.message?.message ? errors.message.message : ""}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ maxWidth: "20rem", mt: "1rem" }}
        size="medium"
        disabled={isSubmitting}
      >
        Submit
      </Button>
    </Stack>
  );
}
