import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";

// Custom hooks
import AppContext from "../context/AppContext";
// Components
import {Link, Button, Image} from "@nextui-org/react";
// Icons
import { FaAlignJustify, FaAlignCenter } from "react-icons/fa6";


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
    <nav className="container h-[6vh] mx-auto flex items-center justify-between">
      {/* Desktop */}
      <div className="flex items-center justify-between w-full">
        <picture className="flex h-full ml-5" onClick={handleHome}>
          <Image src={state.info.logo} width={100} alt="logo" />
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
                    ? "var(--orange-color)"
                    : "var(--white-color)",
                })}
              >
                {category.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={`flex items-center mr-5 ${widthSize <= 767 && "hidden"}`}>
          <Button
            variant="bordered"
            className='border-blue-light-color text-blue-light-color hover:bg-blue-light-color hover:text-white-color'
            as={Link}
            href={state.info.cv}
            target="_blank"
          >Resume</Button>
        </div>
      </div>

      {/* Mobile */}
      <div
        className={`active fade mr-5  ${
          widthSize >= 768 && "hidden"
        }`}
      >
        {isOpen ? (
          <FaAlignCenter
            className="text-lg text-[1.3rem] fade cursor-pointer"
            onClick={handleToggle}
          />
        ) : (
          <FaAlignJustify
            className="text-lg text-[1.3rem] fade cursor-pointer"
            onClick={handleToggle}
          />
        )}
        {isOpen && (
          <div className="fixed top-[6vh] bottom-0 left-0 right-0 flex flex-col justify-center items-center fade">
            <div className="flex flex-col items-center w-2/4 h-3/4 justify-evenly">
              <ul className="text-center">
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
                      className="w-full mx-2 my-3"
                      onClick={handleToggle}
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
                  variant="bordered"
                  className='border-blue-light-color text-blue-light-color hover:bg-blue-light-color'
                  as={Link}
                  href={state.info.cv}
                  target="_blank"
                >Resume</Button>
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
