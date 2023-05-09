import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// Components
import { Section } from "../components/Section";
import { Container } from "../components/Container";
import { Paragraph, Subtitle, SubtitleSecondary } from "../components/Texts";
// Custom Hooks
import AppContext from "../context/AppContext";
import { Image } from "../components/Image";
import { List } from "../components/List";
import { ItemList } from "../components/ItemList";
// icons
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <Section>
        <Subtitle className="portfolio__subtitle">Mi Portfolio</Subtitle>

        {/* Portfolio */}
        <Container className="portfolio__container--works">
          <List className="portfolio__list">
            {state.portfolio.works.map((work) => {
              return (
                <ItemList key={work.id} className="portfolio__item-list">
                  <div>
                    <SubtitleSecondary>{work.company}</SubtitleSecondary>
                    <Paragraph className="portfolio__paragraph">{`${work.work} / ${work.profesion}`}</Paragraph>
                  </div>
                  <Link to={`/portfolio/${work.id}`}>
                    <FaArrowRight
                      style={{
                        padding: "1rem",
                        fontSize: "1rem",
                      }}
                    />
                  </Link>
                </ItemList>
              );
            })}
          </List>
        </Container>

        {/* Logos */}
        <Container className="portfolio__container--logos">
          <SubtitleSecondary>{state.logos.title}</SubtitleSecondary>
          <Container className="portfolio__container-logos--items">
            {state.logos.works.map((work) => {
              return (
                <picture
                  key={work.id}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <img
                    style={{ width: "100px" }}
                    src={work.image}
                    alt={work.name}
                  />
                </picture>
              );
            })}
          </Container>
        </Container>
        {/* Designs */}
        <Container className="portfolio__container--gallery">
          <SubtitleSecondary>{state.designs.title}</SubtitleSecondary>
          <Container
            style={{
              display: "flex",
              flexWrap: "wrap",
              overflow: "hidden",
              overflowY: "scroll",
              justifyContent: "center",
            }}
          >
            {state.designs.works.map((work) => {
              return (
                <picture
                  key={work.id}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "100%",
                    margin: "4px",
                  }}
                >
                  <Image
                    className={
                      work.size
                        ? "portfolio__design--image size"
                        : "portfolio__design--image"
                    }
                    src={work.image}
                    alt={work.name}
                  />
                </picture>
              );
            })}
          </Container>
        </Container>
      </Section>
    </>
  );
};

export default Portfolio;
