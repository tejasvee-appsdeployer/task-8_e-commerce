import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import ProductInfo from "./pages/ProductInfo";
import { Layout } from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productsReducer from "./features/products";
import cartReducer from "./features/cart";
import wishlistReducer from "./features/wishlist";
import Cart from "./pages/Cart";

const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
		wishlist: wishlistReducer,
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
						<Route path="/cart" element={<Cart />} />
						<Route path="/:id" element={<ProductInfo />} />
						<Route path="*" element={<Products />} />
					</Route>
				</Routes>
			</Provider>
		</Container>
	);
}

export default App;
