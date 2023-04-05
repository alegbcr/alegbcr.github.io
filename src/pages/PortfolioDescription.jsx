import { useContext } from "react";
import { useParams } from "react-router-dom";

// Data
import AppContext from "../context/AppContext";

// Components
import { Section } from "../components/Section";

const PortfolioDescription = () => {
  const { state } = useContext(AppContext);
  const params = useParams();
  const getId = params.id;
  const id = getId - 1;

  return (
    <>
      <Section className="portfolio-description__section">
        <picture
          style={{
            gridColumn: "1 / -1",
            gridRow: "1 / 6",
            alignSelf: "end",
            display: "flex",
          }}
        >
          <img
            src={state.portfolio.works[id].image}
            style={{ width: "100vw", display: "flex", alignItems: "end" }}
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
            <p>{state.portfolio.works[id].profesion}</p>
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
            <p>{state.portfolio.works[id].age}</p>
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
            <p>{state.portfolio.works[id].company}</p>
          </div>
          <p
            style={{
              gridColumn: "1 / -1",
              display: "flex",
              justifyContent: "space-between",
              marginTop: ".8rem",
            }}
          >
            {state.portfolio.works[id].description}
          </p>
        </div>
      </Section>
    </>
  );
};

export default PortfolioDescription;
