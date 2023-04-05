import styled from "styled-components";

export const Anchor = styled.a`
  &.icon {
    color: white;
    margin-right: 10px;
    font-size: 1.5rem;
  }

  &.contact__anchor {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 40px;
  }

  &:hover {
    color: var(--blue-light-color);
    transition: ease-out 0.4s;
  }
`;
