import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const SpinnerContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
const LoadingSpinner = styled(Box)(({ theme }) => ({
  width: "100px",
  height: "100px",
  border: "10px solid #f3f3f3",
  borderTop: "10px solid #383636",
  borderRadius: "50%",
  animation: "spinner 1.5s linear infinite",
  "@keyframes spinner": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
}));

const Loading = () => {
  return (
    <SpinnerContainer component="div">
      <LoadingSpinner component="div"></LoadingSpinner>
    </SpinnerContainer>
  );
};

export default Loading;
