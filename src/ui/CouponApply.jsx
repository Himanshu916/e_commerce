import styled from "styled-components";
import Button from "./Button";

const CouponBox = styled.div`
  margin: 1rem;
  & h3 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
`;

const Coupons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
  font-weight: 600;
  & p {
    font-size: 1.2rem;
  }

  & p:last-child {
    color: red;
  }
`;

const CouponDetail = styled.div`
  padding: 1rem;
  border: 1px solid green;
  border-radius: 0.5rem;
  margin-top: 1rem;
  /* border-radius: --border-radius-sm; */
  & > p {
    font-size: 1rem;
  }
  & h4 {
    font-size: 1.2rem;
  }
`;

const Coupon = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  & p {
    background-color: lightgreen;
    color: green;
    font-size: 1.2rem;
    margin: 0;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    font-weight: 600;
    border: 1px dashed green;
  }
`;

function CouponApply() {
  return (
    <CouponBox>
      <h3>Coupons</h3>
      <Coupons>
        <p>Best Coupon For You</p>
        <p>All Coupons</p>
      </Coupons>

      <CouponDetail>
        <h4>Extra Rs 47 Off</h4>
        <p>15% off</p>
        <Coupon>
          <p>Coupon Name</p>
          <Button size="small" variation="primary">
            Apply Coupon
          </Button>
        </Coupon>
      </CouponDetail>
    </CouponBox>
  );
}

export default CouponApply;
