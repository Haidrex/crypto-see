import './App.css';
import { Routes, Route } from 'react-router-dom';
import Coins from './pages/Coins';
import Exchanges from './pages/Exchanges';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Coin from './pages/Coin';

function App() {
	return (
		<>
			<CssBaseline />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/coins" element={<Coins />} />
				<Route path="/exchanges" element={<Exchanges />} />
				<Route path="/coins/:id" element={<Coin />} />
			</Routes>
		</>
	);
}

export default App;
