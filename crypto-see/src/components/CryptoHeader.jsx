import { Box, Container, Typography } from "@mui/material";
import React from "react";

const CryptoHeader = ({ image, name, symbol }) => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: "1em", alignItems: "center" }}>
          <Box
            component="img"
            src={image}
            sx={{ width: "50px", height: "50px" }}
          />
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {name}
            </Typography>
            <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
              {symbol.toUpperCase()}/EUR
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography>Links</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default CryptoHeader;
