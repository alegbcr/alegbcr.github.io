import styled from "styled-components";

export const ParagraphBase = styled.p`
  grid-column: 1 / -1;

  /* Tablet */
  @media screen and (min-width: 481px) {
    grid-column: 1 / -1;
    margin: 0.5rem 0;
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
    grid-column: 1 / -1;
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    grid-column: 4 /12;
  }
`;
