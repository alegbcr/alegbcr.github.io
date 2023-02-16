import styled from "styled-components";

const ContainerBase = styled.div`
  &.base {
    display: flex;
    flex-direction: column;
    justify-content: end;
    height: 100%;
    max-width: 100%;
    padding-top: 2rem;
  }

  &.center {
    align-items: center;
  }

  &.overlay {
    padding-top: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding-left: 2rem;
  }

  /* Menu burger */
  &.menu__icon {
    font-size: 1.2rem;
    margin-right: 1rem;
  }

  &.menu-list {
    background-color: var(--black-color);
    position: fixed;
    top: 7vh;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 3s ease-in;
  }

  /* Menu navigation */
  &.menu-navigation {
    height: 100%;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* Portfolio */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Container = ({ className, style, children }) => {
  return (
    <ContainerBase className={className} style={style}>
      {children}
    </ContainerBase>
  );
};
