import styled from "styled-components";
import Button from "./Button";
import Quantity from "./Quantity";
import Price from "./PriceDetailBox";
import CouponApply from "./CouponApply";

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  margin: 1rem;

  & img {
    width: 100%;
  }

  & h3 {
    font-size: 1.4rem;
    font-weight: 600;
  }
  & .cartItem p {
    font-size: 1.2rem;
  }
  & .cartItem p span {
    font-weight: 600;
  }
`;

function HorizontalProductCard() {
  return (
    <>
      <StyledCard>
        <img
          src="https://rukminim2.flixcart.com/image/832/832/kpwybgw0/t-shirt/z/7/l/s-round-5-05-s-inktees-original-imag4f6qvhhbzubx.jpeg?q=70"
          alt=""
        />

        <div className="cartItem">
          <h3>Brand Name</h3>
          <p>Product Adjective</p>
          <p>
            {" "}
            <span>Rs 311</span> <span>Discount% off</span>{" "}
          </p>
          <Quantity />
        </div>
      </StyledCard>
      <CouponApply />
      <Price />
      <Button size="large" variation="primary">
        Place Order
      </Button>
    </>
  );
}

export default HorizontalProductCard;
