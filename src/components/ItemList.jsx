import styled from "styled-components";

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

  /* ABOUT ME */
  &.computer-skill__item-list {
    background-color: var(--gray-color);
    margin-bottom: 10px;
    border-radius: var(--border-radius);
  }

  &.my-experience__item-list {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.8rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--white-color);
  }

  /* PORTFOLIO */
  &.portfolio__item-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    border-bottom: 1px solid var(--white-color);
  }

  /* MY PROJECT */
  &.my-project__item-list {
    background-color: var(--gray-color);
    margin-bottom: 10px;
    border-radius: var(--border-radius);
  }
`;
