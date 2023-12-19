import styled from "styled-components";

const FormLayout = styled.main`
  display: grid;
  grid-template-columns: 45rem;
  min-height: 100vh;
  justify-content: center;

  @media (min-width: 800px) {
    grid-template-columns: 60rem;
  }
  @media (max-width: 450px) {
    grid-template-columns: 40rem;
  }
`;

export default FormLayout;
