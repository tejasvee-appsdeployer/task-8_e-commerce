import React from "react";
import { Button, ButtonGroup, Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart } from "../features/cart";
import { useDispatch } from "react-redux";

function Products() {
	const navigate = useNavigate();
	const productsList = useSelector((state) => state.products.value);
	const dispatch = useDispatch();
	return (
		<Container>
			<h1>Products</h1>
			<Container className="row gap-3">
				{productsList.map((prod) => {
					return (
						<Card
							style={{ width: "18rem", textAlign: "center" }}
							id={prod.id}
							key={prod.id}
						>
							<Card.Img variant="top" src={prod.images[0]} />
							<Card.Body>
								<Card.Title>{prod.brand}</Card.Title>
								<Card.Text>{prod.title}</Card.Text>
								<Card.Link onClick={() => navigate(`/${prod.id}`)}>
									View Product
								</Card.Link>
								<hr />
								<ButtonGroup>
									<Button
										className="btn-warning"
										onClick={() => {
											dispatch(addToCart(JSON.parse(JSON.stringify(prod))));
										}}
									>
										Add to cart
									</Button>{" "}
									<Button className="btn-success">Add to wishlist</Button>
								</ButtonGroup>
							</Card.Body>
						</Card>
					);
				})}
			</Container>
		</Container>
	);
}

export default Products;
