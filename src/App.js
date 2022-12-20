import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import ProductInfo from "./pages/ProductInfo";
import { Layout } from "./components/Layout";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productsReducer from "./features/products";

const store = configureStore({
	reducer: {
		products: productsReducer,
	},
});

function App() {
	return (
		<Container fluid className="App">
			<Provider store={store}>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route path="/" element={<Products />} />
						<Route path="/about" element={<About />} />
						<Route path="/:id" element={<ProductInfo />} />
						<Route path="*" element={<Products />} />
					</Route>
				</Routes>
			</Provider>
		</Container>
	);
}

export default App;
