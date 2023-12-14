import { useContext } from "react";
import { Link } from "react-router-dom";
// Data
import AppContext from "../context/AppContext";
// Components
import { Button } from "../components/Button";
// styles
import "../styles/contact_info.css";

const Contact = () => {
  const { state } = useContext(AppContext);

  return (
    <div className="contact__container">
      <h1 className="contact__title">
        Trabajemos juntos para alcanzar tus objetivos.
      </h1>
      <form className="contact_info__container">
        <div className="flex flex-col w-[80%] mb-4">
          <label className="p-2">Cual es tu nombre</label>
          <input
            className="p-2 bg-transparent border-b-[1px]"
            type="text"
            placeholder="Alex Gonzalez"
          />
        </div>
        <div className="flex flex-col w-[80%] mb-4">
          <label className="p-2">Cual es tu mail</label>
          <input
            className="p-2 bg-transparent border-b-[1px]"
            type="mail"
            placeholder="alegbcr@info.com"
          />
        </div>
        <div className="flex flex-col w-[80%] mb-4">
          <label className="p-2">Describe tu idea que deseas desarrollar</label>
          <textarea
            className="p-2 bg-transparent border-b-[1px]"
            placeholder="Busco crear..."
          />
        </div>
        <div className="h-[10%] w-[85%] flex items-center justify-end ">
          <Button text="Enviar" />
        </div>
      </form>
      <div className="flex flex-col contact_social_media__container">
        <h3 className="text-xs">Social Media</h3>
        <ul className="flex">
          {state.info.socialMedia.map((item, index) => (
            <li key={index}>
              <Link className="mr-3">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
