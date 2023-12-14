import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// Data
import AppContext from "../context/AppContext";
// Assets
import imgBackground from "../../public/images/me.png";
// Containers
import Intro from "../containers/Intro";
import { AboutMe } from "../containers/AboutMe";
import { ComputerSkills } from "../containers/ComputerSkills";
import PortfolioInfo from "../containers/PortfolioInfo";
// import { MyExperience } from "../containers/MyExperience";

const Home = () => {
  const { state, isOpen, widthSize } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <>
      {!isOpen && (
        <>
          <Intro
            // bgImage={state.intro.picture}
            bgImage={imgBackground}
            imgDetail={state.intro.detail}
            greeting={state.intro.greeting}
            name={state.intro.name}
            description={state.intro.description}
            link={state.info.cv}
            buttonText="Contacto"
            phrase="Never Give Up!!!"
          />

          <AboutMe
            title="Un poco más sobre mí"
            paragraphs={state.about.paragraphs}
          />

          <ComputerSkills
            title="Computer Skills"
            computerSkills={state.computerSkills}
            widthSize={widthSize}
          />

          <PortfolioInfo
            title="Mi Portfolio"
            works={state.portfolio.webDevelopment.works}
            widthSize={widthSize}
          />
        </>
      )}
    </>
  );
};

export default Home;
