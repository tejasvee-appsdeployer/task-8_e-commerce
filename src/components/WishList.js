import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList } from "../features/wishlist";

function WishList() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const dispatcher = useDispatch();
	const data = useSelector((state) => state.wishlist.value);

	return (
		<>
			<Button variant="primary mx-2" onClick={handleShow}>
				Wishlist
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Your Wishlist</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<ol>
						{data.map((item) => {
							return (
								<li key={item.id} className="">
									<Col>
										{item.title} - ${item.price}
									</Col>

									<Col>
										<Button
											variant="danger"
											onClick={() => {
												dispatcher(
													removeFromWishList(JSON.parse(JSON.stringify(item)))
												);
											}}
										>
											Remove
										</Button>
									</Col>
								</li>
							);
						})}
					</ol>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="primary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default WishList;
