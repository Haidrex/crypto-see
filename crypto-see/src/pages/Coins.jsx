import React, { useState, useEffect } from "react";
import CryptosTable from "../components/CryptosTable";
import { Container } from "@mui/material";
import CryptoSearch from "../components/CryptoSearch";
import cryptoService from "../services/cryptoService";
import Loading from "../components/Loading";

const Coins = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await cryptoService.getAllCryptos(currentPage, 20);
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
    return <Loading />;
  }

  return (
    <Container sx={{ padding: 5 }}>
      <CryptoSearch setData={setData} />
      <CryptosTable data={data} />
    </Container>
  );
};

export default Coins;
