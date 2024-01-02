import styled from "styled-components";
import Cards from "./Cards";
import Heading from "./Heading";
import Row from "./Row";

const StyledShimmerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 250px;
  height: 300px;
  background-color: var(--color-grey-300);
  gap: 0.75rem;
  cursor: pointer;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  position: relative;
  box-shadow: var(--shadow-sm);
`;
function Shimmer() {
  return (
    <Row type="consistentPadding">
      <Heading as="h3">Products</Heading>

      <Cards>
        <StyledShimmerCard />
        <StyledShimmerCard />
        <StyledShimmerCard />
        <StyledShimmerCard />
        <StyledShimmerCard />
        <StyledShimmerCard />
        <StyledShimmerCard />
        <StyledShimmerCard />
        <StyledShimmerCard />
        <StyledShimmerCard />
        <StyledShimmerCard />
      </Cards>
    </Row>
  );
}

export default Shimmer;
