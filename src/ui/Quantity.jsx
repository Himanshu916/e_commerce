import styled from "styled-components";
import Button from "./Button";
import { increaseQuantityInCartItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";
// import { increaseQuantityFromCart } from "../features/cart/cartSlice";
// import { useQuantity } from "../contexts/QuantityContext";

// import { useDispatch } from "react-redux";
// import { increaseQuantityOfItemInCart } from "../features/cart/cartSlice";

const CartItemQuantity = styled.div`
  margin: 1rem 0;

  & span {
    font-weight: 600;
    margin: 1rem 0;
    padding: 0 1rem;
  }
`;

function Quantity({ quantity, increaseHandler, decreaseHandler, itemId }) {
  const dispatch = useDispatch();
  return (
    <CartItemQuantity>
      <Button
        disabled={quantity === 10}
        onClick={() => {
          increaseHandler();
          dispatch(increaseQuantityInCartItem(itemId));
        }}
        size="xsmall"
        variation="primary"
      >
        +
      </Button>
      <span>Quantity :{quantity} </span>
      <Button
        disabled={quantity === 1}
        onClick={decreaseHandler}
        size="xsmall"
        variation="primary"
      >
        -
      </Button>
    </CartItemQuantity>
  );
}

export default Quantity;
