import styled from "styled-components";

export const Image = styled.img`
  /* About me */
  &.background__image {
    height: 100%;
    grid-column: 1 / -1;
    object-position: 8rem;
    line-height: 0;
    opacity: 0.3;
  }

  /* Portfolio */
  &.portfolio__design--image {
    width: 100px;
  }

  &.size {
    width: 110px;
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
    &.background__image {
      object-position: 0;
    }
  }
`;
