import { useLocation } from "react-router-dom";

const ProductInfo = () => {
	const id = useLocation();
	return <div>Prods page {id.pathname}</div>;
};
export default ProductInfo;
