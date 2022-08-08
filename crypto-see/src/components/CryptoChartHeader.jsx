import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { priceFormatter } from "../utils/formatter";

const CryptoChartHeader = ({
  currentPrice,
  priceChange,
  priceChangePercentage,
}) => {
  //green color #6fd6b0
  //red color #f05050
  const priceChangeColor = priceChange >= 0 ? "#00b674" : "#f05050";
  return (
    <Container sx={{ padding: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Box>
          <Typography variant="h3">{priceFormatter(currentPrice)}</Typography>
          <Typography sx={{ color: `${priceChangeColor}` }}>
            {priceChange}({priceChangePercentage}%)
          </Typography>
        </Box>
        <Box>
          <Typography>ChartOptions</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default CryptoChartHeader;
