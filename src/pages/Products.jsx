import styled from "styled-components";
import ProductsCard from "../features/products/ProductsCard";
import SideBar from "../ui/SideBar";

const ProductsLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;

  @media (min-width: 800px) {
    grid-template-columns: 26rem 1fr;
  }
`;

function Products() {
  return (
    <>
      <ProductsLayout>
        <SideBar />

        <ProductsCard />
      </ProductsLayout>
    </>
  );
}

export default Products;
