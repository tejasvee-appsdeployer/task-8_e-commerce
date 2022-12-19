import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Navbar</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Item>
						<Link className="nav-link" to="/about">
							About
						</Link>
					</Nav.Item>
					<Nav.Item>
						<Link className="nav-link" to="/home">
							Home
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

const Home = () => {
	return <div>Home Page</div>;
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
					<Route path="/home" element={<Home />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
