import styled from "styled-components";

const ListBase = styled.ul`
  &.icon__list {
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  &.menu-navigation-list {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &.menu-navigation-large {
    display: flex;
    align-self: center;
  }

  /* ABOUT ME */
  &.computer-skill__list,
  &.my-experience__list {
    grid-column: 1 / -1;
    grid-row: 2 / -1;
    width: 85%;
    margin-top: 1.5rem;
    justify-self: center;
  }

  /* PORTFOLIO */
  &.my-experience__list {
    margin-top: 0.8rem;
  }

  /* MY PROJECTS */

  &.my-project__list {
    grid-column: 1 / -1;
    grid-row: 4 / -1;
    width: 85%;
    justify-self: center;
  }
  /* CONTACT */
  &.contact__list {
    grid-column: 1 / -1;
    grid-row: 6 / 8;
    width: 85%;
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 769px) {
    &.icon__list {
      display: none;
    }
  }
  @media screen and (min-width: 1024px) {
    &.computer-skill__list,
    &.my-experience__list {
      grid-column: 4 / 12;
      grid-row: 5 / -1;
      width: 85%;
      margin-top: 1.5rem;
      justify-self: center;
    }
  }
`;

export const List = ({ className, children, style }) => {
  return (
    <ListBase className={className} style={style}>
      {children}
    </ListBase>
  );
};
