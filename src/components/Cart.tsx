import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { AppStateContext } from './AppState';
import CartCss from './Cart.module.css';

interface Props {}

interface State {
	isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			isOpen: false,
		};
	}

	handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();

		this.setState(prevState => ({
			isOpen: !prevState.isOpen,
		}));
	};

	render() {
		return (
			<AppStateContext.Consumer>
				{({ cart }) => {
					const itemsCount = cart.items.reduce(
						(sum, item) => sum + item.quantity,
						0
					);
					return (
						<div className={CartCss.cartContainer}>
							<button
								type='button'
								className={CartCss.button}
								onClick={this.handleClick}
							>
								<FiShoppingCart />
								<span>{itemsCount} pizza(s)</span>
							</button>
							<div
								className={CartCss.cartDropDown}
								style={{
									display: this.state.isOpen
										? 'block'
										: 'none',
								}}
							>
								<ul>
									{cart.items.map(item => (
										<li key={item.id}>
											{item.name} &times; {item.quantity}
										</li>
									))}
								</ul>
							</div>
						</div>
					);
				}}
			</AppStateContext.Consumer>
		);
	}
}

export default Cart;
