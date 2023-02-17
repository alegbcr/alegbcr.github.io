import styled from "styled-components";

const PictureBase = styled.picture`
  display: flex;

  &.navigation {
    display: flex;
    height: 55px;
    width: 120px;
    margin-left: 20px;
  }

  &.background {
    height: 92vh;
  }

  @media screen and (min-width: 1280px) and (orientation: landscape) {
    &.background {
      height: 80vh;
      width: 50%;
      margin-left: 40%;
    }
  }
`;

export const Picture = ({ className, children }) => {
  return <PictureBase className={className}>{children}</PictureBase>;
};
