
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import SearchBox from './components/searchBox';
import Home from './pages/home';
import MealDetail from './components/mealDetail/mealDetail';


function App() {
	
	return (
		<div className='App'>
			<Navbar>
				<SearchBox />
			</Navbar>
        <Home />
				<Routes>
        	<Route path="/MealDetail/" element={<MealDetail />} />
      	</Routes>
		</div>
	);
}

export default App;
