import styled from "styled-components";

const PriceDetailsBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;

  & h3 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
`;

const PriceDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 1.2rem;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-right: 1rem;
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
`;
function Price() {
  return (
    <PriceDetailsBox>
      <h3>
        Price Details <span>(1 Item)</span>
      </h3>
      <PriceDetailsList>
        <ListItem>
          <span>Total MRP</span> <span>Rs 311</span>{" "}
        </ListItem>
        <ListItem>
          <span>Discount on MRP</span> <span>Rs 311</span>{" "}
        </ListItem>
        <ListItem>
          <span>Platform Fee</span> <span>Rs 311</span>{" "}
        </ListItem>
        <ListItem>
          <span>Shipping Fee</span> <span>Rs 311</span>{" "}
        </ListItem>
        <ListItem>
          <span>Total MRP</span> <span>Rs 311</span>{" "}
        </ListItem>
      </PriceDetailsList>
      <TotalAmountBox>
        <h3>Total Amount</h3>
        <p>Rs 311</p>
      </TotalAmountBox>
    </PriceDetailsBox>
  );
}

export default Price;
