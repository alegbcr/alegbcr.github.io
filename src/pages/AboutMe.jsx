import { useContext } from "react";
// Data
import AppContext from "../context/AppContext";
// Components
import { Section } from "../components/Section";
import { Container } from "../components/Container";
import { Picture } from "../components/Picture";
import { Image } from "../components/Image";
import { Title, Subtitle, Paragraph } from "../components/Texts";
import { List } from "../components/List";
import { Anchor } from "../components/Anchor";
import { Button } from "../components/Button";
import { Small } from "../components/Small";
import {
  CardContainer,
  Card,
  CardTitle,
  CardList,
  ItemList,
  CardSubtitle,
  CardDescription,
} from "../containers/Card";

const AboutMe = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      {/* Intro */}
      <Section>
        <Picture className="background">
          <Image
            className="background"
            src={state.intro.picture}
            alt={state.intro.detail}
          />
        </Picture>
        <Container className="overlay">
          <Container className="base">
            <div>
              <Subtitle className="title__greeting">
                {state.intro.greeting}
              </Subtitle>
              <Subtitle className="title__greeting">
                {state.intro.name}
              </Subtitle>
              <Title className="title__description">
                {state.intro.description}
              </Title>
              <List className="icon__list">
                {state.info.socialMedia.map((item) => (
                  <li key={item.id}>
                    <Anchor
                      className="icon"
                      target="blank"
                      href={item.reference}
                    >
                      {item.iconName}
                    </Anchor>
                  </li>
                ))}
              </List>
              <Button classNames="contact__button">Contacto</Button>
            </div>
            <Small className="phrase">Never Give Up!!!</Small>
          </Container>
        </Container>
      </Section>

      {/* About me */}
      <Section className="center">
        <Subtitle className="subtitle">Un poco más sobre mí</Subtitle>
        {state.about.paragraphs.map((paragraph) => {
          return (
            <Paragraph key={paragraph.paragraph}>
              {paragraph.paragraph}
            </Paragraph>
          );
        })}
      </Section>

      {/* Computer Skills */}
      <Section className="center">
        <Subtitle className="subtitle">Computer Skills</Subtitle>
        <CardContainer className="column">
          {state.computerSkills.map((computerSkill) => {
            return (
              <Card key={computerSkill.id}>
                <CardTitle>{computerSkill.name}</CardTitle>
                <CardList>
                  {computerSkill.data.map((itemData) => {
                    return (
                      <ItemList key={itemData.name}>
                        <img
                          style={{ width: "40px" }}
                          src={itemData.logo}
                          alt={`logo ${itemData.name}`}
                        />
                      </ItemList>
                    );
                  })}
                </CardList>
              </Card>
            );
          })}
        </CardContainer>
      </Section>

      {/* My experience */}
      <Section className="center">
        <Subtitle className="subtitle">Mi experiencia</Subtitle>
        <CardContainer className="row">
          {state.experienceTimeline.companies.map((company) => {
            return (
              <Card key={company.name} className="row">
                <CardSubtitle style={{ textAlign: "end" }}>
                  {company.years}
                </CardSubtitle>
                <CardTitle>{company.name}</CardTitle>
                <CardDescription className="experience">
                  {company.description}
                </CardDescription>
              </Card>
            );
          })}
        </CardContainer>
      </Section>
    </>
  );
};

export default AboutMe;
