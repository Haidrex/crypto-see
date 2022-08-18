import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import ExchangeCard from "../components/ExchangeCard";
import Loading from "../components/Loading";
import cryptoService from "../services/cryptoService";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: 2,
  flexWrap: "wrap",
  padding: 5,
}));

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await cryptoService.getExchanges();
        setExchanges(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <StyledContainer>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {exchanges.map((exchange) => {
          return (
            <Grid item xs={2} sm={4} md={4}>
              <ExchangeCard exchange={exchange} key={exchange.id} />
            </Grid>
          );
        })}
      </Grid>
    </StyledContainer>
  );
};

export default Exchanges;
