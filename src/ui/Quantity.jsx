import styled from "styled-components";
import Button from "./Button";

const CartItemQuantity = styled.div`
  margin: 1rem 0;

  & span {
    font-weight: 600;
    margin: 1rem 0;
    padding: 0 1rem;
  }
`;

function Quantity() {
  return (
    <CartItemQuantity>
      <Button size="small" variation="primary">
        +
      </Button>
      <span>Quantity : 1 </span>
      <Button size="small" variation="primary">
        -
      </Button>
    </CartItemQuantity>
  );
}

export default Quantity;
