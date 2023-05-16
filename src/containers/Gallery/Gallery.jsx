import styled from "styled-components";

import { SectionBase } from "../../components/SectionBase";
import { SubtitleBase } from "../../components/SubtitleBase";

export const Section = styled(SectionBase)`
  align-items: start;
`;

export const Container = styled.div`
  &.gallery__container {
    grid-column: 1 /-1;
    width: 85%;
    justify-self: center;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  &.gallery__container {
    justify-content: start;
    margin-top: 10px;
    grid-row: 1 / -1;
  }
  &.gallery__container--items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* Tablet */
  @media screen and (min-width: 481px) {
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    &.gallery__container {
      grid-column: 1 /-1;
      width: 76%;
      justify-self: center;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }
  }
`;

export const Subtitle = styled(SubtitleBase)``;

export const Picture = styled.picture`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding: 0.5rem;
`;

export const Image = styled.img`
  width: 100px;

  /* Tablet */
  @media screen and (min-width: 481px) {
    width: 150px;
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
    width: 150px;
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
  }
`;
