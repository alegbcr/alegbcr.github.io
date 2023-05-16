import styled from "styled-components";
import { SectionBase } from "../../components/SectionBase";
import { SubtitleBase } from "../../components/SubtitleBase";
import { ParagraphBase } from "../../components/ParagraphBase";

export const Section = styled(SectionBase)`
  height: 96vh;
`;

export const Subtitle = styled(SubtitleBase)`
  &.contact__subtitle {
    width: 85%;
    font-size: 3rem;
    grid-column: 1 / -1;
    grid-row: 4 / 5;
    align-self: end;
  }

  /* Tablet */
  @media screen and (min-width: 481px) {
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    &.contact__subtitle {
      grid-column: 4/ 7;
      grid-row: 3 / 4;
      justify-self: start;
    }
  }
`;

export const Paragraph = styled(ParagraphBase)`
  &.contact__paragraph {
    width: 85%;
    text-align: start;
    grid-column: 1 / -1;
    grid-row: 5 / 6;
    justify-self: center;
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
    &.contact__paragraph {
      width: 85%;
      text-align: start;
      grid-column: 4/ 11;
      grid-row: 4 / 6;
      justify-self: start;
    }
  }
`;

export const List = styled.ul`
  /* CONTACT */
  &.contact__list {
    grid-column: 1 / -1;
    grid-row: 6 / 7;
    width: 85%;
    justify-self: center;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (min-width: 1024px) {
    &.contact__list {
      grid-column: 4 / 10;

      grid-row: 6 / 7;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const ItemList = styled.li`
  @media screen and (min-width: 1024px) {
  }
`;

export const Anchor = styled.a`
  &.contact__anchor {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 40px;
  }

  &:hover {
    color: var(--blue-light-color);
    transition: ease-out 0.4s;
  }
`;

export const Small = styled.small`
  &.contact__phrase {
    color: var(--blue-light-color);
    grid-column: 1 / -1;
    grid-row: 10 / -1;
    text-align: center;
  }

  /* Tablet */
  @media screen and (min-width: 481px) {
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
  }
`;
