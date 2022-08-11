import { Container, Typography } from "@mui/material";
import React from "react";
import { formatDescription } from "../utils/formatter";
const CryptoDescription = ({ text }) => {
  function createMarkup() {
    return { __html: text };
  }
  return (
    <Container sx={{ padding: 4 }}>
      <Typography variant="h6">Description</Typography>
      <Typography
        sx={{ opacity: 0.7 }}
        dangerouslySetInnerHTML={createMarkup()}
      ></Typography>
    </Container>
  );
};

export default CryptoDescription;
