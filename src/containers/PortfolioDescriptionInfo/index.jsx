import React from "react";

import {
  Section,
  Button,
  Picture,
  Image,
  Container,
  List,
  ItemList,
} from "./PortfolioDescriptionInfo";

const PortfolioDescriptionInfo = (props) => {
  return (
    <>
      <Section className="info__section">
        <Container className="info_main__container">
          <Picture>
            <Image src={props.companyLogo} />
          </Picture>
          {/* Company Descripton */}
          <Container className="info__container">
            <List
              style={{
                display: "flex",
                margin: "1rem auto",
                flexDirection: "column",
              }}
            >
              <ItemList>
                <h3>Categoría</h3>
                <p>{props.profesion}</p>
              </ItemList>
              <ItemList>
                <h3>Año</h3>
                <p>{props.age}</p>
              </ItemList>
              <ItemList>
                <h3>Cliente</h3>
                <p>{props.company}</p>
              </ItemList>
            </List>
            {props.description.map((paragraph) => {
              return <p key={paragraph.paragraph}>{paragraph.paragraph}</p>;
            })}
          </Container>
        </Container>

        {/* Company Works */}

        <Container className="works_main__container">
          {props.links ? (
            <div>
              <h3>Landing Page</h3>
              <picture style={{ display: "flex", maxWidth: "100%" }}>
                <img
                  src={props.image}
                  style={{ width: "100%", display: "flex", alignItems: "end" }}
                />
              </picture>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: ".5rem 0",
                }}
              >
                {props.links.map((link) => {
                  return (
                    <Button key={link.name} style={{ margin: "0 0.5rem" }}>
                      <a href={`${link.link}`}>{link.name}</a>
                    </Button>
                  );
                })}
              </div>
            </div>
          ) : null}

          <div>
            <h3>Diseño Gráfico</h3>
            <picture style={{ display: "flex", maxWidth: "100%" }}>
              <img
                src={props.imageRRSS}
                style={{ width: "100%", display: "flex", alignItems: "end" }}
              />
            </picture>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default PortfolioDescriptionInfo;
