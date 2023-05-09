import styled from "styled-components";

const ContainerBase = styled.div`
  /* MENU */
  /* Menu burger */
  &.menu__icon {
    font-size: 1.2rem;
    margin-right: 1rem;
  }

  &.menu-list {
    background-color: var(--black-color);
    position: fixed;
    top: 7vh;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 3s ease-in;
  }

  /* Menu navigation */
  &.menu-navigation {
    border-bottom: 2px solid var(--black-light-color);
    height: 100%;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* ABOUT ME */
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

  &.about-me__container--paragraph {
    grid-row: 2 / -1;
    grid-column: 1 / -1;
    align-self: center;
    width: 85%;
    justify-self: center;
  }

  &.computer-skill__accordion {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 8px;
  }

  /* PORTFOLIO */
  &.portfolio__container--works,
  &.portfolio__container--gallery,
  &.portfolio__container--logos {
    grid-column: 1 /-1;
    width: 85%;
    justify-self: center;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  &.portfolio__container--logos {
    justify-content: center;
  }
  &.portfolio__container-logos--items {
    display: flex;
    overflow-x: scroll;
  }

  &.portfolio__container--works {
    grid-row: 3 / 6;
  }
  &.portfolio__container--logos {
    grid-row: 6 / 8;
  }
  &.portfolio__container--gallery {
    grid-row: 8 / -1;
    margin-bottom: 1rem;
  }

  /* Transitions */
  &.none {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.2s ease-in-out;
  }

  &.display {
    max-height: 100%;
    opacity: 1;
    transition: all 0.2s ease-in-out;
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
    &.overlay {
      grid-column: 2 / 12;
      align-items: center;
      justify-content: center;
    }

    &.menu-navigation {
      width: 90%;
    }
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    &.about-me__overlay {
      position: relative;
      grid-column: 3 / -1;
      grid-row: 1 / -1;
    }

    &.about-me__container--paragraph {
      grid-row: 5 / -1;
      grid-column: 4 / 12;
      align-self: center;
      width: 85%;
      justify-self: center;
    }

    &.portfolio__container--works,
    &.portfolio__container--gallery,
    &.portfolio__container--logos {
      grid-column: 1 /-1;
      width: 85%;
      justify-self: center;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
  }
`;

export const Container = ({ className, style, children }) => {
  return (
    <ContainerBase className={className} style={style}>
      {children}
    </ContainerBase>
  );
};
