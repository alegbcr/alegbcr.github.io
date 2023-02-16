import { useContext } from "react";
// Components
import { Section } from "../components/Section";
import { Container } from "../components/Container";
import { Subtitle } from "../components/Texts";
import {
  CardContainer,
  CardDescription,
  CardTitle,
  CardPicture,
  CardImage,
} from "../containers/Card";
// Custom Hooks
import AppContext from "../context/AppContext";

const Portfolio = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <Section className="center">
        <Subtitle className="subtitle">Mi Portfolio</Subtitle>
        {/* Logos */}
        <Container className="base">
          <CardTitle>{state.logos.title}</CardTitle>
          <CardDescription>{state.logos.description}</CardDescription>
          <CardContainer className="row-scroll">
            {state.logos.works.map((work) => {
              return (
                <CardImage
                  key={work.name}
                  src={work.image}
                  className="logo"
                  alt={work.name}
                />
              );
            })}
          </CardContainer>
        </Container>
        {/* Designs */}
        <Container className="base">
          <CardTitle>{state.designs.title}</CardTitle>
          <CardDescription>{state.designs.description}</CardDescription>
          <CardContainer className="row-scroll">
            {state.designs.works.map((work) => {
              return (
                <CardImage
                  key={work.name}
                  src={work.image}
                  className="logo"
                  alt={work.name}
                />
              );
            })}
          </CardContainer>
        </Container>
        {/* Portfolio */}
        <Container className="base">
          <CardTitle>{state.portfolio.title}</CardTitle>
          <CardDescription>{state.portfolio.description}</CardDescription>
          <Container>
            {state.portfolio.works.map((work) => {
              return (
                <CardContainer key={work.id} className="card__container">
                  <div style={{ display: "flex", alignItems: "end" }}>
                    <div>
                      <CardTitle>{work.company}</CardTitle>
                      <CardDescription>{`${work.work} / ${work.profesion}`}</CardDescription>
                    </div>
                    <CardPicture>
                      <CardImage
                        src={work.image}
                        className="logo"
                        alt={work.name}
                      />
                    </CardPicture>
                  </div>
                  <CardDescription>{work.description}</CardDescription>
                </CardContainer>
              );
            })}
          </Container>
        </Container>
      </Section>
    </>
  );
};

export default Portfolio;
