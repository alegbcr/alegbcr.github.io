import styled from "styled-components";
import { SectionBase } from "../../components/SectionBase";
import { SubtitleBase } from "../../components/SubtitleBase";
import { ParagraphBase } from "../../components/ParagraphBase";
import { ContainerListBase } from "../../components/ContainerListBase";
import { ContainerBase } from "../../components/ContainerBase";
import { ItemListBase } from "../../components/ItemListBase";
import { ButtonBase } from "../../components/ButtonBase";

export const Section = styled(SectionBase)``;

export const Subtitle = styled(SubtitleBase)``;

export const Paragraph = styled(ParagraphBase)`
  grid-row: 4 / 5;
  text-align: start;
  width: 85%;
  justify-self: center;
  align-self: center;
`;

export const List = styled(ContainerListBase)`
  &.my-project__list {
    grid-column: 1 / -1;
    grid-row: 6 / -1;
    width: 85%;
    justify-self: center;
  }
  @media screen and (min-width: 769px) {
  }

  @media screen and (min-width: 1024px) {
    &.my-project__list {
      grid-column: 4 / 12;
      grid-row: 5 / -1;
    }
  }
`;

export const ItemList = styled(ItemListBase)`
  padding: 4px;
`;

export const Container = styled(ContainerBase)`
  &.my-project__items--title {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 8px;
  }
`;

export const Button = styled(ButtonBase)`
  display: flex;
  margin: 10px auto;
  align-items: center;
  justify-content: center;
  width: 90%;
  color: var(--white-color);
  background-color: var(--blue-color);
`;
