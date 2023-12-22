import styled from "styled-components";
import { Tag } from "./Tag";

const PriceDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
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

const PriceDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 1.2rem;
  padding-bottom: 2.4rem;
  border-bottom: 0.5px solid var(--color-grey-300);
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
  @media (min-width: 800px) {
    font-size: 1.6rem;
  }
`;

const TotalAmountBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
  margin-top: 2rem;
  & h3 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  & p {
    font-size: 1.4rem;
    font-weight: 600;
  }

  @media (min-width: 800px) {
    & h3 {
      font-size: 1.6rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }

    & padding-bottom {
      font-size: 1.6rem;
    }
  }
`;
function Price({ totalPrice, totalMRP, length }) {
  const totalDiscount = totalMRP - totalPrice;
  const totalAmount = totalPrice + 10 + 15;
  return (
    <PriceDetailsBox>
      <h3>
        Price Details <span>({length} Item)</span>
      </h3>
      <PriceDetailsList>
        <ListItem>
          <span>Total MRP</span> <span>Rs {totalMRP}</span>{" "}
        </ListItem>
        <ListItem>
          <span>Discount on MRP</span>
          <Tag type="discount">
            {" "}
            <span>Rs {-totalDiscount}</span>
          </Tag>{" "}
        </ListItem>
        <ListItem>
          <span>Amount after discount</span>

          <span>Rs {totalPrice}</span>
        </ListItem>
        <ListItem>
          <span>Platform Fee</span> <span>Rs 10</span>{" "}
        </ListItem>
        <ListItem>
          <span>Shipping Fee</span> <span>Rs 15</span>{" "}
        </ListItem>
      </PriceDetailsList>

      <TotalAmountBox>
        <h3>Total Amount</h3>
        <p>Rs {totalAmount}</p>
      </TotalAmountBox>
    </PriceDetailsBox>
  );
}

export default Price;
