import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  overflow-x: hidden;
  bottom: 0;
  backdrop-filter: blur(3px);
  transition: all 0.4s;
  z-index: 1000;
`;

export default Overlay;
