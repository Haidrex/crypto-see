import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Divider,
} from "@mui/material";
import { roundTo2Decimal } from "../utils/formatter";

const ExchangeCard = ({ exchange }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        component="a"
        target="_blank"
        rel="noreferrer"
        href={exchange.url}
      >
        <Box
          sx={{
            padding: 1,
            gap: 1,
            display: "flex",
            alignItems: "center",
          }}
        >
          <CardMedia
            sx={{ width: "40px" }}
            component="img"
            image={exchange.image}
            alt="exchange icon"
          />
          <Box>
            <Typography variant="h6">{exchange.name}</Typography>
            <Typography variant="theme.text.secondary" color="text.secondary">
              est. {exchange.year_established} {exchange.country}
            </Typography>
          </Box>
        </Box>
        <Divider />
        <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="text.secondary" color="text.secondary">
              Trade volume(24h)
            </Typography>
            <Typography variant="h5">
              {roundTo2Decimal(exchange.trade_volume_24h_btc)} BTC
            </Typography>
          </Box>
          <Box>
            <Typography variant="text.secondary" color="text.secondary">
              Trust score
            </Typography>
            <Typography variant="h6" textAlign="center">
              {exchange.trust_score}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ExchangeCard;
