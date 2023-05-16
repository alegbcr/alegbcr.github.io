import styled from "styled-components";

export const ContainerListBase = styled.ul`
  grid-column: 1 / -1;
  grid-row: 2 / -1;
  width: 85%;
  justify-self: center;

  @media screen and (min-width: 769px) {
  }

  @media screen and (min-width: 1024px) {
    grid-column: 4 / 12;
    grid-row: 5 / -1;
    width: 85%;
  }
`;
