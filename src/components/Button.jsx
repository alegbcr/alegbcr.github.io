import styled from "styled-components";

export const ButtonBase = styled.button`
  border: none;
  padding: 0.7rem 3.5rem;
  border-radius: var(--border-radius);

  /* My Projects */
  &.my-project {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    color: var(--white-color);
    background-color: var(--blue-color);
  }

  /* Contact */
  &.contact__button {
    display: block;
    margin-top: 15px;
    background-color: var(--blue-color);
  }

  &:hover {
    background-color: var(--blue-light-color);
    transition: ease-out 0.4s;
  }
`;

export const Button = ({ buttonAction, classNames, children }) => {
  return (
    <ButtonBase onClick={buttonAction} className={classNames}>
      {children}
    </ButtonBase>
  );
};