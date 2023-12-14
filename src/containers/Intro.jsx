// styles
import { Link } from "react-router-dom";
import "../styles/intro.css";
import { Button } from "../components/Button";
// icons
import { FaLocationDot } from "react-icons/fa6";

const Intro = ({
  bgImage,
  imgDetail,
  greeting,
  name,
  description,
  link,
  handleNavigation,
  buttonText,
  phrase,
}) => {
  return (
    <section className="intro__container">
      <picture className="image__container">
        <img
          className="image__container--image"
          src={bgImage}
          alt={imgDetail}
        />
      </picture>

      <div className="overlay_main__container">
        <div className="overlay_name__container">
          <h3 className="overlay__information--name">{greeting} -</h3>
          <h3 className="overlay__information--name">{greeting} -</h3>
        </div>
        <h1 className="overlay__information--profession">
          Graphic Designer & Web Developer
        </h1>
        <h2 className="overlay__information--description">Freelance</h2>
        <div className="overlay__information-location__container">
          <FaLocationDot className="overlay__information--icon" />
          <p className="overlay__information--location">
            Ubicado en Costa Rica
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
