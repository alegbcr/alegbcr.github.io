import styled from "styled-components";

const SectionBase = styled.section`
  position: relative;
  display: flex;
  overflow: hidden;

  &.center {
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &.experience {
    height: 290px;
    flex-direction: column;
    padding-top: 1rem;
    overflow: hidden;
  }

  /* hide scrollbar but allow scrolling */
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

export const Section = ({ className, style, children }) => {
  return (
    <SectionBase className={className} style={style}>
      {children}
    </SectionBase>
  );
};