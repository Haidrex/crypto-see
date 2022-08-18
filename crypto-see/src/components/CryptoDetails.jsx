import React from "react";
import { Container, List, ListItem, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { priceFormatter } from "../utils/formatter";

const StyledList = styled(List)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    flexWrap: "no-wrap",
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  border: "1px solid #eff0f3",
  display: "flex",
  width: "auto",
  padding: 24,
  flexDirection: "column",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  opacity: 0.7,
}));

const CryptoDetails = ({ details }) => {
  const priceChangeColor = details.price_change >= 0 ? "#00b674" : "#f05050";

  return (
    <Container>
      <StyledList>
        <StyledListItem>
          <StyledTypography variant="body2">Market Cap</StyledTypography>
          <Typography variant="h6">
            {priceFormatter(details.market_cap)}
          </Typography>
        </StyledListItem>
        <StyledListItem>
          <StyledTypography variant="body2">Total Volume</StyledTypography>
          <Typography variant="h6">{details.total_volume}</Typography>
        </StyledListItem>
        <StyledListItem>
          <StyledTypography variant="body2">
            Circulating Supply
          </StyledTypography>
          <Typography variant="h6">{details.circulating_supply}</Typography>
        </StyledListItem>
        <StyledListItem>
          <StyledTypography variant="body2">All Time High</StyledTypography>
          <Typography variant="h6">{priceFormatter(details.ath)}</Typography>
        </StyledListItem>
        <StyledListItem>
          <StyledTypography variant="body2">Price Change(7D)</StyledTypography>
          <Typography variant="h6" color={priceChangeColor}>
            {details.price_change}%
          </Typography>
        </StyledListItem>
      </StyledList>
    </Container>
  );
};

export default CryptoDetails;
