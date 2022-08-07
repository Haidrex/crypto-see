import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CryptoChart from "../components/CryptoChart";
import { Container } from "@mui/material";
import CryptoHeader from "../components/CryptoHeader";

const Coin = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}?localization=false`
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <Container sx={{ padding: 5 }}>
      <CryptoHeader
        image={data.image.small}
        name={data.name}
        symbol={data.symbol}
      />
      <CryptoChart />
    </Container>
  );
};

export default Coin;
