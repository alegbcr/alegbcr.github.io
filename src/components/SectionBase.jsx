import styled from "styled-components";

export const SectionBase = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(10, minmax(40px, auto));
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  /* Tablet */
  @media screen and (min-width: 481px) {
    grid-template-columns: repeat(8, 1fr);
  }

  /* Laptop */
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(12, 1fr);
  }
`;
