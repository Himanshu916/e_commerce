import styled from "styled-components";
import Card from "../ui/Card";

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
const products = [];
function WishList() {
  return (
    <Cards>
      {products.map((item) => (
        <Card key={item.productName} product={item} />
      ))}
    </Cards>
  );
}

export default WishList;
