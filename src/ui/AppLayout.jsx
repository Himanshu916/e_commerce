import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
// import SideBar from "./SideBar";
import styled from "styled-components";

// import ModalNavigation from "./ModalNavigation";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main``;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />

      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
