import styled from "styled-components";
import Card from "../ui/Card";
import { useSelector } from "react-redux";
import Row from "../ui/Row";
import Heading from "../ui/Heading";

const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.2rem;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 3rem;
    row-gap: 1.5rem;
  }
`;

function WishList() {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  console.log(wishlist);
  if (!wishlist.length) return <p>Add Items in wishlist</p>;

  return (
    <Row type="consistentPadding">
      <Heading as="h3">Liked Items</Heading>
      <Cards>
        {wishlist.map((item) => (
          <Card key={item.productName} product={item} from="wishlist" />
        ))}
      </Cards>
    </Row>
  );
}

export default WishList;
