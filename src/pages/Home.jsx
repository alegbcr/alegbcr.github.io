import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// Data
import AppContext from "../context/AppContext";
// Containers
import Intro from "../containers/Intro";
import AboutMe from "../containers/AboutMe";
import ComputerSkills from "../containers/ComputerSkills";
import MyExperince from "../containers/MyExperince";

const Home = () => {
  const { state } = useContext(AppContext);
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/contact");
  };

  return (
    <>
      <Intro
        bgImage={state.intro.picture}
        imgDetail={state.intro.detail}
        greeting={state.intro.greeting}
        name={state.intro.name}
        description={state.intro.description}
        handleNavigation={handleNavigation}
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
      />

      <MyExperince
        title="Mi experiencia"
        companies={state.experienceTimeline.companies}
      />
    </>
  );
};

export default Home;
