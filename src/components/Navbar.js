import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/">Redux Store</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Item>
						<Link className="nav-link" to="/">
							Products
						</Link>
					</Nav.Item>
					<Nav.Item>
						<Link className="nav-link" to="/about">
							About
						</Link>
					</Nav.Item>
					<Nav.Item>
						<Link className="nav-link" to="/cart">
							Cart
						</Link>
					</Nav.Item>
				</Nav>
			</Container>
			<Button>Wishlist</Button>
		</Navbar>
	);
};
