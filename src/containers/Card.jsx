import styled from "styled-components";

const CardContainerBase = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  padding: 0.1rem 0.5rem;

  &.column {
    flex-direction: column;
    width: 90%;
    border-radius: var(--border-radius);
    background-color: var(--blue-color);
  }

  &.row {
    width: 93%;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-y: hidden;
    overflow-x: scroll;
    margin-bottom: 8px;
  }

  &.row-scroll {
    margin: 0 auto;
    border-radius: var(--border-radius);
    background-color: var(--gray-color);
    height: 150px;
    width: 90%;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    overflow-x: scroll;
  }

  &.card__container {
    background-color: var(--gray-color);
    border-radius: var(--border-radius);
    height: 100%;
    width: 350px;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    overflow-x: scroll;
    margin-bottom: 10px;
    border-bottom: 4px solid var(--blue-light-color);
  }

  /* My Projects */
  &.card-project {
    padding: 0;
    margin-top: 10px;
    border-bottom: 0;
    border-top: 2px solid var(--blue-light-color);
  }

  /* hide scrollbar but allow scrolling */
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;
export const CardContainer = ({ style, className, children }) => {
  return (
    <CardContainerBase style={style} className={className}>
      {children}
    </CardContainerBase>
  );
};

/* ------------------------------------------------------------------------------------------ */

const CardBase = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--gray-color);
  border-radius: var(--border-radius);
  border-bottom: var(--border-light);
  color: var(--white-color);
  padding: 2px 4px 1px;
  margin: 8px 4px;

  &.row {
    background-color: var(--gray-color);
    border-bottom: 4px solid var(--blue-light-color);
    color: var(--white-color);
    height: 150px;
    padding: 0;
    margin: 0 8px 0 0;
  }
`;
export const Card = ({ className, children }) => {
  return <CardBase className={className}>{children}</CardBase>;
};

/* ------------------------------------------------------------------------------------------ */

export const CardTitle = styled.h3`
  padding: 0.2rem 1rem;
  margin: 10px 5px;
`;

export const CardSubtitle = styled.h4`
  width: 280px;
  margin: 12px 5px 5px;
  padding: 0.2rem 1rem;
`;

export const CardDescription = styled.h5`
  margin: 0px 5px 5px;
  padding: 0.2rem 1rem;
`;

export const CardOtherTitle = styled.h5`
  margin: 5px;
  padding: 0.5rem 0.5rem 0.2rem 0.5rem;

  &.experience {
    width: 280px;
    padding: 0.5rem 0.5rem 0.1rem 0.5rem;
  }
`;

/* ------------------------------------------------------------------------------------------ */

const CardListBase = styled.ul`
  padding: 0 0.5rem 0.8rem 0.5rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
export const CardList = ({ children }) => {
  return <CardListBase>{children}</CardListBase>;
};

/* ------------------------------------------------------------------------------------------ */

export const ItemList = styled.li`
  display: flex;
  margin: 5px;
  padding: 5px;
`;

/* ------------------------------------------------------------------------------------------ */

const CardPictureBase = styled.picture``;
export const CardPicture = ({ className, style, children }) => {
  return (
    <CardPictureBase className={className} style={style}>
      {children}
    </CardPictureBase>
  );
};

/* ------------------------------------------------------------------------------------------ */

export const CardImage = styled.img`
  &.logo {
    width: 150px;
    margin: 0 5px;
  }
`;
