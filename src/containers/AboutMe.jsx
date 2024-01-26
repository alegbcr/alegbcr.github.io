// import { Link } from "react-router-dom";
import "../styles/about_me.css";
// import { Button } from "../components/Button";

export const AboutMe = ({ title, paragraphs }) => {
  return (
    <div className="about-me__container">
      {paragraphs.map((paragraph) => {
        return (
          <p
            className={`about-me__paragraph paragraph-${paragraph.id} mb-4`}
            key={paragraph.id}
          >
            {paragraph.paragraph}
          </p>
        );
      })}

      {/* <Button text="Sobre mí" className={"about-me__button"} link="/about-me" /> */}
    </div>
  );
};
