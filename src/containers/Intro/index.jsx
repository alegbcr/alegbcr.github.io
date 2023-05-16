// Components
import {
  Section,
  Container,
  Picture,
  Image,
  Title,
  Subtitle,
  Paragraph,
  Button,
  Small,
} from "../../containers/Intro/Intro";

const Intro = (props) => {
  return (
    <Section>
      <Picture className="background__image-container">
        <Image
          className="background__image"
          src={props.bgImage}
          alt={props.imgDetail}
        />
      </Picture>

      <Container className="about-me__overlay">
        <Container className="base">
          <Container className="intro__information">
            <Paragraph className="title">{props.greeting}</Paragraph>
            <Subtitle className="title__greeting">{props.name}</Subtitle>
            <Title className="title__description">{props.description}</Title>
            <Button
              className="contact__button"
              onClick={props.handleNavigation}
            >
              {props.buttonText}
            </Button>
          </Container>
        </Container>
        <Small className="phrase">{props.phrase}</Small>
      </Container>
    </Section>
  );
};

export default Intro;
