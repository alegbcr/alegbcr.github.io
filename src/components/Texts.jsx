import styled from "styled-components";

export const Title = styled.h1`
  &.title__description {
    font-size: var(--font-paragraph);
    margin-top: 8px;
    width: 90%;
    border-top: 1px solid var(--blue-light-color);
    padding-top: 16px;
  }
`;

export const Subtitle = styled.h2`
  &.title__greeting {
    font-size: 5rem;
    margin: 0;
    font-weight: 700;
    font-family: inter;
    line-height: 5.1rem;
  }

  &.subtitle {
    font-size: var(--font-subtitle);
    text-align: center;
    margin-top: 1.2rem;
    margin-bottom: 1.3rem;
    color: var(--blue-light-color);
  }
`;

export const Paragraph = styled.p`
  margin: 0.4rem 0;
  padding: 0 2rem;
`;
