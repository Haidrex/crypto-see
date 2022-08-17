import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const DataCard = ({ label, data }) => {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: "#ddd" }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          color="text.secondary"
          component="div"
        >
          {label}
        </Typography>
        <Typography variant="h3" color="text.primary" textAlign="center">
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DataCard;
