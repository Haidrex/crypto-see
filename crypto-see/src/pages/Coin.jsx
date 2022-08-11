import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CryptoChart from "../components/CryptoChart";
import { Container, Divider } from "@mui/material";
import CryptoHeader from "../components/CryptoHeader";
import CryptoChartHeader from "../components/CryptoChartHeader";
import CryptoDetails from "../components/CryptoDetails";
import CryptoDescription from "../components/CryptoDescription";

const Coin = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [details, setDetails] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}?localization=false`
        );
        console.log(response.data);
        setDetails({
          market_cap: response.data.market_data.market_cap.eur,
          circulating_supply: response.data.market_data.circulating_supply,
          ath: response.data.market_data.ath.eur,
          total_volume: response.data.market_data.total_volume.eur,
          price_change: response.data.market_data.price_change_percentage_7d,
        });
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
    <Container sx={{}}>
      <CryptoHeader
        image={data.image.large}
        name={data.name}
        symbol={data.symbol}
        links={data.links}
      />
      <Divider />
      <CryptoChartHeader
        currentPrice={data.market_data.current_price.eur}
        priceChange={data.market_data.price_change_24h_in_currency.eur}
        priceChangePercentage={
          data.market_data.price_change_percentage_24h_in_currency.eur
        }
      />
      <CryptoChart />
      <CryptoDetails details={details} />
      <CryptoDescription text={data.description.en} />
    </Container>
  );
};

export default Coin;
