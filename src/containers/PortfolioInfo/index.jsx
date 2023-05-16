import { Link } from "react-router-dom";

// Components
import {
  Section,
  Container,
  Paragraph,
  Subtitle,
  SubtitleSecondary,
  List,
  ItemList,
} from "./PortfolioInfo";

// Icon
import { FaArrowRight } from "react-icons/fa";

const PortfolioInfo = (props) => {
  return (
    <Section>
      <Subtitle className="subtitle-base">{props.title}</Subtitle>

      {/* Portfolio */}

      <List className="card__container">
        {props.works.map((work) => {
          return (
            <ItemList key={work.id} className="card__container--items">
              <Container className="largeWidth">
                <SubtitleSecondary>{work.company}</SubtitleSecondary>
                <Paragraph>{`${work.work} / ${work.profesion}`}</Paragraph>
              </Container>
              <Container className="card__container--button">
                {props.widthSize >= 1024 && (
                  <Paragraph
                    style={{
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Más info
                  </Paragraph>
                )}
                <Link
                  style={{ display: "flex", alignSelf: "center" }}
                  to={`/portfolio/${work.id}`}
                >
                  <FaArrowRight
                    style={{
                      padding: "1rem",
                      fontSize: "1rem",
                    }}
                  />
                </Link>
              </Container>
            </ItemList>
          );
        })}
      </List>
    </Section>
  );
};

export default PortfolioInfo;
