import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./pages/Products";

const NavBar = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="/products">Redux Store</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Item>
						<Link className="nav-link" to="/products">
							Products
						</Link>
					</Nav.Item>
					<Nav.Item>
						<Link className="nav-link" to="/about">
							About
						</Link>
					</Nav.Item>
				</Nav>
			</Container>
		</Navbar>
	);
};

const Layout = () => {
	return (
		<div>
			<NavBar />
			<Outlet />
		</div>
	);
};

const About = () => {
	return <div>About Page</div>;
};

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/about" element={<About />} />
					<Route path="/products" element={<Products />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
