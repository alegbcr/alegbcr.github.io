import React, { useContext } from "react";
// Components
import { Section } from "../components/Section";
import { Subtitle } from "../components/Texts";
import {
  Textarea,
  FormButton,
  FormContainer,
  Input,
  Label,
  InputGroup,
} from "../containers/Form";
// Data
import AppContext from "../context/AppContext";
// Icons
import { FaMapPin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <Section className="center">
        <Subtitle className="subtitle">Contacto</Subtitle>
        <FormContainer className="contact-form__container">
          <InputGroup>
            <Label>Cuál es tu nombre?</Label>
            <Input placeholder="Cuál es tu nombre?" />
          </InputGroup>
          <InputGroup>
            <Label>Cuál es tu e-mail?</Label>
            <Input placeholder="Cuál es tu e-mail?" />
          </InputGroup>
          <InputGroup>
            <Label>Hablame acerca de tu proyecto!</Label>
            <Textarea />
          </InputGroup>
          <FormButton text="Enviar mensaje" />
        </FormContainer>
        <FormContainer className="contact-location__container">
          <p>
            Da el primer paso hacia un sitio web o alguno de los servicios que
            puedo brindarte a la medida de tu proyecto.
          </p>
          <ul style={{ display: "flex", flexDirection: "column" }}>
            <li style={{ display: "flex" }}>
              <FaMapPin />
              <span style={{ marginLeft: "8px" }}>
                Guadalupe, Goicoechea, Costa Rica
              </span>
            </li>
            <li style={{ display: "flex" }}>
              <FaPhoneAlt />
              <span style={{ marginLeft: "8px" }}>+(506) 7026 4835</span>
            </li>
            <li style={{ display: "flex" }}>
              <FaEnvelope />
              <span style={{ marginLeft: "8px" }}>info@alegbcr.tech</span>
            </li>
          </ul>
        </FormContainer>
      </Section>
    </>
  );
};

export default Contact;
