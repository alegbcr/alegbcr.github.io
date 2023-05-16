import { Section, Container, Paragraph, Subtitle } from "./AboutMe";

const AboutMe = (props) => {
  return (
    <Section>
      <Subtitle>{props.title}</Subtitle>
      <Container className="about-me__container">
        {props.paragraphs.map((paragraph) => {
          return (
            <Paragraph
              className="about-me__paragraph"
              key={paragraph.paragraph}
            >
              {paragraph.paragraph}
            </Paragraph>
          );
        })}
      </Container>
    </Section>
  );
};

export default AboutMe;
