import { useEffect, useRef } from "react";
import { HiHand } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const Profile = styled.div`
  padding: 0 2rem;
  display: flex;
  gap: 1rem;
  & div p:nth-child(2) {
    font-size: 1.2rem;
  }
`;

const Avatar = styled.p`
  background-color: green;
  border-radius: 50%;
  font-size: 1.8rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.2rem;
`;

const Modal = styled.div`
  background-color: var(--color-grey-100);
  position: absolute;
  left: 0;
  top: 0;
  width: 80%;
  bottom: 0;
  padding: 0.5rem 0rem;
  transition: all 4s;
  z-index: 1000;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  overflow-x: hidden;
  bottom: 0;
  backdrop-filter: blur(3px);
  transition: all 4s;
  z-index: 1000;

  /* ${(props) =>
    props.open === "nav" &&
    css`
      left: 0;
      transition: all 4s linear;
    `} */
`;

// Overlay.defaultProps={

// }
const UnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 1.5rem 0;
  border-top: 1px solid var(--color-grey-300);
  border-bottom: 1px solid var(--color-grey-300);
  gap: 1rem;
  & li {
    padding: 0.8rem 2rem;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
    background-color: var(--color-brand-500);
    color: var(--color-grey-800);
    margin-right: 1rem;

    align-items: center;
  }

  & li.active {
    background-color: var(--color-brand-500);
  }

  & li a,
  & li a {
    display: flex;
    gap: 2rem;
  }

  & li a:link,
  & li a:visited,
  & li svg {
    color: red;
  }

  & li a:hover,
  & li a:active,
  & li .active:link,
  & li .active:visited,
  & li a:active svg,
  & li a:hover svg {
    color: yellow;
  }
`;

const NavFooter = styled.div`
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const P = styled.p`
  font-size: 1.4rem;
  color: var(--color-grey-500);
`;

function ModalNavigation({ close }) {
  const myRef = useRef();

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
    <Overlay>
      <Modal ref={myRef}>
        <Profile>
          <Avatar>H </Avatar>
          <div>
            <p>Himanshu</p>
            <p>email</p>
          </div>
        </Profile>
        <UnorderedList onClick={() => close()}>
          <li>
            <NavLink to="app">
              <span>
                <HiHand />{" "}
              </span>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="products">
              <span>
                <HiHand />{" "}
              </span>
              <span>Shop Now</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="login">
              <span>
                <HiHand />{" "}
              </span>
              <span> Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="cart">
              <span>
                <HiHand />{" "}
              </span>
              <span> Addresses</span>
            </NavLink>
          </li>
        </UnorderedList>
        <NavFooter>
          <P>Contact Us</P>
          <P>FAQs</P>
        </NavFooter>
      </Modal>
      ;
    </Overlay>
  );
}

export default ModalNavigation;
