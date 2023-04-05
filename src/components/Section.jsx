import styled from "styled-components";

const SectionBase = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(10, minmax(40px, 10vh));
  justify-content: center;
  overflow: hidden;

  /* ABOUT ME */
  &.about-me__container {
    height: 80vh;
  }

  &.computer-skill__container,
  &.my-experience__section,
  &.portfolio-description__section,
  &.portfolio-description__section--description {
    grid-template-rows: repeat(10, minmax(40px, auto));
  }

  &.my-experience__section {
    flex-direction: column;
  }

  /* PORTFOLIO DESCRIPTION */
  &.portfolio-description__section {
    margin-top: 4rem;
  }

  /* CONTACT */
  &.contact__section {
    height: 100vh;
    justify-items: center;
    grid-template-rows: repeat(10, minmax(40px, 10vh));
    align-items: center;
  }

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

    &.container {
      padding: 3rem 0;
    }
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
    justify-content: center;
    grid-template-columns: repeat(12, 1fr);

    &.container {
      padding: 1rem 0;
    }
  }
`;

export const Section = ({ className, style, children }) => {
  return (
    <SectionBase className={className} style={style}>
      {children}
    </SectionBase>
  );
};
