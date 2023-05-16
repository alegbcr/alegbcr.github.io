import React from "react";

import { Section, Button } from "./PortfolioDescriptionInfo";

const PortfolioDescriptionInfo = (props) => {
  return (
    <Section className="portfolio-description__section">
      <picture
        style={{
          gridColumn: "1 / -1",
          gridRow: "1 / 6",
          alignSelf: "end",
          justifySelf: "center",
          display: "flex",
        }}
      >
        <img
          src={props.companyLogo}
          style={{
            width: "350px",
            display: "flex",
          }}
        />
      </picture>
      <div
        style={{
          gridColumn: "1 / -1",
          gridRow: "6 / -1",
          width: "85%",
          justifySelf: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            margin: "0 auto",
            justifyContent: "space-between",
            marginTop: ".8rem",
          }}
        >
          <h2>Categoría</h2>
          <p>{props.profesion}</p>
        </div>
        <div
          style={{
            gridColumn: "1 / -1",
            display: "flex",
            justifyContent: "space-between",
            marginTop: ".8rem",
          }}
        >
          <h2>Año</h2>
          <p>{props.age}</p>
        </div>
        <div
          style={{
            gridColumn: "1 / -1",
            display: "flex",
            justifyContent: "space-between",
            marginTop: ".8rem",
          }}
        >
          <h2>Cliente</h2>
          <p>{props.company}</p>
        </div>
        <p
          style={{
            gridColumn: "1 / -1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: ".8rem",
          }}
        >
          {props.description.map((paragraph) => {
            return <p key={paragraph.paragraph}>{paragraph.paragraph}</p>;
          })}
        </p>
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
      </div>
    </Section>
  );
};

export default PortfolioDescriptionInfo;
