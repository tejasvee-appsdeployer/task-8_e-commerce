import React from "react";
import { Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Products() {
	const navigate = useNavigate();
	const productsList = useSelector((state) => state.products.value);
	return (
		<Container>
			<h1>Products</h1>
			<Container className="row gap-3">
				{productsList.map((prod, index) => {
					return (
						<Card
							style={{ width: "18rem" }}
							id={prod.id}
							key={prod.id}
							onClick={() => {
								navigate(`/${prod.id}`);
							}}
						>
							<Card.Img variant="top" src={prod.images[0]} />
							<Card.Body>
								<Card.Title>{prod.brand}</Card.Title>
								<Card.Text>{prod.title}</Card.Text>
							</Card.Body>
						</Card>
					);
				})}
			</Container>
		</Container>
	);
}

export default Products;
