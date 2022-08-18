import React from "react";
import "./loading.css";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const SpinnerContainer = styled(Box)(({ theme }) => ({}));
const LoadingSpinner = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "50px",
  border: "10px solid #f3f3f3",
  borderTop: "10px solid #383636" /* Black */,
  borderRadius: "50%",
  animation: "spinner 1.5s linear infinite",
  "@keyframes myEffect": {
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
