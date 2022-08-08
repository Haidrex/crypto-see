import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

const Navbar = () => {
  let navigate = useNavigate();

  const handleClick = (path) => {
    navigate({ path });
  };
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
