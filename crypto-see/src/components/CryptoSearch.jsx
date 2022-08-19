import React, { useState } from "react";
import { TextField, Stack, Button } from "@mui/material";
import cryptoService from "../services/cryptoService";

const CryptoSearch = ({ setData }) => {
  const [query, setQuery] = useState("");

  const buildCryptolist = (coins) => {
    setData([]);
    coins.forEach(async (coin) => {
      const response = await cryptoService.getCrypto(coin.id, {
        headers: { "Access-Control": "Allow-Origin" },
      });

      const crypto = {
        id: response.data.id,
        image: response.data.image.large,
        name: response.data.name,
        current_price: response.data.market_data.current_price.eur,
        high_24h: response.data.market_data.high_24h.eur,
        low_24h: response.data.market_data.low_24h.eur,
        market_cap: response.data.market_data.market_cap.eur,
        total_volume: response.data.market_data.total_volume.eur,
      };

      setData((currentList) => [...currentList, crypto]);
    });
  };

  const handleSearchClick = () => {
    async function getData() {
      try {
        const response = await cryptoService.search(query);
        buildCryptolist(response.data.coins);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  };
  return (
    <Stack direction="row" spacing={1}>
      <TextField
        id="outlined-basic"
        label="Search crypto"
        variant="outlined"
        name="query"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" onClick={handleSearchClick}>
        Search
      </Button>
    </Stack>
  );
};

export default CryptoSearch;
