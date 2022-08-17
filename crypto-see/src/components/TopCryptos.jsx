import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import DataCard from "./DataCard";
import { roundTo2Decimal } from "../utils/formatter";

const TopCryptos = ({ cryptos }) => {
  return (
    <Box>
      <Typography variant="h4" textAlign="center" mb={5}>
        Top Cryptos by market cap
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 20 }}
      >
        {Object.keys(cryptos).map((key, index) => {
          return (
            <Grid item xs={2} sm={4} md={4}>
              <DataCard
                label={`${index + 1}. ${key.toUpperCase()}`}
                data={`${roundTo2Decimal(cryptos[key])}%`}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default TopCryptos;
