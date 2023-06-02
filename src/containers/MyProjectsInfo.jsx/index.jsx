import { useState } from "react";

// Icons
import { FaArrowRight, FaPlus, FaMinus } from "react-icons/fa";

// Components
import {
  Button,
  Container,
  ItemList,
  List,
  Paragraph,
  Section,
  Subtitle,
} from "./MyProjectsInfo";

const MyProjectsInfo = (props) => {
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
      <Subtitle className="subtitle-base">{props.title}</Subtitle>
      <Paragraph>{props.description}</Paragraph>
      <List className="my-project__list">
        {props.works.map((work, index) => {
          return (
            <>
              {work.reference ? (
                <ItemList key={work.title}>
                  <Container
                    className="my-project__items--title"
                    onClick={() => handleToggle(index)}
                    key={index}
                  >
                    <h3 style={{ margin: "8px" }}>{work.title}</h3>
                    {clicked === index ? (
                      <FaMinus style={{ margin: "8px 10px" }} />
                    ) : (
                      <FaPlus style={{ margin: "8px 10px" }} />
                    )}
                  </Container>

                  <Container className={clicked === index ? "display" : "none"}>
                    {work.description.map((item) => {
                      return (
                        <Paragraph
                          key={item.id}
                          style={{ width: "90%", margin: "0 auto" }}
                        >
                          {item.paragraph}
                        </Paragraph>
                      );
                    })}
                    <Button>
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
              ) : null}
            </>
          );
        })}
      </List>
    </Section>
  );
};

export default MyProjectsInfo;
