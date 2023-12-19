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

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  gap: 0.75rem;
  cursor: pointer;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  position: relative;
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
`;

function Card({ product, from = "false" }) {
  const dispatch = useDispatch();
  const myRef = useRef();
  const navigate = useNavigate();
  const wishlistItems = useSelector((store) => store.wishlist.wishlist);
  console.log(wishlistItems);
  const isItemPresentInWishList = wishlistItems.find(
    (item) => item?.id === product?.id
  );
  const cartItems = useSelector((store) => store.cart.cart);
  console.log(wishlistItems);
  const isItemPresentInCart = cartItems.find(
    (item) => item?.id === product?.id
  );

  function navigateHandler(id) {
    navigate(`/products/${id}`);
  }
  return (
    <StyledCard
      onClick={(e) => {
        // console.log(!from === "wishlist", myRef.current.contains(e.target));
        // if (from === "wishlist")
        if (!myRef.current.contains(e.target)) navigateHandler(product.id);
      }}
    >
      {/* <Link to="1234"> */}
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
            {/* <p>{product.productAdjective}</p> */}
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
                disabled={isItemPresentInWishList}
                onClick={() => dispatch(addItemToWishlist(product))}
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
        </h3>
      </div>
      {from === "wishlist" && (
        <Button
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

export default Card;
