import styled from "styled-components";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../cart/cartSlice";
import { useProduct } from "./useProduct";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import List from "../../ui/List";
import { Tag } from "../../ui/Tag";
import {
  addItemToWishlist,
  deleteItemFromWishList,
} from "../wishlist/wishlistSlice";
import { useAddCart } from "../cart/useAddCart";
import { useUpdateCart } from "../cart/useUpdateCart";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { useState } from "react";

const Product = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  /* padding: 1.5rem; */
  background-color: var(--color-grey-50);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  padding-bottom: 1rem;
  & img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
  }
  @media (min-width: 800px) {
    flex-direction: row;
    padding-bottom: 0;

    & img {
      width: 40%;
    }
  }
`;

const ProductsDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 1.5rem;
  gap: 1rem;

  & .productDetails-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-bottom: 0.5px solid var(--color-grey-200);
    padding-bottom: 1rem;
  }

  @media (min-width: 800px) {
    & .productDetails-content h2 {
      padding-top: 2rem;
    }
  }
`;

function ProductCard() {
  const dispatch = useDispatch();
  const { product, isLoading } = useProduct();
  const { addToCart } = useAddCart();
  const { updateCart } = useUpdateCart();
  const [showMore, setShowMore] = useState(false);

  const cartItems = useSelector((store) => store.cart.cart);
  const wishlistItems = useSelector((store) => store.wishlist.wishlist);

  if (isLoading) return <p>Loading...</p>;
  const isItemPresentInCart = cartItems.find(
    (item) => item?.id === product?.id
  );

  const isItemPresentInWishlist = wishlistItems.find(
    (item) => item?.id === product?.id
  );

  function showHandler() {
    setShowMore(!showMore);
  }

  return (
    <Row type="consistentPadding">
      <Heading as="h3">Product</Heading>

      <Product>
        <img src={product.image} alt="" />
        <ProductsDetails>
          <div className="productDetails-content">
            <Heading as="h2"> {product.productName}</Heading>
            {/* <Heading as="h3">Rating : </Heading> */}
            <p>
              <Tag type="rating">
                <span>Rating : {product.rating}</span>
              </Tag>
            </p>
            <Row type="horizontal">
              <Heading as="h4">
                <Tag type="price">
                  {Math.round(
                    product.mrp -
                      (product.discountPercentage * product.mrp) / 100
                  )}
                </Tag>
                <Tag type="mrp"> Rs {product.mrp}</Tag>
                <p>
                  <span>Discount : </span>{" "}
                  <Tag type="discount">{-product.discountPercentage}%</Tag>
                </p>
              </Heading>
              <Heading as="h4">
                <Tag type="inStock">
                  {product.inStock ? "Available" : "Sold Out"}{" "}
                </Tag>
              </Heading>
            </Row>
          </div>
          <div className="productDetails-content">
            <Row type="horizontal">
              <Heading as="h2">About this Item</Heading>
              <Button
                variations="transparent"
                sizes="xsmall"
                onClick={showHandler}
              >
                {showMore ? <HiChevronUp /> : <HiChevronDown />}
              </Button>
            </Row>

            <List showMore={showMore} items={product.description} />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Button
              onClick={() => {
                dispatch(addItemToCart({ ...product, quantity: 1 }));
                cartItems.length === 0
                  ? addToCart({ ...product, quantity: 1 })
                  : updateCart([...cartItems, { ...product, quantity: 1 }]);
              }}
              disabled={isItemPresentInCart}
              style={{ flex: 1 }}
              size="large"
              variation="primary"
            >
              Add To Cart
            </Button>
            <Button
              onClick={() => {
                isItemPresentInWishlist
                  ? dispatch(deleteItemFromWishList(product.id))
                  : dispatch(addItemToWishlist(product));
              }}
              style={{ flex: 1 }}
              size="large"
              variation="secondary"
            >
              {isItemPresentInWishlist
                ? "Remove from Wishlist"
                : "Add To Wishlist"}
            </Button>
          </div>
        </ProductsDetails>
      </Product>
    </Row>
  );
}

export default ProductCard;
