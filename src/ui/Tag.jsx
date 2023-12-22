import styled, { css } from "styled-components";

const StyledTag = styled.span`
  ${(props) =>
    props.type === "discount" &&
    css`
      color: var(--color-red-700);
      display: inline-block;
      /* margin-right: 0.8rem; */
    `}

  ${(props) =>
    props.type === "mrp" &&
    css`
      color: var(--color-grey-500);
      display: block;
      font-weight: 500;
      text-decoration: line-through;
    `}

  ${(props) =>
    props.type === "inStock" &&
    css`
      color: var(--color-green-700);
      display: inline-block;
      margin-right: 0.8rem;
    `}

    ${(props) =>
    props.type === "outOfStock" &&
    css`
      color: var(--color-red-700);
      display: inline-block;
      margin-right: 0.8rem;
    `}
`;

export function Tag({ children, type }) {
  return <StyledTag type={type}>{children}</StyledTag>;
}
