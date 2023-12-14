import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Custom hooks
import AppContext from "../context/AppContext";
// Components
import { Button } from "../components/Button";
// Icons
import { BsXLg } from "react-icons/bs";
import { FaAlignJustify, FaAlignCenter } from "react-icons/fa6";
// styles
import "../styles/menu.css";

const Menu = () => {
  const { state, widthSize, isOpen, setIsOpen } = useContext(AppContext);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleHome = () => {
    navigate("/");
  };

  return (
    <nav className="container h-[6vh] bg-black-color sticky top-0 z-20 mx-auto flex items-center justify-between">
      {/* Desktop */}
      <div className="desktop__container w-full flex justify-between">
        <picture className="navigation_container--logo" onClick={handleHome}>
          <img src={state.info.logo} alt="logo" />
        </picture>
        <ul
          className={`flex gap-4 justify-center items-center ${
            widthSize <= 767 && "hidden"
          }`}
        >
          {state.info.categories.map((category) => (
            <li key={category.id}>
              <NavLink
                to={category.path}
                style={({ isActive }) => ({
                  color: isActive
                    ? "var(--blue-light-color)"
                    : "var(--white-color)",
                })}
              >
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={`flex items-center ${widthSize <= 767 && "hidden"}`}>
          <Button
            classStyles="cv_button"
            text="Resume"
            target="_blank"
            link={state.info.cv}
          />
        </div>
      </div>

      {/* Mobile */}
      <div
        className={`mobile__container active fade mr-5 ${
          widthSize >= 768 && "hidden"
        }`}
      >
        {isOpen ? (
          <FaAlignCenter
            className="text-lg text-[1.3rem] fade"
            onClick={handleToggle}
          />
        ) : (
          <FaAlignJustify
            className="text-lg text-[1.3rem] fade"
            onClick={handleToggle}
          />
        )}
        {isOpen && (
          <div className="mobile__container--list fade">
            <div className="h-3/4 w-2/4 flex flex-col items-center justify-evenly">
              <ul className="container__list--categories text-center">
                {state.info.categories.map((category) => (
                  <li className="mt-5 text-lg" key={category.id}>
                    <NavLink
                      onClick={handleToggle}
                      to={category.path}
                      style={({ isActive }) => ({
                        color: isActive
                          ? "var(--blue-light-color)"
                          : "var(--white-color)",
                      })}
                    >
                      {category.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ul className="flex gap-6 border-t-2">
                {state.info.socialMedia.map((category) => (
                  <li key={category.id} className="mt-3 text-lg">
                    <NavLink
                      className="w-full menu__social_media--item"
                      to={category.reference}
                      size="lg"
                    >
                      {category.iconName}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div>
                <Button
                  classStyles="cv_button"
                  link={state.info.cv}
                  text="Resume"
                  target="_blank"
                />
              </div>
              <small style={{ color: "var(--blue-light-color)" }}>
                Stay up until the Sun rises
              </small>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Menu;
