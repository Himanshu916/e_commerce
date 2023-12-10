import { faker } from "@faker-js/faker";

import styled from "styled-components";
import Card from "../ui/Card";

const products = Array.from({ length: 20 }, () => {
  return {
    image: "",
    soldOut: false,
    productName: faker.commerce.productName(),
    productAdjective: faker.commerce.productAdjective(),
    price: faker.commerce.price(),
    discount: "",
  };
});
const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.2rem;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 3rem;
    row-gap: 1.5rem;
  }
`;

function Products() {
  return (
    <Cards>
      {products.map((item) => (
        <Card key={item.productName} product={item} />
      ))}
    </Cards>
  );
}

export default Products;
