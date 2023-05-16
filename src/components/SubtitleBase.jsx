import styled from "styled-components";

export const SubtitleBase = styled.h2`
  width: 85%;
  line-height: 3rem;
  justify-self: center;
  font-size: 2rem;
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  margin: 0 0 1rem;

  &.subtitle-base {
    line-height: 3.5rem;
    font-size: 3rem;
    grid-row: 3 / 4;
    align-self: center;
  }

  /* Tablet */
  @media screen and (min-width: 481px) {
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    width: 85%;
    font-size: 2.5rem;
    grid-column: 2 / 8;
    grid-row: 2 / 5;
    margin: 0;

    &.subtitle-base {
      font-size: 3rem;
      grid-column: 2/ 7;
      grid-row: 3 / 4;
    }
  }
`;
