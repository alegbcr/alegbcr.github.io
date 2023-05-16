import { useContext } from "react";

// Components
import PortfolioInfo from "../containers/PortfolioInfo";
import Gallery from "../containers/Gallery";

// Custom Hooks
import AppContext from "../context/AppContext";

const Portfolio = () => {
  const { state, widthSize } = useContext(AppContext);

  return (
    <>
      <PortfolioInfo
        title="Mi Portfolio"
        works={state.portfolio.works}
        widthSize={widthSize}
      />
      <Gallery title={state.logos.title} works={state.logos.works} />
      <Gallery title={state.designs.title} works={state.designs.works} />
    </>
  );
};

export default Portfolio;
