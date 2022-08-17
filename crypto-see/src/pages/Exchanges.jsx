import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import ExchangeCard from "../components/ExchangeCard";
import cryptoService from "../services/cryptoService";

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
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: 2,
        flexWrap: "wrap",
        padding: 5,
      }}
    >
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
    </Container>
  );
};

export default Exchanges;
