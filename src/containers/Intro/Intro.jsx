import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(10, minmax(40px, 10vh));
  justify-content: center;
  overflow: hidden;

  /* hide scrollbar but allow scrolling */
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  /* Tablet */
  @media screen and (min-width: 481px) {
    justify-content: center;
    grid-template-columns: repeat(8, 1fr);
  }

  /* Laptop */
  @media screen and (min-width: 768px) {
    justify-content: center;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(10, minmax(40px, 10vh));
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
  }
`;

export const Container = styled.div`
  &.about-me__overlay {
    position: absolute;
    grid-column: 1 / -1;
    height: 100%;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(7, minmax(20px, 150px));
  }

  &.base {
    width: 90%;
    grid-column: 1 /-1;
    grid-row: 3 / 6;
    display: flex;
    align-items: center;
  }

  &.intro__information {
    height: 50%;
  }

  /* Tablet */
  @media screen and (min-width: 481px) {
    &.about-me__overlay {
      position: relative;
      grid-column: 2 / -1;
      grid-row: 1 / -1;
    }

    &.base {
      width: 100%;
      grid-column: 1 /-1;
      grid-row: 4 / 7;
    }

    &.intro__information {
      align-self: center;
      justify-self: center;
      height: 100%;
    }
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    &.about-me__overlay {
      position: relative;
      grid-column: 3 / -1;
      grid-row: 1 / -1;
    }
  }
`;

export const Picture = styled.picture`
  display: grid;
  overflow: hidden;

  &.background__image-container {
    grid-template-columns: repeat(4, 1fr);
    height: 100%;
    max-width: 100%;
    grid-column: 1 / -1;
    grid-row: 2 / -1;
  }

  /* Tablet */
  @media screen and (min-width: 481px) {
    &.background__image-container {
      display: grid;
      grid-column: 2 / -1;
      align-items: flex-end;
      overflow: hidden;
    }
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
    &.background__image-container {
      display: grid;
      grid-column: 4 / -1;
      height: 90vh;
      align-items: flex-end;
      overflow: hidden;
    }
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    &.background__image-container {
      grid-column: 6 / -1;
      height: 90vh;
    }
  }
`;

export const Image = styled.img`
  &.background__image {
    height: 100%;
    grid-column: 1 / -1;
    object-position: 8rem;
    line-height: 0;
    opacity: 0.3;
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
    &.background__image {
      object-position: 0;
    }
  }
`;

export const Paragraph = styled.p`
  grid-column: 1 / -1;
  margin: 0;
  text-align: center;

  &.title {
    text-align: start;
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
  }
`;

export const Subtitle = styled.h2`
  &.title__greeting {
    font-size: 3rem;
    margin: 0;
    font-weight: 700;
    font-family: "Hind Siliguri";
    line-height: 4rem;
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
  }
`;

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

export const Button = styled.button`
  border: none;
  padding: 0.7rem 3.5rem;
  border-radius: var(--border-radius);

  /* Contact */
  &.contact__button {
    display: block;
    margin-top: 2rem;
    background-color: transparent;
    border: 2px solid var(--blue-light-color);
  }

  &:hover {
    background-color: var(--blue-light-color);
    transition: ease-out 0.4s;
  }
`;

export const Small = styled.small`
  &.phrase {
    grid-column: 1 / 3;
    grid-row: 7 / -1;
    margin-left: 1.5rem;
    justify-self: flex-start;
    align-self: center;
    color: var(--blue-light-color);
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
