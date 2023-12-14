import { Accordion } from "../components/Accordion";
import "../styles/computerSkills.css";

export const ComputerSkills = ({ title, computerSkills, widthSize }) => {
  return (
    <div className="computer-skill__container">
      <h2 className="computer-skill__title">{title}</h2>
      <ul className="computer-skill__list">
        <Accordion data={computerSkills} size={widthSize} />
      </ul>
    </div>
  );
};
