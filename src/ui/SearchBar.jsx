import styled from "styled-components";

const Search = styled.input.attrs({ type: "text" })`
  background-color: transparent;
  padding: 0.6rem 1rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 100px;

  max-width: 30%;
  flex: 1;

  @media (min-width: 600px) {
    max-width: 50%;
  }
`;

export default Search;
