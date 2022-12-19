import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Products() {
	const [data, setData] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		axios
			.get("https://dummyjson.com/products/")
			.then((response) => setData(response.data.products));
	}, []);
	return (
		<Container>
			<h1>Products</h1>
			<Container className="row gap-3">
				{data.map((prod, index) => {
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
