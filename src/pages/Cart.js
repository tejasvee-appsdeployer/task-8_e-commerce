import React from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cart";

const Cart = () => {
	const data = useSelector((state) => state.cart.value);
	const dispatch = useDispatch();
	return (
		<Container>
			<ul>
				{data.map((item) => {
					return (
						<li
							className="m-4 p-2 container border d-flex justify-content-between align-items-center"
							key={item.id}
						>
							{item.title} <span>$ {item.price}</span>
							<Button onClick={() => dispatch(removeFromCart(item))}>
								Remove
							</Button>
						</li>
					);
				})}
			</ul>
		</Container>
	);
};

export default Cart;
