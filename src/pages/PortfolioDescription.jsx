import { useContext } from "react";
import { useParams } from "react-router-dom";

// Data
import AppContext from "../context/AppContext";

// Components
import PortfolioDescriptionInfo from "../containers/PortfolioDescriptionInfo";

const PortfolioDescription = () => {
  const { state } = useContext(AppContext);
  const params = useParams();
  const getId = params.id;
  const id = getId - 1;

  return (
    <>
      <PortfolioDescriptionInfo
        companyLogo={state.portfolio.works[id].companyLogo}
        profesion={state.portfolio.works[id].profesion}
        age={state.portfolio.works[id].age}
        company={state.portfolio.works[id].company}
        description={state.portfolio.works[id].description}
        links={state.portfolio.works[id].links}
        image={state.portfolio.works[id].image}
        imageRRSS={state.portfolio.works[id].imageRRSS}
      />
    </>
  );
};

export default PortfolioDescription;
