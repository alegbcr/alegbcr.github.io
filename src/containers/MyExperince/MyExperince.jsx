import styled from "styled-components";
import { SectionBase } from "../../components/SectionBase";
import { SubtitleBase } from "../../components/SubtitleBase";
import { ContainerListBase } from "../../components/ContainerListBase";

export const Section = styled(SectionBase)``;

export const Subtitle = styled(SubtitleBase)``;

export const List = styled(ContainerListBase)``;

export const ItemList = styled.li`
  &.my-experience__item-list {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.8rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--white-color);
  }

  @media screen and (min-width: 1024px) {
  }
`;

export const SubtitleSecondary = styled.h3``;

export const Paragraph = styled.p`
  grid-column: 1 / -1;
  text-align: center;

  &.my-experience__paragraph {
    text-align: start;
  }

  /* Tablet */
  @media screen and (min-width: 481px) {
    grid-column: 2 / 8;
    margin: 0.5rem 0;
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
    grid-column: 3 /12;
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    grid-column: 3 /11;
  }
`;
