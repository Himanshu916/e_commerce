import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  list-style-type: circle;

  & li {
    margin-left: 1rem;
  }
`;

function List({ items, showMore }) {
  const listItems = showMore ? items : items.slice(0, 3);

  return (
    <StyledList>
      {listItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </StyledList>
  );
}

export default List;
