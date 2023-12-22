/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
import {
  HiArrowRightOnRectangle,
  HiOutlineArrowLeftOnRectangle,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlinePaperAirplane,
  HiOutlineRectangleStack,
  HiOutlineShoppingBag,
  HiOutlineWrench,
} from "react-icons/hi2";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Overlay from "./Overlay";
import { useUser } from "../features/authentication/useUser";
import { useLogin } from "../features/authentication/useLogin";
import Button from "./Button";
import { useLogout } from "../features/authentication/useLogout";

const Profile = styled.div`
  padding: 0 2rem;
  display: flex;
  gap: 1rem;
  & div p:nth-child(2) {
    font-size: 1.2rem;
  }
`;
const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);
`;

// const Avatar = styled.p`
//   background-color: green;
//   border-radius: 50%;
//   font-size: 1.8rem;
//   color: #fff;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 4.2rem;
// `;

const Modal = styled.div`
  background-color: var(--color-grey-50);
  position: absolute;
  left: 0;
  top: 0;
  width: 80%;
  bottom: 0;
  padding: 0.5rem 0rem;
  transition: all 4s;
  z-index: 1000;
  overflow: hidden;
  min-height: 100vh;
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
    color: var(--color-grey-800);
    margin-right: 1rem;
    align-items: center;
  }

  & li a,
  & li a {
    display: flex;
    gap: 2rem;
  }

  & li a:link,
  & li a:visited {
    padding: 0.8rem 2rem;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
  }
  & li a:link,
  & li a:visited,
  & li svg {
    color: inherit;
  }

  & li a:hover,
  & li a:active,
  & li .active:link,
  & li .active:visited {
    background-color: var(--color-brand-100);
  }

  & li a:hover,
  & li a:active,
  & li .active:link,
  & li .active:visited,
  & li a:active svg,
  & li a:hover svg {
    color: var(--color-brand-900);
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
  const { user, isAuthenticated, isLoading } = useUser();
  const { logout, isLoading: isLoggingOut } = useLogout();
  const { login, isLoading: isLoggingIn } = useLogin();
  const navigate = useNavigate();
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

  if (isLoading) return null;

  const { fullName, avatar } = user?.user_metadata || {};

  return (
    <Overlay>
      <Modal ref={myRef}>
        {!user ? (
          <Profile>
            <StyledUserAvatar>
              <Avatar src={"../../../public/default-user.jpg"} alt={`H`} />
              {/* <span>{fullName}</span> */}
            </StyledUserAvatar>

            {/* <Avatar>H</Avatar> */}
            <div>
              <p>User Name</p>
              <p>User Email</p>
            </div>
          </Profile>
        ) : (
          <Profile>
            <StyledUserAvatar>
              <Avatar
                src={avatar || "../../../public/default-user.jpg"}
                alt={`H`}
              />
              {/* <span>{fullName}</span> */}
            </StyledUserAvatar>

            {/* <Avatar>H</Avatar> */}
            <div>
              <p>{fullName}</p>
              <p>{user.email}</p>
            </div>
          </Profile>
        )}
        <UnorderedList onClick={() => close()}>
          <li>
            <NavLink to="/">
              <span>
                <HiOutlineHome />
              </span>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/products">
              <span>
                <HiOutlinePaperAirplane />
              </span>
              <span>Products</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/wishlist">
              <span>
                <HiOutlineHeart />
              </span>
              <span> WishList</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">
              <span>
                <HiOutlineShoppingBag />
              </span>
              <span> Cart</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/orders">
              <span>
                <HiOutlineRectangleStack />
              </span>
              <span> Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/account">
              <span>
                <HiOutlineWrench />
              </span>
              <span> Account</span>
            </NavLink>
          </li>
          <li>
            {isAuthenticated ? (
              <Button
                style={{ padding: "0.8rem 2rem" }}
                onClick={logout}
                disabled={isLoggingOut}
              >
                <span>
                  <HiOutlineArrowLeftOnRectangle />
                </span>
                <span> LogOut</span>
              </Button>
            ) : (
              <NavLink to="/login">
                <span>
                  <HiArrowRightOnRectangle />
                </span>
                <span> Login</span>
              </NavLink>
            )}
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
