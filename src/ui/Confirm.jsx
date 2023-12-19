import styled from "styled-components";
import Overlay from "./Overlay";
import Button from "./Button";
import EmptyDiv from "./EmptyDiv";
import { HiMiniXMark } from "react-icons/hi2";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../features/cart/cartSlice";

const Modal = styled.div`
  background-color: var(--color-grey-50);
  position: absolute;
  left: 50%;
  top: 50%;
  width: 60%;
  max-width: 35rem;
  transform: translate(-50%, -50%);
  padding: 1.5rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.4s;
  z-index: 1000;
`;

const ConfirmBox = styled.div`
  /* background-color: red; */

  & div {
    /* border-bottom: 0.2px solid var(--color-grey-200); */
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }

  & p {
    font-size: 1.4rem;
    padding-bottom: 1rem;

    margin-bottom: 1rem;
  }
`;

function Confirm({ close, id }) {
  const myRef = useRef();
  const dispatch = useDispatch();
  useEffect(
    function () {
      function handleClick(e) {
        if (myRef.current && !myRef.current.contains(e.target)) {
          close();
        }
      }

      document.addEventListener("click", handleClick, true);

      return () => document.removeEventListener("click", handleClick, true);
    },
    [close]
  );
  return (
    <>
      <Overlay>
        <Modal ref={myRef}>
          <ConfirmBox>
            <EmptyDiv>
              <p>Are you sure you want to move this item from cart?</p>
              <Button onClick={close} size="iconText" variation="transparent">
                <HiMiniXMark />
              </Button>
            </EmptyDiv>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Button
                onClick={() => dispatch(deleteItemFromCart(id))}
                style={{ flex: 1 }}
                size="confirmSmall"
                variation="confirm-yes"
              >
                REMOVE
              </Button>
              <Button
                style={{ flex: 1 }}
                size="confirmSmall"
                variation="confirm-no"
              >
                MOVE TO WISHLIST
              </Button>
            </div>
          </ConfirmBox>
        </Modal>
      </Overlay>
    </>
  );
}

export default Confirm;
