import styled from "styled-components";

const PictureBase = styled.picture`
  display: grid;
  overflow: hidden;

  &.navigation {
    display: flex;
    height: 55px;
    width: 120px;
    margin-left: 20px;
  }

  /* About me */
  &.background__image-container {
    grid-template-columns: repeat(4, 1fr);
    height: 100%;
    max-width: 100%;
    grid-column: 1 / -1;
    grid-row: 2 / -1;
  }

  /* Tablet */
  @media screen and (min-width: 481px) {
    &.background__image-container {
      display: grid;
      grid-column: 2 / -1;
      align-items: flex-end;
      overflow: hidden;
    }
  }

  /* Laptop */
  @media screen and (min-width: 769px) {
    &.background__image-container {
      display: grid;
      grid-column: 4 / -1;
      height: 90vh;
      align-items: flex-end;
      overflow: hidden;
    }
  }

  /* Desktop */
  @media screen and (min-width: 1024px) {
    &.background__image-container {
      grid-column: 6 / -1;
      height: 90vh;
    }
  }
`;

export const Picture = ({ className, style, children }) => {
  return (
    <PictureBase className={className} style={style}>
      {children}
    </PictureBase>
  );
};
