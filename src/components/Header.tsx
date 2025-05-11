import { Link as ReactRouterLink } from "react-router-dom";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AnimatedLogo from "./AnimatedLogo";

const drawerWidth = 240;
const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        bgcolor: "primary.main",
        color: "primary.contrastText",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
          py: "0.4rem",
          userSelect: "none",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
        }}
      >
        DAILY&nbsp;
        <Box
          component="img"
          src="../../public/logo.png"
          sx={{
            width: "2rem",
            height: "auto",
            verticalAlign: "middle",
          }}
        ></Box>
        LOG
      </Typography>
      <Divider />
      <List disablePadding>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton
              component={ReactRouterLink}
              to={item.path}
              sx={{
                textAlign: "center",
                "&:hover": {
                  bgcolor: "background.default",
                  color: "text.primary",
                },
              }}
            >
              <ListItemText
                primary={item.title}
                sx={{
                  fontWeight: 700,
                  fontSize: 2,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "primary.main",
        color: "primary.contrastText",
      }}
    >
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <AnimatedLogo />
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                component={ReactRouterLink}
                to={item.path}
                key={item.title}
                variant="outlined"
                sx={{
                  color: "primary.contrastText",
                  fontWeight: 700,
                  borderRadius: 2,
                  borderColor: "#5B7486", // draws a white outline
                  "&:hover": {
                    borderColor: "#5B7486", // maintain it on hover
                    backgroundColor: "#5B7486", // optional subtle hover
                  },
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "primary.main", // ← entire drawer background
              color: "primary.contrastText",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
