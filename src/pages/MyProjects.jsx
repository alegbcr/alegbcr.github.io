import { useContext } from "react";
// Data
import AppContext from "../context/AppContext";
// components
import { Section } from "../components/Section";
import { Paragraph, Subtitle } from "../components/Texts";
import { CardContainer, CardDescription, CardTitle } from "../containers/Card";
import { Button } from "../components/Button";
// Icons
import { FaArrowRight } from "react-icons/fa";

const MyTools = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <Section className="center">
        <Subtitle className="subtitle">{state.myTools.title}</Subtitle>
        <Paragraph>{state.myTools.description}</Paragraph>
        {state.myTools.works.map((work) => {
          return (
            <CardContainer
              key={work.title}
              className="card__container card-project"
            >
              <div>
                <CardTitle>{work.title}</CardTitle>
                <CardDescription>{work.description}</CardDescription>
                <Button classNames="my-project">
                  {work.reference ? (
                    <a target="blank" href={work.reference}>
                      {work.buttonText}
                    </a>
                  ) : (
                    work.buttonText
                  )}
                  <FaArrowRight style={{ marginLeft: "10px" }} />
                </Button>
              </div>
            </CardContainer>
          );
        })}
      </Section>
    </>
  );
};

export default MyTools;
