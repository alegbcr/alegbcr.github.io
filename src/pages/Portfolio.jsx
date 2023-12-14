import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Custom Hooks
import AppContext from "../context/AppContext";
import MyProjetcs from "../components/MyProjects";
import MyArts from "../components/MyArts";
// styles
import "../styles/portfolio.css";

const Portfolio = () => {
  const [category, setCategory] = useState("Web Development");
  const [style, setStyle] = useState("");
  const { state } = useContext(AppContext);
  const navigate = useNavigate();

  const handleCategory = (category) => {
    setCategory(category);
  };

  const handleNavigateWorks = (id) => {
    navigate(`/portfolio/works/${id}`);
  };
  const handleNavigateMyProjects = (id) => {
    navigate(`/portfolio/my-projects/${id}`);
  };

  return (
    <div>
      <ul className="portfolio_menu__container">
        {state.porfolioCategories.map((category, index) => (
          <li
            key={index}
            onClick={() => handleCategory(category)}
            className={`portfolio_menu__item `}
          >
            {category}
          </li>
        ))}
      </ul>

      {category === "Web Development" && (
        <>
          <div className="portfolio__container">
            <h2 className="portfolio_projects__title--works">
              Trabajos realizados
            </h2>
            <div className="portfolio_projects__container--works">
              <ul className="portfolio_projects__list--works">
                {state.portfolio.webDevelopment.works.map((projects, index) => (
                  <MyProjetcs
                    key={index}
                    id={projects.id}
                    image={projects.imagePreview}
                    work={projects.work}
                    index={index}
                    company={projects.company}
                    age={projects.age}
                    handleAction={handleNavigateWorks}
                  />
                ))}
              </ul>
            </div>

            <h2 className="portfolio_projects__title--projects">
              Proyectos personales
            </h2>
            <div className="portfolio_projects__container--my-projects">
              <ul className="portfolio_projects__list--my-projects">
                {state.portfolio.webDevelopment.myProjects.map(
                  (projects, index) => (
                    <MyProjetcs
                      key={index}
                      id={projects.id}
                      image={projects.imagePreview}
                      work={projects.work}
                      index={index}
                      company={projects.company}
                      age={projects.age}
                      handleAction={handleNavigateMyProjects}
                      imageClass="my_projects__image--image-arts"
                    />
                  )
                )}
              </ul>
            </div>
          </div>
        </>
      )}

      {category === "Diseño Gráfico" && (
        <>
          <div className="portfolio__container">
            <h2 className="portfolio_projects__title--logos">Logos</h2>
            <div className="portfolio_projects__container--logos">
              <ul className="portfolio_projects__list--logos">
                {state.portfolio.graphicDesign.logos.map((projects, index) => (
                  <MyArts
                    key={index}
                    image={projects.image}
                    work={projects.name}
                  />
                ))}
              </ul>
            </div>

            <h2 className="portfolio_projects__title--projects">
              Artes graficas
            </h2>
            <div className="portfolio_projects__container--my-arts">
              <ul className="portfolio_projects__list--my-arts">
                {state.portfolio.graphicDesign.arts.map((projects, index) => (
                  <MyArts
                    key={index}
                    image={projects.image}
                    imageClass="my_arts__image--image-arts"
                  />
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Portfolio;
