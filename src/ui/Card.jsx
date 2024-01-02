/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/display-name */
// import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import {
  HiHeart,
  HiMiniShoppingCart,
  HiMiniXMark,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToWishlist,
  deleteItemFromWishList,
} from "../features/wishlist/wishlistSlice";
import { useRef } from "react";
import { addItemToCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { Tag } from "./Tag";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--color-grey-50);
  gap: 0.75rem;
  cursor: pointer;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  position: relative;
  box-shadow: var(--shadow-sm);

  & img {
    max-width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    /* height: 60%; */
    overflow: hidden;
  }

  & .product--about {
    padding: 0rem 1.5rem;
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

  @media (min-width: 800px) {
    padding: 1rem;
    & {
      background-color: transparent;
    }
    &:hover {
      background-color: var(--color-grey-100);
      box-shadow: var(--shadow-md);
    }

    & img {
      border-radius: var(--border-radius-sm);
    }
  }
`;

function Card({ product, from = "false" }) {
  const dispatch = useDispatch();
  const myRef = useRef();
  const ref2 = useRef();
  const navigate = useNavigate();
  const wishlistItems = useSelector((store) => store.wishlist.wishlist);

  const isItemPresentInWishList = wishlistItems.find(
    (item) => item?.id === product?.id
  );
  const cartItems = useSelector((store) => store.cart.cart);

  const isItemPresentInCart = cartItems.find(
    (item) => item?.id === product?.id
  );

  function navigateHandler(id) {
    navigate(`/products/${id}`);
  }
  return (
    <StyledCard
      onClick={(e) => {
        if (from === "wishlist") {
          if (!ref2.current.contains(e.target)) navigateHandler(product.id);
        } else {
          if (!myRef.current.contains(e.target)) navigateHandler(product.id);
        }
      }}
    >
      <img src={product.image} alt="" />
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
          </div>
          <div ref={myRef}>
            {from === "wishlist" ? (
              <Button
                disabled={isItemPresentInCart}
                size="textIcon"
                variation="transparent"
                onClick={() => dispatch(addItemToCart(product))}
              >
                {isItemPresentInCart ? (
                  <HiMiniShoppingCart />
                ) : (
                  <HiOutlineShoppingCart />
                )}
              </Button>
            ) : (
              <Button
                onClick={() => {
                  isItemPresentInWishList
                    ? dispatch(deleteItemFromWishList(product.id))
                    : dispatch(addItemToWishlist(product));
                }}
                size="textIcon"
                variation="transparent"
              >
                {isItemPresentInWishList ? <HiHeart /> : <HiOutlineHeart />}
              </Button>
            )}
          </div>
        </div>
        <h3>
          <span>Rs</span> {product.mrp}{" "}
          <Tag type="discount">
            {" "}
            <span>(-{product.discountPercentage}%)</span>{" "}
          </Tag>
        </h3>
        <p style={{ marginTop: ".5rem" }}>
          <Tag type="rating">
            <span>Rating : </span> <span>{product.rating}</span>
          </Tag>{" "}
        </p>
      </div>
      {from === "wishlist" && (
        <Button
          ref={ref2}
          onClick={() => dispatch(deleteItemFromWishList(product.id))}
          style={{
            position: "absolute",
            top: ".3rem",
            right: ".3rem",
            color: "#fff",
          }}
          size="iconText"
          variation="transparent"
        >
          <HiMiniXMark />
        </Button>
      )}
    </StyledCard>
  );
}

const PromotedLabel = styled.label`
  position: absolute;
  background-color: var(--color-silver-700);
  color: var(--color-silver-100);
  font-weight: 600;
  font-size: 1rem;
  padding: 0.2rem;
  z-index: 800;
`;

export const withPromotedLabel = (Card) => {
  return (props) => {
    return (
      <div>
        <PromotedLabel>Promoted</PromotedLabel>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
