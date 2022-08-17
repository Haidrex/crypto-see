import React, { useState, useEffect } from "react";
import CryptosTable from "../components/CryptosTable";
import { Container } from "@mui/material";
import CryptoSearch from "../components/CryptoSearch";
import cryptoService from "../services/cryptoService";

const Coins = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await cryptoService.getAllCryptos();
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  return (
    <Container sx={{ padding: 5 }}>
      <CryptoSearch />
      <CryptosTable data={data} />
    </Container>
  );
};

export default Coins;
