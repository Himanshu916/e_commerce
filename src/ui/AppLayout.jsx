import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import SideBar from "../pages/SideBar";
import styled from "styled-components";
// import ModalNavigation from "./ModalNavigation";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
  height: 100vh;

  @media (min-width: 800px) {
    grid-template-columns: 26rem 1fr;
  }
`;

const Main = styled.main`
  /* background-color: var(--color-grey-300); */
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
