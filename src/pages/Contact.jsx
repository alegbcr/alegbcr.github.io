import { useContext } from "react";
// Data
import AppContext from "../context/AppContext";

// Components
import ContactInfo from "../containers/ContactInfo";

const Contact = () => {
  const { state } = useContext(AppContext);

  return (
    <ContactInfo
      title="Contacto"
      paragraph="Da el primer paso hacia un sitio web o alguno de los servicios que puedo
        brindarte a la medida de tu proyecto."
      socialMedia={state.info.socialMedia}
      phrase="Stay focus on your dreams!"
    />
  );
};

export default Contact;
