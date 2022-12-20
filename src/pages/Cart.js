import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../features/cart";

const Cart = () => {
	const data = useSelector((state) => state.cart.value);
	const dispatch = useDispatch();
	const price = data.reduce(
		(accumulator, currentValue) => accumulator + currentValue.price,
		0
	);
	return (
		<Container>
			<ul>
				{data.map((item) => {
					return (
						<li className="m-4 p-1 container align-items-center" key={item.id}>
							<Row>
								<Col>{item.title}</Col>
								<Col>$ {item.price}</Col>
								<Col>
									<Button onClick={() => dispatch(removeFromCart(item))}>
										Remove
									</Button>
								</Col>
							</Row>
						</li>
					);
				})}
			</ul>
			<Container fluid>
				Total Items in cart: <b> {data.length}</b>
				<br />
				Total Amount: <b>${price}</b>
			</Container>
		</Container>
	);
};

export default Cart;
