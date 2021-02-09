import React from 'react';
import { Pizza } from '../types';
import { WithAdToCartProps } from './AddToCart';
import SpecialOfferCss from './SpecialOffer.module.css';

interface Props {
	pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza }) => {
	return (
		<div className={SpecialOfferCss.container}>
			<h2>{pizza.name}</h2>
			<p>{pizza.description}</p>
			<p>{pizza.price}</p>
			<WithAdToCartProps>
				{({ addToCart }) => (
					<button
						onClick={() =>
							addToCart({
								id: pizza.id,
								name: pizza.name,
								price: pizza.price,
							})
						}
					>
						Add to Cart
					</button>
				)}
			</WithAdToCartProps>
		</div>
	);
};

export default SpecialOffer;
