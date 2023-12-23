import styled from "styled-components";
import ProductCard from "../features/products/ProductCard";
import Header from "./Header";

const ProductsLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
`;
function Product() {
  return (
    <>
      <ProductsLayout>
        <Header />

        <ProductCard />
      </ProductsLayout>
      ;
    </>
  );
}

export default Product;
