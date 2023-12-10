import styled from "styled-components";
import Button from "./Button";

const Product = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 95%;
  height: 100vh;
  margin: 0 auto;
  gap: 2rem;
  padding: 2rem;

  & img {
    width: 100%;
  }
  @media (min-width: 800px) {
    flex-direction: row;
    max-width: 80%;
    & img {
      width: 40%;
    }
  }
`;

function ProductCard() {
  return (
    <Product>
      <img
        src="https://rukminim2.flixcart.com/image/832/832/kpwybgw0/t-shirt/z/7/l/s-round-5-05-s-inktees-original-imag4f6qvhhbzubx.jpeg?q=70"
        alt=""
      />
      <div>
        <div>
          <h1>Product Name</h1>
          <p>Reviews</p>
          <p>Price</p>
        </div>
        <div>
          <p>
            {" "}
            <strong>Brand</strong> : <span>Name</span>
          </p>

          <p>
            {" "}
            <strong>Availability</strong> : <span>Name</span>
          </p>
          <p>
            {" "}
            <strong>Description</strong> : <span>Name</span>
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button style={{ flex: 1 }} size="large" variation="secondary">
          WishList
        </Button>
        <Button style={{ flex: 1 }} size="medium" variation="primary">
          Add To Cart
        </Button>
      </div>
    </Product>
  );
}

export default ProductCard;
