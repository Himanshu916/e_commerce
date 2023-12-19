import styled, { css } from "styled-components";
const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
  xsmall: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    border-radius: var(--border-radius-tiny);
  `,
  confirmSmall: css`
    font-size: 1rem;
    padding: 0.6rem 0.6rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
    border-radius: var(--border-radius-tiny);
  `,
  iconText: css`
    font-size: 2rem;
  `,
};
const variations = {
  primary: css`
    color: var(--color-brand-200);
    background-color: var(--color-brand-600);
    text-transform: uppercase;

    &:hover {
      background-color: var(--color-brand-700);
    }

    &:disabled {
      background-color: var(--color-grey-400);
      color: var(--color-grey-100);
    }
  `,
  secondary: css`
    /* color: var(--color-grey-900); */
    background-color: var(--color-grey-200);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-300);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
  transparent: css`
    background-color: transparent;
    box-shadow: none;
  `,
  ["confirm-yes"]: css`
    color: var(--color-grey-500);
    background-color: var(--color-grey-100);

    &:hover {
      background-color: var(--color-grey-200);
    }
  `,
  ["confirm-no"]: css`
    color: var(--color-brand-600);

    background-color: var(--color-brand-100);

    &:hover {
      background-color: var(--color-brand-200);
    }
  `,
};
const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);
  ${(props) => variations[props.variation]}
  ${(props) => sizes[props.size]}
`;

export default Button;
