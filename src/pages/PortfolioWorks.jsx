import { useContext } from "react";
import { useParams } from "react-router-dom";

// Data
import AppContext from "../context/AppContext";
// components
import { Button } from "../components/Button";

// styles
import "../styles/portfolio_works.css";

const PortfolioWorks = () => {
  const { state } = useContext(AppContext);
  const params = useParams();
  const id = params.id - 1;

  const project = state.portfolio.webDevelopment.works[id];

  return (
    <div className="portfolio_description__main-container">
      <div className="portfolio_description__title--container">
        <div>
          <h1>{project.work}</h1>
          <h2>{project.company}</h2>
        </div>
      </div>

      <div className="portfolio_description__content--container">
        <div>
          {project.descriptionRRSS && (
            <p className="portfolio_description__text--rrss">
              {project.descriptionRRSS}
            </p>
          )}

          {project.imageRRSS && (
            <picture className="portfolio_description__image-rrss--container">
              <img src={project.imageRRSS} alt="" />
            </picture>
          )}
        </div>

        <div>
          {project.descriptionWeb && (
            <p className="portfolio_description__text--web">
              {project.descriptionWeb}
            </p>
          )}

          {project.image && (
            <picture className="portfolio_description__image-project--container">
              <img src={project.image} alt="" />
            </picture>
          )}

          {project.links && (
            <div className="portfolio_description__buttons--container">
              {project.links.map((link, index) => {
                return <Button key={index} text={link.name} link={link.link} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioWorks;
