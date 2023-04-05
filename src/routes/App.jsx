import { HashRouter, Routes, Route } from "react-router-dom";
// Custom Hooks
import useInitialState from "../hooks/InitialState";
import AppContext from "../context/AppContext";

// Style Components
import { GlobalStyles } from "./GlobalStyles";

// Pages
import Menu from "../containers/Menu";
import AboutMe from "../pages/AboutMe";
import Portfolio from "../pages/Portfolio";
import PortfolioDescription from "../pages/PortfolioDescription";
import MyProjects from "../pages/MyProjects";
import Contact from "../pages/Contact";

const App = () => {
  const initialState = useInitialState();

  return (
    <>
      <AppContext.Provider value={initialState}>
        <HashRouter>
          <GlobalStyles />
          <Menu />
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<PortfolioDescription />} />
            <Route path="/my-projects" element={<MyProjects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </HashRouter>
      </AppContext.Provider>
    </>
  );
};

export default App;
