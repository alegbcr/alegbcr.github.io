import { useContext } from "react";
import { useParams } from "react-router-dom";

// Data
import AppContext from "../context/AppContext";
// components
import { Button } from "../components/Button";

// styles
import "../styles/portfolio_my_projects.css";

const PortfolioMyProjects = () => {
  const { state } = useContext(AppContext);
  const params = useParams();
  const id = params.id - 1;

  const project = state.portfolio.webDevelopment.myProjects[id];

  return (
    <div className="my_projects_description__main-container">
      <div className="my_projects_description__title--container">
        <div>
          <h1>{project.work}</h1>
          <h2>{project.company}</h2>
        </div>
      </div>

      <div className="my_projects_description__content--container">
        {project.description.map((text, index) => {
          return (
            <p key={index} className="my_projects_description__text">
              {text.paragraph}
            </p>
          );
        })}

        <picture className="my_projects_description__image-rrss--container">
          <img src={project.imagePreview} alt="" />
        </picture>

        <div className="flex mt-4 mb-2">
          {project.technologies.map((tech, index) => {
            return (
              <picture key={index} className="mx-1">
                <img src={tech.logo} alt="" className="w-[25px]" />
              </picture>
            );
          })}
        </div>

        {project.links && (
          <div className="my_projects_description__buttons--container">
            {project.links.map((link, index) => {
              return <Button key={index} text={link.name} link={link.link} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioMyProjects;
