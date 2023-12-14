import { Card } from "../components/Card";
import "../styles/my_experience.css";

export const MyExperience = ({ title, companies }) => {
  return (
    <div className="my_experience__container main__container">
      <h2 className="my_experience__title">{title}</h2>
      <ul className="my_experience__list">
        <Card data={companies} />
      </ul>
    </div>
  );
};
