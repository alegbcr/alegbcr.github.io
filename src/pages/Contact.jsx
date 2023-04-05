import React, { useContext } from "react";
// Components
import { Section } from "../components/Section";
import { Paragraph, Subtitle } from "../components/Texts";
// Data
import AppContext from "../context/AppContext";
// Icons
import { List } from "../components/List";
import { Anchor } from "../components/Anchor";
import { ItemList } from "../components/ItemList";
import { Small } from "../components/Small";

const Contact = () => {
  const { state } = useContext(AppContext);

  return (
    <Section className="contact__section">
      <Subtitle className="contact__subtitle">Contacto</Subtitle>
      <Paragraph className="contact__paragraph">
        Da el primer paso hacia un sitio web o alguno de los servicios que puedo
        brindarte a la medida de tu proyecto.
      </Paragraph>
      <List className="contact__list">
        {state.info.socialMedia.map((item) => {
          return (
            <ItemList key={item.id}>
              <Anchor
                href={item.reference}
                target="blank"
                className="contact__anchor"
              >
                {item.iconName}
              </Anchor>
            </ItemList>
          );
        })}
      </List>
      <Small className="contact__phrase">Stay focus on your dreams!</Small>
    </Section>
  );
};

export default Contact;
