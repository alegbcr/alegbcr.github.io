import styled from "styled-components";

export const ButtonBase = styled.button`
  border: none;
  padding: 0.7rem 3.5rem;
  border-radius: var(--border-radius);

  &:hover {
    background-color: var(--blue-light-color);
    transition: ease-out 0.4s;
  }
`;
