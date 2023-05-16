import {
  Section,
  Paragraph,
  Subtitle,
  List,
  Anchor,
  ItemList,
  Small,
} from "../../containers/ContactInfo/ContactInfo";

const ContactInfo = (props) => {
  return (
    <Section>
      <Subtitle className="contact__subtitle">{props.title}</Subtitle>
      <Paragraph className="contact__paragraph">{props.paragraph}</Paragraph>
      <List className="contact__list">
        {props.socialMedia.map((item) => {
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
      <Small className="contact__phrase">{props.phrase}</Small>
    </Section>
  );
};

export default ContactInfo;
