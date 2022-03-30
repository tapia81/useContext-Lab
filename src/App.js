import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
import { YellowPage } from './components/YellowPage';
import { GreenPage } from './components/GreenPage';
export const ColorContext = createContext('dark');
function App() {
	return (
		<ColorContext.Provider value={'light'}>
			<BrowserRouter>
				<Routes>
					<Route path="/yellowpage" element={<YellowPage />} />
					<Route path="/greenpage" element={<GreenPage />} />
				</Routes>
			</BrowserRouter>
		</ColorContext.Provider>
	);
}

export default App;
//Will need to use createContext first to create context
//Will need to export ColorContext
//Since ColorContext will be global state context will need to wrap everything
//All will have access to global state
//ColorContext is variable name
//Provider is the wrapper or .Provider
//Value default is a string dark, we just changed to a string light
