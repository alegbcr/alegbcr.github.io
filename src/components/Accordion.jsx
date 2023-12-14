import { useState } from "react";
// Icons
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
// styles
import "../styles/accordion.css";

export const Accordion = ({ data, size }) => {
  const [clicked, setClicked] = useState(false);

  const handleToggle = (index) => {
    setClicked(!clicked);
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <>
      {data.map((item, index) => {
        return (
          <li className="accordion__main--container" key={item.id}>
            {size <= 767 ? (
              <>
                <div
                  className="accordion_title__container"
                  onClick={() => handleToggle(index)}
                  key={index}
                >
                  <h3 className="accordion__title">{item.name}</h3>
                  {clicked === index ? (
                    <FaAngleUp className="fade" />
                  ) : (
                    <FaAngleDown className="fade" />
                  )}
                </div>
                <div
                  className={`accordion_icons__container ${
                    clicked === index ? "active" : "non-active"
                  }`}
                >
                  {item.data.map((icon) => {
                    return (
                      <picture key={icon.name} className="my-[.5rem] mr-[1rem]">
                        <img
                          className="w-10"
                          src={icon.logo}
                          alt={`logo ${icon.name}`}
                        />
                      </picture>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <div
                  className="accordion_title__container"
                  onClick={() => handleToggle(index)}
                  key={index}
                >
                  <h3 className="accordion__title">{item.name}</h3>
                </div>
                <div className={`accordion_icons__container`}>
                  {item.data.map((icon) => {
                    return (
                      <picture key={icon.name} className="my-[.5rem] mr-[1rem]">
                        <img
                          className="accordion_icons__container--items"
                          src={icon.logo}
                          alt={`logo ${icon.name}`}
                        />
                      </picture>
                    );
                  })}
                </div>
              </>
            )}
          </li>
        );
      })}
    </>
  );
};
