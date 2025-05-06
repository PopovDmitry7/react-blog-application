import { Typography } from "@mui/material";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function AnimatedLogo() {
  const [text] = useTypewriter({
    words: ["DAILY BLOG"],
    typeSpeed: 100,
    delaySpeed: 2000,
    loop: false,
  });

  return (
    <Typography
      variant="h6"
      component="div"
      sx={{
        flexGrow: 1,
        display: { xs: "none", sm: "block" },
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: "0.2rem",
        color: "inherit",
        textDecoration: "none",
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
      }}
    >
      CHOOSE YOUR&nbsp;
      <Typography
        component="span"
        variant="h5"
        sx={{
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: "0.3rem",
          color: "#8482FF",
        }}
      >
        {text}
        <Cursor cursorColor="#8482FF" />
      </Typography>
    </Typography>
  );
}
