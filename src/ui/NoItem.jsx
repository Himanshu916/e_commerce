import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import Row from "./Row";
import { useNavigate } from "react-router-dom";
const Layout = styled.main`
  display: grid;
  grid-template-columns: 35rem;
  gap: 3rem;
  min-height: 100vh;
  justify-content: center;
  align-content: center;
  background-color: var(--color-grey-50);

  @media (min-width: 800px) {
    grid-template-columns: 48rem;
  }
`;
function NoItem({ where }) {
  const navigate = useNavigate();
  return (
    <Layout>
      <Row type="consistentPadding">
        <Heading as="h2">Hey, There is no item in {where}</Heading>
        <Button
          onClick={() => {
            navigate("/products");
          }}
          size="large"
          variation="primary"
        >
          Add Items in {where}
        </Button>
      </Row>
    </Layout>
  );
}

export default NoItem;
