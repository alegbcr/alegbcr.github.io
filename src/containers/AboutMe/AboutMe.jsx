import styled from "styled-components";
import { SectionBase } from "../../components/SectionBase";
import { SubtitleBase } from "../../components/SubtitleBase";
import { ParagraphBase } from "../../components/ParagraphBase";

export const Section = styled(SectionBase)``;

export const Subtitle = styled(SubtitleBase)``;

export const Container = styled.div`
  &.about-me__container {
    grid-row: 2 / -1;
    grid-column: 1 / -1;
    align-self: center;
    width: 85%;
    justify-self: center;
  }

  /* Tablet */
  @media screen and (min-width: 481px) {
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    &.about-me__container {
      grid-row: 5 / -1;
      grid-column: 4 / 12;
      align-self: center;
      width: 85%;
      justify-self: center;
    }
  }
`;

export const Paragraph = styled(ParagraphBase)`
  /* ABOUT ME */
  &.about-me__paragraph {
    margin-bottom: 1rem;
  }

  /* Tablet */
  @media screen and (min-width: 481px) {
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    &.about-me__paragraph {
      text-align: start;
    }
  }
`;
