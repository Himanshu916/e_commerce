import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WishListButton = styled.div`
  background-color: none;
  font-size: 2rem;

  font-weight: 900;
  cursor: pointer;
  border: none;
`;
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: var(--color-grey-50);
  /* justify-content: space-between; */
  align-items: flex-start;
  cursor: pointer;

  & img {
    width: 100%;
    /* height: 60%; */
  }

  & .product--about {
    padding: 0.5rem 1.5rem;
    width: 100%;
  }
  & div h1 {
    font-size: 1.6rem;
  }
  & div p {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  & div h3 {
    font-size: 1.4rem;
  }
`;

function Card({ product }) {
  return (
    <StyledCard>
      <Link to="1234">
        <img
          src="https://rukminim2.flixcart.com/image/832/832/kpwybgw0/t-shirt/z/7/l/s-round-5-05-s-inktees-original-imag4f6qvhhbzubx.jpeg?q=70"
          alt=""
        />
        <div className="product--about">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              <h1>{product.productName}</h1>
              <p>{product.productAdjective}</p>
            </div>
            <div>
              <WishListButton>
                <CiHeart />
              </WishListButton>
            </div>
          </div>

          <h3>
            <span>Rs</span> {product.price}{" "}
          </h3>
        </div>
      </Link>
    </StyledCard>
  );
}

export default Card;
