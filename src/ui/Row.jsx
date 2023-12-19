import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  gap: 1rem;
  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
    `};
  ${(props) =>
    props.type === "consistentPadding" &&
    css`
      flex-direction: column;
      padding: 0rem 1.5rem;
      margin: 1.5rem 0;
    `};

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
    `}
`;
Row.defaultProps = {
  type: "vertical",
};

export default Row;
