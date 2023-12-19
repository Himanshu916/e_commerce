import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import { Tag } from "./Tag";

const CouponBox = styled.div`
  margin: 1rem;
  margin-top: 2.4rem;
  & h3 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 800px) {
    max-width: 90rem;
    margin: 1.5rem auto;
    margin-top: 3rem;
    & h3 {
      font-size: 2.4rem;
      font-weight: 500;
      margin-bottom: 0.8rem;
    }
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
    background-color: var(--color-brand-200);
    color: var(--color-brand-800);
    font-size: 1.2rem;
    margin: 0;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    font-weight: 600;
    border: 2px dashed green;
  }
`;

function CouponApply() {
  return (
    <CouponBox>
      <Heading as="h3">Coupons</Heading>
      <Coupons>
        <p>Best Coupon For You</p>
        <p>All Coupons</p>
      </Coupons>

      <CouponDetail>
        <Heading as="h4">Extra Rs 47 Off</Heading>
        {/* <p>15% off</p> */}
        <Tag type="discount">15% off</Tag>
        <Coupon>
          <p>Coupon Name</p>
          <Button
            style={{
              backgroundColor: "var(--color-yellow-700)",
              color: "var(--color-yellow-100)",
            }}
            size="small"
            variation="primary"
          >
            Apply Coupon
          </Button>
        </Coupon>
      </CouponDetail>
    </CouponBox>
  );
}

export default CouponApply;
