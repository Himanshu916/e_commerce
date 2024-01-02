/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import Modal from "../ui/Modal";
import ModalNavigation from "../ui/ModalNavigation";
import { useLogout } from "../features/authentication/useLogout";
import DarkModeToggle from "../ui/DarkModeToggle";
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import Button from "../ui/Button";
import Row from "../ui/Row";
import { useNavigate } from "react-router-dom";
import Search from "../ui/SearchBar";

const StyledHeader = styled.div`
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 100px;
  padding: 0.5rem 1.5rem;
`;

function Header() {
  const { logout, isLoading } = useLogout();
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <Modal>
        <Modal.Button opens="nav">
          <HiMenu />
        </Modal.Button>
        <Modal.Window name="nav">
          <ModalNavigation />
        </Modal.Window>
      </Modal>

      <Search placeholder="Search here for dish..." />
      <div>
        <DarkModeToggle />
        <Button
          onClick={() => navigate("/wishlist")}
          size="small"
          variation="transparent"
        >
          <Row>
            <span>
              <HiOutlineHeart />
            </span>
            <span>Wishist</span>
          </Row>
        </Button>
        <Button
          onClick={() => navigate("/cart")}
          size="small"
          variation="transparent"
        >
          <Row>
            <span>
              <HiOutlineShoppingCart />
            </span>
            <span>Cart</span>
          </Row>
        </Button>
      </div>
    </StyledHeader>
  );
}

export default Header;
