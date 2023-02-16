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
  }
`;

export const List = ({ className, children }) => {
  return <ListBase className={className}>{children}</ListBase>;
};
