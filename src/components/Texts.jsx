import styled from "styled-components";

export const Title = styled.h1`
  &.title__description {
    font-size: var(--font-paragraph);
    width: 100%;
    opacity: 0.8;
  }

  /* Tablet */
  @media screen and (min-width: 481px) {
    &.title__description {
      width: 80%;
    }
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
    &.title__description {
      margin-top: 1rem;
      width: 80%;
      font-size: var(--font-subtitle);
    }
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    &.title__description {
      width: 70%;
      font-size: var(--font-subtitle);
    }
  }

  /* HD */
  @media screen and (min-width: 1202px) {
    &.title__description {
      width: 70%;
      font-size: var(--font-subtitle);
    }
  }
`;

export const Subtitle = styled.h2`
  /* ABOUT ME */
  &.title__greeting {
    font-size: 3rem;
    margin: 0;
    font-weight: 700;
    font-family: "Hind Siliguri";
    line-height: 4rem;
  }

  &.about-me__subtitle {
    width: 85%;
    line-height: 3rem;
    justify-self: center;
    align-self: center;
    font-size: 2rem;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    border-bottom: 1px solid white;
    margin: 1rem 0;
  }

  /* PORTFOLIO */
  &.portfolio__subtitle,
  &.projects__subtitle,
  &.contact__subtitle {
    width: 85%;
    line-height: 3.5rem;
    font-size: 3rem;
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    border-bottom: 1px solid white;
  }

  &.portfolio__subtitle,
  &.projects__subtitle {
    justify-self: center;
    align-self: center;
  }

  &.contact__subtitle {
    grid-row: 4 / 5;
  }

  /* Tablet */
  @media screen and (min-width: 481px) {
    &.title__greeting {
      font-size: 3.8rem;
      margin: 0;
      font-weight: 700;
      font-family: "Hind Siliguri";
      line-height: 4rem;
    }
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
    &.title__greeting {
      font-size: 6rem;
    }
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    &.about-me__subtitle {
      width: 85%;
      font-size: 2.5rem;
      grid-column: 2 / 7;
      grid-row: 2 / 5;
      border-bottom: none;
      margin: 2rem 0 0 0;
    }

    &.portfolio__subtitle,
    &.projects__subtitle,
    &.contact__subtitle {
      width: 85%;
      line-height: 3.5rem;
      font-size: 3rem;
      grid-column: 2/ 7;
      grid-row: 2 / 3;
      border-bottom: none;
    }
  }
`;

export const SubtitleSecondary = styled.h3``;

export const Paragraph = styled.p`
  grid-column: 1 / -1;
  margin: 0;
  text-align: center;

  /* ABOUT ME */
  &.about-me__paragraph {
    margin-bottom: 1rem;
  }

  &.title {
    text-align: start;
  }

  &.my-experience__paragraph,
  &.portfolio__paragraph {
    text-align: start;
  }

  /* MY PROJECTS */
  &.project__subtitle--paragraph {
    grid-row: 3 / 4;
    text-align: start;
    width: 85%;
    justify-self: center;
    align-self: center;
  }
  /* CONTACT */
  &.contact__paragraph {
    width: 85%;
    text-align: start;
    grid-column: 1 / -1;
    grid-row: 5 / 6;
  }

  /* Tablet */
  @media screen and (min-width: 481px) {
    grid-column: 2 / 8;
    margin: 0.5rem 0;
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
    grid-column: 3 /12;
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    grid-column: 3 /11;
    &.about-me__paragraph {
      text-align: start;
    }
  }
`;

/* Tablet */
// @media screen and (min-width: 481px) {}
/* Laptop */
// @media screen and (min-width: 769px) {}
/* Desktop */
// @media screen and (min-width: 1024px) {}
/* HD */
// @media screen and (min-width: 1202px) {}
