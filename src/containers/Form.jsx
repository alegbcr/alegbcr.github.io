import styled from "styled-components";
import { Button } from "../components/Button";

const FormContainerBase = styled.form`
  height: 350px;
  width: 80%;
  padding: 10px;
  display: flex;
  flex-direction: column;

  &.contact-form__container {
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border-top: 4px solid var(--blue-light-color);
    border-bottom: 4px solid var(--blue-light-color);
    background-color: var(--black-color);
    z-index: 10;
  }

  &.contact-location__container {
    margin-top: 15px;
    height: 200px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    /* border-top: 4px solid var(--blue-light-color); */
    border-bottom: 4px solid var(--blue-light-color);
    background-color: var(--black-color);
    z-index: 10;
  }
`;
export const FormContainer = ({ className, children }) => {
  return (
    <FormContainerBase className={className}>{children}</FormContainerBase>
  );
};

/* ------------------------------------------------------------------------------------------ */

const FormBackgroundImageContainerBase = styled.div`
  display: flex;
  align-items: end;
  position: fixed;
  height: 100vh;
  z-index: 0;
  opacity: 0.1;
`;

export const FormBackgroundImageContainer = ({ className, children }) => {
  return (
    <FormBackgroundImageContainerBase className={className}>
      {children}
    </FormBackgroundImageContainerBase>
  );
};

/* ------------------------------------------------------------------------------------------ */

export const FormButton = styled(Button)`
  border: none;
  width: 100%;
  margin-top: 8px;
  padding: 10px 16px;
  border-radius: var(--border-radius);
  background-color: var(--blue-color);
`;

/* ------------------------------------------------------------------------------------------ */

const FormBackgroundImageBase = styled.img`
  &.contact-form__image {
    box-shadow: 0 0 20px 2px var(--white-alpha-color);
  }
`;
export const FormBackgroundImage = ({ className, src, alt, children }) => {
  return (
    <FormBackgroundImageBase className={className} alt={alt} src={src}>
      {children}
    </FormBackgroundImageBase>
  );
};

/* ------------------------------------------------------------------------------------------ */

const InputGroupBase = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px;
  margin: 5px 0;
`;

export const InputGroup = ({ className, children }) => {
  return <InputGroupBase className={className}>{children}</InputGroupBase>;
};

export const Label = styled.label`
  position: relative;
  padding-left: 10px;
  margin-bottom: 2px;
`;

export const Input = styled.input`
  border-radius: 10px;
  padding: 0.5rem;
  border: none;
`;
export const Textarea = styled.textarea`
  border-radius: 10px;
  height: 3rem;
  padding: 0.5rem;
  border: none;
`;

/* ------------------------------------------------------------------------------------------ */
