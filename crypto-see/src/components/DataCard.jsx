import React from "react";
import { styled } from "@mui/material/styles";
import { Card, CardContent, Typography } from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
}));

const DataCard = ({ label, data }) => {
  return (
    <StyledCard sx={{ maxWidth: 345, backgroundColor: "#fff" }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          color="text.secondary"
          component="div"
        >
          {label}
        </Typography>
        <Typography variant="h4" color="text.primary" textAlign="center">
          {data}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default DataCard;
