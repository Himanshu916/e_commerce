/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Button from "./Button";
import { increaseQuantityInCartItem } from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateCart } from "../features/cart/useUpdateCart";
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
  const cartItems = useSelector((store) => store.cart.cart);
  const { updateCart } = useUpdateCart();
  return (
    <CartItemQuantity>
      <Button
        disabled={quantity === 10}
        onClick={() => {
          increaseHandler();
          dispatch(increaseQuantityInCartItem(itemId));
          const updatedCart = cartItems.map((item) => {
            if (item.id === itemId)
              return { ...item, quantity: item.quantity + 1 };
            return item;
          });
          updateCart(updatedCart);
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
