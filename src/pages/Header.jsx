import styled from "styled-components";
import { HiMenu } from "react-icons/hi";
import Modal from "../ui/Modal";
import ModalNavigation from "../ui/ModalNavigation";
import { useLogout } from "../features/authentication/useLogout";

const StyledHeader = styled.div`
  grid-column: 1/-1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-grey-200);
  border-radius: 100px;
  padding: 0.5rem 1.5rem;
`;

function Header() {
  const { logout, isLoading } = useLogout();
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

      <input
        style={{
          flex: 1,
          backgroundColor: "transparent",
          padding: "1rem 0.5rem",
        }}
        type="search"
        placeholder="Search Here"
        name=""
        id=""
      />
      <div
        style={{
          backgroundColor: "green",
          padding: ".5rem 1rem",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <button disabled={isLoading} onClick={logout}>
          Logout
        </button>
      </div>
    </StyledHeader>
  );
}

export default Header;
