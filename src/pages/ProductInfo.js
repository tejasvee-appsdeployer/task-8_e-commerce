import { Carousel, Col, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
	const { id } = useParams();
	const data = useSelector((state) => state.products.value[id - 1]);
	const { images } = data;
	console.log(data);
	return (
		<Container className="my-5">
			<Container className="row">
				<Col>
					<Carousel variant="dark">
						{images.map((image, index) => {
							return (
								<Carousel.Item key={index}>
									<img
										className="d-block w-100"
										src={image}
										alt="First slide"
									/>
								</Carousel.Item>
							);
						})}
					</Carousel>
				</Col>
				<Col>
					<Container className="d-flex align-items-center justify-content-between">
						<h1>{data.title}</h1>
						<h5>$ {data.price}</h5>
					</Container>
					<Container>
						<p>By {data.brand}</p>
						<p>{data.description}</p>
						<p>
							In Stock: <b>{data.stock}</b>
						</p>
					</Container>
				</Col>
			</Container>
		</Container>
	);
};

export default ProductInfo;
