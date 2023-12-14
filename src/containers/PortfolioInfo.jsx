import "../styles/portfolio_info.css";
// components
import { Button } from "../components/Button";

import PortfolioInfoCard from "../components/PortfolioInfoCard";
const PortfolioInfo = ({ title, works, widthSize }) => {
  return (
    <div className="portfolio_info__container">
      <h2 className="portfolio_info__title">{title}</h2>

      <ul className="portfolio_info__list">
        {works.map((work) => {
          return (
            <PortfolioInfoCard
              key={work.id}
              id={work.id}
              company={work.company}
              work={work.work}
              profesion={work.profesion}
              widthSize={widthSize}
              image={work.imagePreview}
              age={work.age}
            />
          );
        })}
      </ul>

      <div className="portfolio_info__button--container">
        <Button
          text="Ver más"
          className="portfolio_info__button--item bg-blue-light-color"
          link={"/portfolio"}
        />
      </div>
    </div>
  );
};

export default PortfolioInfo;
