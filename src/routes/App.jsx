import { HashRouter, Routes, Route } from "react-router-dom";
// Custom Hooks
import useInitialState from "../hooks/InitialState";
import AppContext from "../context/AppContext";

// Pages
import Menu from "../containers/Menu";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import PortfolioWorks from "../pages/PortfolioWorks";
import PortfolioMyProjects from "../pages/PortfolioMyProjects";
import Contact from "../pages/Contact";

const App = () => {
  const initialState = useInitialState();

  return (
    <>
      <AppContext.Provider value={initialState}>
        <HashRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/works/:id" element={<PortfolioWorks />} />
            <Route
              path="/portfolio/my-projects/:id"
              element={<PortfolioMyProjects />}
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </HashRouter>
      </AppContext.Provider>
    </>
  );
};

export default App;
