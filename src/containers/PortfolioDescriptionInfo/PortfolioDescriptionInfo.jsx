import styled from "styled-components";
import { SectionBase } from "../../components/SectionBase";
import { ContainerBase } from "../../components/ContainerBase";

export const Section = styled(SectionBase)`
  padding: 0;
  height: 100%;
`;

export const Picture = styled.picture`
  display: flex;
  align-items: end;
  justify-content: center;
`;

export const Image = styled.img`
  width: 300px;
`;

export const Container = styled(ContainerBase)`
  &.info_main__container {
    justify-self: center;
    grid-column: 1 / -1;
    grid-row: 3 / 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &.info_main__container,
  &.works_main__container {
    width: 85%;
  }

  /* Company works */
  &.works_main__container {
    justify-self: center;
    grid-column: 1 / -1;
    grid-row: 5 / -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }

  @media screen and (min-width: 1024px) {
    &.info_main__container {
      justify-self: center;
      grid-column: 2 / 6;
      grid-row: 4 / 8;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    /* Company works */
    &.works_main__container {
      grid-column: 6 / -1;
      grid-row: 4 / -1;
    }
  }
`;

export const List = styled.ul``;

export const ItemList = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const Button = styled.button`
  border: none;
  padding: 0.7rem 3.5rem;
  border-radius: var(--border-radius);

  &:hover {
    background-color: var(--blue-light-color);
    transition: ease-out 0.4s;
  }
`;
