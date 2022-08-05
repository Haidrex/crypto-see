import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Container, Grid} from '@mui/material';
import DataCard from '../components/DataCard';

const Home = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/global'
        );
        console.log(response.data.data);
        setData(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [])

  return (
    <Container sx={{
      padding: 5,
    }}>
      <Grid container spacing={{xs: 2, md: 3}} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4} >
          <DataCard label="Cryptocurrencies" data={data.active_cryptocurrencies}/>
        </Grid>
        <Grid item xs={2} sm={4} md={4} >

        <DataCard label="Markets" data={data.markets} />
        </Grid>
        <Grid item xs={2} sm={4} md={4} >

        <DataCard label="Market cap change(24h)" data={data.market_cap_change_percentage_24h_usd} />
        </Grid>
        <Grid item xs={2} sm={4} md={4} >
          <DataCard label="Upcoming ICOs" data={data.upcoming_icos}/>
        </Grid>
        <Grid item xs={2} sm={4} md={4} >

        <DataCard label="Ongoing ICOs" data={data.ongoing_icos} />
        </Grid>

        <Grid item xs={2} sm={4} md={4} >

        <DataCard label="Ended ICOs" data={data.ended_icos} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home