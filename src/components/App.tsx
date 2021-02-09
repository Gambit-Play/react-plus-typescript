import React from 'react';
import pizzas from '../data/pizza.json';
import PizzaItem from './Pizza';
import AppCss from './App.module.css';
import PizzaSVG from '../svg/pizza.svg';
import Cart from './Cart';
import AppStateProvider from './AppState';
import SpecialOffer from './SpecialOffer';

const App = () => {
	const specialOfferPizza = pizzas.find(pizza => pizza.specialOffer);

	return (
		<AppStateProvider>
			<div className={AppCss.container}>
				<div className={AppCss.header}>
					<PizzaSVG width={120} height={120} />
					<div className={AppCss.siteTitle}>Delicious Pizza's</div>
					<Cart />
				</div>
				<ul>
					{specialOfferPizza && (
						<SpecialOffer
							pizza={specialOfferPizza}
							addToCart={() => {}}
						/>
					)}
					{pizzas.map(pizza => (
						<PizzaItem
							key={pizza.id}
							pizza={pizza}
							addToCart={() => {}}
						/>
					))}
				</ul>
			</div>
		</AppStateProvider>
	);
};

export default App;
