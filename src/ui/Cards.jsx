import styled from "styled-components";

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.4rem;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 3rem;
    row-gap: 1.5rem;
  }
`;

export default Cards;
