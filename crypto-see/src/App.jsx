import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			<CssBaseline />
			<Navbar
				component={
					<Routes>
						<Route path="/" element={<Home />} />
					</Routes>
				}
			/>
		</>
	);
}

export default App;
