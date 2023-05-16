import styled from "styled-components";

export const ContainerBase = styled.div`
  /* Transitions */
  &.none {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
  }

  &.display {
    max-height: 100%;
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }

  /* Tablet */
  @media screen and (min-width: 481px) {
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
  }
`;
