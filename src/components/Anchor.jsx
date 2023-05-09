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

  &.cv__anchor,
  &.cv__anchor--mobile {
    padding: 0.3rem 1rem;
    border: 1px solid var(--blue-light-color);
    border-radius: var(--border-radius);
    text-align: center;
  }
  &.cv__anchor--mobile {
    margin-top: 0.5rem;
  }

  &:hover {
    color: var(--blue-light-color);
    transition: ease-out 0.4s;
  }
`;
