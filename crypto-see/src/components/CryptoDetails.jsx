import { Container, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { priceFormatter } from "../utils/formatter";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  border: "1px solid #eff0f3",
  display: "flex",
  width: "auto",
  padding: 24,
  flexDirection: "column",
}));

const CryptoDetails = ({ details }) => {
  const priceChangeColor = details.price_change >= 0 ? "#00b674" : "#f05050";
  return (
    <Container>
      <List
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <StyledListItem>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Market Cap
          </Typography>
          <Typography variant="h6">
            {priceFormatter(details.market_cap)}
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Total Volume
          </Typography>
          <Typography variant="h6">{details.total_volume}</Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Circulating Supply
          </Typography>
          <Typography variant="h6">{details.circulating_supply}</Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            All Time High
          </Typography>
          <Typography variant="h6">{priceFormatter(details.ath)}</Typography>
        </StyledListItem>
        <StyledListItem>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            Price Change(7D)
          </Typography>
          <Typography variant="h6" color={priceChangeColor}>
            {details.price_change}%
          </Typography>
        </StyledListItem>
      </List>
    </Container>
  );
};

export default CryptoDetails;
