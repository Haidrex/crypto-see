import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Divider,
  Toolbar,
  Typography,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const Navbar = () => {
  let navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Crypto-See
      </Typography>
      <Divider />
      <List>
        <ListItem key="home" disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem key="coins" disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Coins" />
          </ListItemButton>
        </ListItem>
        <ListItem key="exchanges" disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary="Exchanges" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Crypto-See
          </Typography>

          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/coins")}>
            Coins
          </Button>
          <Button color="inherit" onClick={() => navigate("/exchanges")}>
            Exchanges
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
