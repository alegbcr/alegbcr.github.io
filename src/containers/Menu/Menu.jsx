import styled from "styled-components";

export const Nav = styled.nav`
  height: 8vh;
  width: 100vw;
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  background-color: var(--black-color);
`;

export const Container = styled.div`
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
    justify-content: space-between;
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

  /* Tablet */
  @media screen and (min-width: 481px) {
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
  }
`;

export const Picture = styled.picture`
  display: grid;
  overflow: hidden;

  &.navigation {
    display: flex;
    height: 55px;
    width: 120px;
    margin-left: 20px;
  }

  /* Tablet */
  @media screen and (min-width: 481px) {
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
  }
`;

export const Image = styled.img`
  /* Laptop */
  @media screen and (min-width: 769px) {
  }
`;

export const List = styled.ul`
  &.menu-navigation-list {
    margin-top: 15rem;
    height: 40%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &.menu-navigation-large {
    display: flex;
    align-self: center;
  }

  @media screen and (min-width: 769px) {
  }
  @media screen and (min-width: 1024px) {
  }
`;

export const ItemList = styled.li`
  &.menu-navigation-item {
    font-size: var(--font-subtitle);
    margin: 0.5rem 0;
  }

  &.menu-navigation-large--item {
    margin: 0 1rem;
  }

  &.menu-navigation-large--icons {
    margin: 0 0.6rem;
    display: flex;
  }

  @media screen and (min-width: 1024px) {
  }
`;

export const Anchor = styled.a`
  &.cv__anchor,
  &.cv__anchor--mobile {
    padding: 0.3rem 1rem;
    border: 1px solid var(--blue-light-color);
    border-radius: var(--border-radius);
    text-align: center;
  }
  &.cv__anchor--mobile {
    margin-top: 1rem;
  }

  &:hover {
    color: var(--blue-light-color);
    transition: ease-out 0.4s;
  }
`;

export const Small = styled.small`
  &.menu-phrase {
    color: var(--blue-light-color);
    margin-bottom: 4rem;
  }

  /* Tablet */
  @media screen and (min-width: 481px) {
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
  }
`;
