import styled from "styled-components";
// Components
import { SectionBase } from "../../components/SectionBase";
import { SubtitleBase } from "../../components/SubtitleBase";
import { ContainerBase } from "../../components/ContainerBase";
import { ParagraphBase } from "../../components/ParagraphBase";

export const Section = styled(SectionBase)``;

export const Subtitle = styled(SubtitleBase)``;

export const Container = styled(ContainerBase)`
  &.largeWidth {
    width: 100%;
  }

  /* Tablet */
  @media screen and (min-width: 481px) {
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    &.card__container--button {
      background-color: var(--blue-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: var(--border-radius);
      width: 100%;
      height: 25%;
    }
  }
`;

export const List = styled.ul`
  &.card__container {
    grid-column: 1 /-1;
    grid-row: 4 / -1;
    justify-self: center;
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (min-width: 769px) {
    &.card__container {
      align-items: start;
    }
  }
  @media screen and (min-width: 1024px) {
    &.card__container {
      grid-column: 1 /-1;
      grid-row: 4 / -1;
      width: 80%;
      height: 200px;
      justify-self: center;
      align-items: center;
      display: flex;
      flex-direction: row;
    }
  }

  @media screen and (min-width: 1441px) {
    &.card__container {
      justify-content: space-between;
    }
  }
`;

export const ItemList = styled.li`
  &.card__container--items {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid var(--white-color);
  }

  @media screen and (min-width: 1024px) {
    &.card__container--items {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      border-bottom: none;
      padding: 1.5rem;
      width: 300px;
      height: 70%;
      background-color: var(--gray-color);
      border-radius: var(--border-radius);
      margin: 0 1rem;
    }
  }

  @media screen and (min-width: 1441px) {
    &.card__container--items {
      justify-content: space-between;
      width: 400px;
    }
  }
`;

export const SubtitleSecondary = styled.h3``;

export const Paragraph = styled(ParagraphBase)`
  grid-column: 1 / -1;
  text-align: start;
`;
