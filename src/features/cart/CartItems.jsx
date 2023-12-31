/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Quantity from "../../ui/Quantity";
import CouponApply from "../../ui/CouponApply";
import Price from "../../ui/PriceDetailBox";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import { Tag } from "../../ui/Tag";
import EmptyDiv from "../../ui/EmptyDiv";
import { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import Confirm from "../../ui/Confirm";
import Modal from "../../ui/Modal";
import { useCart } from "./useCart";
import NoItem from "../../ui/NoItem";

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.5rem;
  margin: 1rem;
  border-radius: var(--border-radius-md);
  background-color: var(--color-grey-50);
  overflow: hidden;
  padding-right: 1rem;
  & img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    border-radius: var(--border-radius-md);
  }
  & .item-content {
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
  & .item-content button {
    align-self: flex-start;
  }
  /* & .item-content button svg {
    font-size: 1.6rem;
    color: #fff;
  } */

  @media (min-width: 800px) {
    max-width: 90rem;
    margin: 2rem auto;

    & .item-content {
      padding-top: 1.8rem;
    }
  }
`;

const SmallText = styled.p`
  font-size: 1.2rem;
  color: var(--color-yellow-700);
`;

const PlaceOrder = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (min-width: 800px) {
    max-width: 90rem;
    margin: 2.4rem auto;
  }
`;

function CartItemCard({ item }) {
  const [quantity, setQuantity] = useState(() => {
    const cartBackend = JSON.parse(localStorage.getItem("cart"));

    const returningItem = cartBackend?.find(
      (cartBackendItem) => cartBackendItem.id === item.id
    );

    console.log(returningItem, "working");
    if (item.quantity && cartBackend) return item.quantity;
    return 1;
  });

  function increaseHandler() {
    setQuantity((state) => state + 1);
  }

  function decreaseHandler() {
    setQuantity((state) => state - 1);
  }

  const price = Math.round(
    item.mrp - (item.discountPercentage * item.mrp) / 100
  );
  return (
    <StyledCard>
      <img src={item.image} alt="" />
      <EmptyDiv className="item-content">
        <Row style={{ gap: "1rem" }}>
          <EmptyDiv>
            <Heading style={{ lineHeight: "1" }} as="h2">
              {item.productName}
            </Heading>

            {/* <SmallText>({item.ingredients.join("/")})</SmallText> */}
            <Row type="horizontal">
              <Heading style={{ marginTop: "1rem" }} as="h4">
                <Tag type="discount">{-item.discountPercentage}%</Tag>
                Rs {price}
                <Tag type="mrp">MRP : {item.mrp}</Tag>
              </Heading>
            </Row>
          </EmptyDiv>
          <Quantity
            quantity={quantity}
            itemId={item.id}
            increaseHandler={increaseHandler}
            decreaseHandler={decreaseHandler}
          />
        </Row>

        <Modal>
          <Modal.Button category="delete" opens="delete">
            <HiMiniXMark />
          </Modal.Button>
          <Modal.Window name="delete">
            <Confirm id={item.id} />
          </Modal.Window>
        </Modal>
      </EmptyDiv>
    </StyledCard>
  );
}

function CartItems() {
  const state = useSelector((store) => store.cart);
  const cartItems = state.cart;
  const { cart, isGettingCart } = useCart();
  console.log(cart, isGettingCart, "here it is");
  useEffect(
    function () {
      console.log(cart, "ab kya hua");
      // if (isGettingCart) return;
      if (!isGettingCart)
        localStorage.setItem(
          "cart",
          JSON.stringify(cart.length === 0 ? [] : cart[0].cart)
        );
    },
    [cart, isGettingCart]
  );
  if (isGettingCart || !cart) return <p>Loading Cart</p>;
  const length = cartItems.length;

  if (!length) return <NoItem where="Cart" />;

  const totalMRP = cartItems.reduce((acc, item) => acc + item.mrp, 0);
  // let totalMRP = 0;
  let totalPrice = 0;
  let quantity = 1;
  return (
    <>
      {cartItems.map((item) => {
        totalPrice += item.mrp - (item.discountPercentage * item.mrp) / 100;
        quantity = item.quantity;
        // const totalMRPPe = cartItems.reduce((acc, item) => acc + item.mrp, 0);

        return (
          <>
            <CartItemCard key={item.id} item={item} />
          </>
        );
      })}
      <CouponApply />
      <Price
        totalMRP={totalMRP * quantity}
        // totalPrice={Math.round(totalPrice) * quantity}
        totalPrice={totalPrice * quantity}
        length={length}
      />
      <PlaceOrder>
        <Button className="placeOrder" size="medium" variation="primary">
          Place Order
        </Button>
      </PlaceOrder>
    </>
  );
}

export default CartItems;
