import React from 'react';
import { useState,useEffect } from 'react';
import {FetchMealByFirstLetter} from '../../services/mealtService';
import './index.css';
import MealPreviw from '../mealPreview';

const MealPreviwGrid = () => {
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		FetchMealByFirstLetter().then(meals => setMeals(meals));
	}, []);
	

	return (
		<div className='meal-grid'>
		{meals.map((meal) => (
			<MealPreviw
				meal = {meal}
			/>
		))}
		</div>
	);
};

export default MealPreviwGrid;

			