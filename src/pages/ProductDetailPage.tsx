import { useParams } from "react-router";

const ProductDetailPage = () => {
  const { productId } = useParams();

  return <div>ProductDetailPage</div>;
};

export default ProductDetailPage;
