import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Exchanges from './pages/Exchanges';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<CssBaseline />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/exchanges" element={<Exchanges />} />
			</Routes>
		</>
	);
}

export default App;
