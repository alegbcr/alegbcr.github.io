import { Link, useNavigate } from "react-router-dom";
// Icon
import { FaArrowRight } from "react-icons/fa";
// styles
import "../styles/portfolio_info_card.css";

const PortfolioInfoCard = ({ id, company, work, image, age }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/portfolio/${id}`);
  };

  return (
    <li className="portfolio_info_card__container">
      <picture
        className="portfolio_info_card__image--container"
        onClick={handleNavigate}
      >
        <img className="portfolio_info_card__image--image" src={image} />
      </picture>
      <div className="portfolio_info_card__information--container">
        <h3 className="portfolio_info_card__information--title">{`${work}`}</h3>
        <div className="portfolio_info_card__information--company-container">
          <p className="portfolio_info_card__information--company-paragraph">
            {company}
          </p>
          <p className="portfolio_info_card__information--company-paragraph text-end">
            {age}
          </p>
        </div>
      </div>
    </li>
  );
};

export default PortfolioInfoCard;
