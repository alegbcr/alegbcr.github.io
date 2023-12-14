import { Link } from "react-router-dom";

// styles
import "../styles/button.css"

export const Button = ({ text, className, link, target }) => {
  return (
    <Link
      className={`cv_button ${className}`}
      target={target}
      to={link} 
      >
      {text}
    </Link>       
  );
}

