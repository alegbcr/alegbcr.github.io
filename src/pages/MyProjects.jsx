import { useContext, useEffect, useState } from "react";
// Data
import AppContext from "../context/AppContext";
// components
import { Section } from "../components/Section";
import { Paragraph, Subtitle } from "../components/Texts";
import { Button } from "../components/Button";
// Icons
import { FaArrowRight, FaPlus, FaMinus } from "react-icons/fa";
import { List } from "../components/List";
import { ItemList } from "../components/ItemList";
import { Container } from "../components/Container";

const MyTools = () => {
  const { state } = useContext(AppContext);
  const [clicked, setClicked] = useState(false);

  const handleToggle = (index) => {
    setClicked(!clicked);
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <Section>
      <Subtitle className="projects__subtitle">{state.myTools.title}</Subtitle>
      <Paragraph className="project__subtitle--paragraph">
        {state.myTools.description}
      </Paragraph>
      <List className="my-project__list">
        {state.myTools.works.map((work, index) => {
          return (
            <ItemList key={work.title} className="my-project__item-list">
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
                <h3 style={{ margin: "8px 16px" }}>{work.title}</h3>
                {clicked === index ? (
                  <FaMinus style={{ margin: "8px 10px" }} />
                ) : (
                  <FaPlus style={{ margin: "8px 10px" }} />
                )}
              </div>

              <Container className={clicked === index ? "display" : "none"}>
                <Paragraph
                  style={{ textAlign: "start", width: "90%", margin: "0 auto" }}
                >
                  {work.description}
                </Paragraph>
                <Button className="my-project">
                  {work.reference ? (
                    <a target="blank" href={work.reference}>
                      {work.buttonText}
                    </a>
                  ) : (
                    work.buttonText
                  )}
                  <FaArrowRight style={{ marginLeft: "10px" }} />
                </Button>
              </Container>
            </ItemList>
          );
        })}
      </List>
    </Section>
  );
};

export default MyTools;
