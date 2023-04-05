import styled from "styled-components";

export const Small = styled.small`
  &.phrase {
    grid-column: 1 / 3;
    grid-row: 7 / -1;
    margin-left: 1.5rem;
    justify-self: flex-start;
    align-self: center;
    color: var(--blue-light-color);
  }

  &.menu-phrase {
    color: var(--blue-light-color);
  }

  &.contact__phrase {
    color: var(--blue-light-color);
    grid-column: 1 / -1;
    grid-row: 10 / -1;
  }

  /* Tablet */
  @media screen and (min-width: 481px) {
    &.phrase {
      grid-column: 1 / 4;
      grid-row: 7 / -1;
      justify-self: flex-start;
      align-self: center;
    }
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
    &.phrase {
      margin-top: 6rem;
      margin-bottom: 2rem;
    }
  }
`;
