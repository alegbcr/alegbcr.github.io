import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// Data
import AppContext from "../context/AppContext";
// Components
import { Section } from "../components/Section";
import { Container } from "../components/Container";
import { Picture } from "../components/Picture";
import { Image } from "../components/Image";
import {
  Title,
  Subtitle,
  Paragraph,
  SubtitleSecondary,
} from "../components/Texts";
import { List } from "../components/List";
import { Anchor } from "../components/Anchor";
import { Button } from "../components/Button";
import { Small } from "../components/Small";
import { ItemList } from "../components/ItemList";
// Icons
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const AboutMe = () => {
  const { state } = useContext(AppContext);
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/contact");
  };

  const handleToggle = (index) => {
    setClicked(!clicked);
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <>
      {/* Intro */}
      <Section>
        <Picture className="background__image-container">
          <Image
            className="background__image"
            src={state.intro.picture}
            alt={state.intro.detail}
          />
        </Picture>

        <Container className="about-me__overlay">
          <Container className="base">
            <Container className="intro__information">
              <Paragraph className="title">{state.intro.greeting}</Paragraph>
              <Subtitle className="title__greeting">
                {state.intro.name}
              </Subtitle>
              <Title className="title__description">
                {state.intro.description}
              </Title>
              {/* <h5 style={{ marginTop: "1rem" }}>
                Contactame desde mis redes sociales
              </h5>
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
              </List> */}
              <Button className="contact__button" onClick={handleNavigation}>
                Contacto
              </Button>
            </Container>
          </Container>
          <Small className="phrase">Never Give Up!!!</Small>
        </Container>
      </Section>

      {/* About me */}
      <Section className="about-me__section">
        <Subtitle className="about-me__subtitle">Un poco más sobre mí</Subtitle>
        <Container className="about-me__container--paragraph">
          {state.about.paragraphs.map((paragraph) => {
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

      {/* Computer Skills */}
      <Section className="computer-skill__section">
        <Subtitle className="about-me__subtitle">Computer Skills</Subtitle>
        <List className="computer-skill__list">
          {state.computerSkills.map((computerSkill, index) => {
            return (
              <ItemList
                key={computerSkill.id}
                className="computer-skill__item-list "
              >
                <div
                  onClick={() => handleToggle(index)}
                  key={index}
                  style={{
                    width: "95%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    padding: "8px",
                  }}
                >
                  <h3 style={{ margin: "8px 16px" }}>{computerSkill.name}</h3>
                  {clicked === index ? (
                    <FaAngleUp style={{ margin: "8px 10px" }} />
                  ) : (
                    <FaAngleDown style={{ margin: "8px 10px" }} />
                  )}
                </div>
                <Container
                  className={clicked === index ? "display" : "none"}
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "85%",
                    margin: "0 auto",
                  }}
                >
                  {computerSkill.data.map((itemData) => {
                    return (
                      <Picture key={itemData.name} style={{ margin: ".5rem" }}>
                        <img
                          style={{ width: "40px" }}
                          src={itemData.logo}
                          alt={`logo ${itemData.name}`}
                        />
                      </Picture>
                    );
                  })}
                </Container>
              </ItemList>
            );
          })}
        </List>
      </Section>

      {/* My experience */}
      <Section className="my-experience__section">
        <Subtitle className="about-me__subtitle">Mi experiencia</Subtitle>
        <List className="my-experience__list">
          {state.experienceTimeline.companies.map((company) => {
            return (
              <ItemList key={company.name} className="my-experience__item-list">
                <div
                  style={{
                    marginTop: "1rem",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <SubtitleSecondary style={{ width: "75%" }}>
                    {company.position}
                  </SubtitleSecondary>
                  <Paragraph className="subtitle-card">
                    {company.years}
                  </Paragraph>
                </div>
                <h4>{company.name}</h4>
                <Paragraph className="my-experience__paragraph">
                  {company.description}
                </Paragraph>
              </ItemList>
            );
          })}
        </List>
      </Section>
    </>
  );
};

export default AboutMe;
