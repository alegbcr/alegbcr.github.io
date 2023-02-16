import styled from "styled-components";

export const Image = styled.img`
  max-width: 100%;
  object-fit: cover;

  &.background {
    object-position: 80px;
    line-height: 0;
    opacity: 0.3;
  }
`;
