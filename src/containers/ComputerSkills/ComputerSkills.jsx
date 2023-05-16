import styled from "styled-components";
import { SectionBase } from "../../components/SectionBase";
import { SubtitleBase } from "../../components/SubtitleBase";
import { ContainerListBase } from "../../components/ContainerListBase";
import { ContainerBase } from "../../components/ContainerBase";
import { ItemListBase } from "../../components/ItemListBase";

export const Section = styled(SectionBase)``;

export const Subtitle = styled(SubtitleBase)``;

export const ContainerList = styled(ContainerListBase)``;

export const ItemList = styled(ItemListBase)``;

export const Container = styled(ContainerBase)`
  &.computer-skill__items--items {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 8px;
  }

  &.computer-skill__items--icons {
    display: flex;
    flex-wrap: wrap;
    width: 85%;
    margin: 0 auto;
  }
`;

export const Picture = styled.picture`
  display: grid;
  overflow: hidden;

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
