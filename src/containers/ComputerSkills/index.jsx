import { useState } from "react";

// Components
import {
  Section,
  Container,
  ContainerList,
  ItemList,
  Subtitle,
  Picture,
} from "./ComputerSkills";

// Icons
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const ComputerSkills = (props) => {
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
      <Subtitle>{props.title}</Subtitle>
      <ContainerList>
        {props.computerSkills.map((computerSkill, index) => {
          return (
            <ItemList
              key={computerSkill.id}
              className="computer-skill__items--container"
            >
              <Container
                className="computer-skill__items--items"
                onClick={() => handleToggle(index)}
                key={index}
              >
                <h3 style={{ margin: "8px 16px" }}>{computerSkill.name}</h3>
                {clicked === index ? (
                  <FaAngleUp style={{ margin: "8px 10px" }} />
                ) : (
                  <FaAngleDown style={{ margin: "8px 10px" }} />
                )}
              </Container>
              <Container
                className={`computer-skill__items--icons ${
                  clicked === index ? "display" : "none"
                }`}
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
      </ContainerList>
    </Section>
  );
};

export default ComputerSkills;
