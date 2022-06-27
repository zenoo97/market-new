import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();

  // useParams를 사용하면 /products/:id에 id가 들어가게 됌
  return <h1>상품 상세 페이지 {id} 상품</h1>;
}
export default ProductPage;
