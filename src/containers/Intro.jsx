// styles
import { Link } from "react-router-dom";
import "../styles/intro.css";
import { Button } from "../components/Button";
// icons
import { FaLocationDot } from "react-icons/fa6";
import { Image } from "@nextui-org/react";

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
    <section className="grid grid-cols-4 grid-rows-mobile">
      <picture className="relative flex items-end justify-center col-span-full row-span-full">
        <Image
          className="object-cover h-full w-auto leading-[0px] mb-1"
          src={bgImage}
          alt={imgDetail}
        />
        <div className="absolute z-10 w-full h-full bg-gradient-to-t from-black-color from-4% to-transparent"></div>
      </picture>

      <div className="z-10 grid items-center justify-center grid-cols-4 col-span-full row-span-full grid-rows-view">
        {/* <div className="overlay_name__container">
          <h3 className="overlay__information--name">{greeting} -</h3>
          <h3 className="overlay__information--name">{greeting} -</h3>
        </div> */}
        <h1 className="grid text-6xl font-semibold  row-start-9 col-span-full row-end-10">
          Graphic Designer & Web Developer
        </h1>
        <h2 className="overlay__information--description">Hi, I'm Alex</h2>
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
