import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <section>
      <h1>Product detail for: {params.productId}</h1>
    </section>
  );
};

export default ProductDetail;
