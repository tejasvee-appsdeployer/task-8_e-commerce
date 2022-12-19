import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { NavBar } from "./Navbar";

export const Layout = () => {
	return (
		<Container fluid>
			<NavBar />
			<Outlet />
		</Container>
	);
};
