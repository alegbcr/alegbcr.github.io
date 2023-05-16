// Components
import {
  Container,
  Image,
  Picture,
  Section,
  Subtitle,
} from "../../containers/Gallery/Gallery";

const Gallery = (props) => {
  return (
    <Section>
      {/* Logos */}
      <Container className="gallery__container">
        <Subtitle>{props.title}</Subtitle>
        <Container className="gallery__container--items">
          {props.works.map((work) => {
            return (
              <Picture key={work.id}>
                <Image src={work.image} alt={work.name} />
              </Picture>
            );
          })}
        </Container>
      </Container>
    </Section>
  );
};

export default Gallery;
