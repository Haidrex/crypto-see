import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { priceFormatter, roundTo2Decimal } from "../utils/formatter";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

const CryptoChartHeader = ({
  currentPrice,
  priceChange,
  priceChangePercentage,
}) => {
  const [alignment, setAlignment] = useState("1M");
  const priceChangeColor = priceChange >= 0 ? "#00b674" : "#f05050";

  const handleChange = (e, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <Container sx={{ padding: 2 }}>
      <StyledBox>
        <Box>
          <Typography variant="h3">{priceFormatter(currentPrice)}</Typography>
          <Typography sx={{ color: `${priceChangeColor}` }}>
            {priceFormatter(priceChange)}(
            {roundTo2Decimal(priceChangePercentage)}%)
          </Typography>
        </Box>
        <Box>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
          >
            <ToggleButton value="1H">1H</ToggleButton>
            <ToggleButton value="1D">1D</ToggleButton>
            <ToggleButton value="1W">1W</ToggleButton>
            <ToggleButton value="1M">1M</ToggleButton>
            <ToggleButton value="1Y">1Y</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </StyledBox>
    </Container>
  );
};

export default CryptoChartHeader;
