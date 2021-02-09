import React from 'react';
import { Pizza } from '../types';
import { useAddToCart } from './AddToCart';
import PizzaCss from './Pizza.module.css';

interface Props {
	pizza: Pizza;
}

const PizzaItem: React.FC<Props> = ({ pizza }) => {
	const addToCart = useAddToCart();

	return (
		<li className={PizzaCss.container}>
			<h2>{pizza.name}</h2>
			<p>{pizza.description}</p>
			<p>{pizza.price}</p>
			<button onClick={() => addToCart(pizza)}>Add to Cart</button>
		</li>
	);
};

export default PizzaItem;
