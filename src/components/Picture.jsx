import styled from "styled-components";

const PictureBase = styled.picture`
  display: flex;

  &.navigation {
    display: flex;
    height: 60px;
    width: 120px;
    margin-left: 20px;
  }

  &.background {
    height: 92vh;
  }
`;

export const Picture = ({ className, children }) => {
  return <PictureBase className={className}>{children}</PictureBase>;
};
