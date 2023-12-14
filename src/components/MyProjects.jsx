// styles
import "../styles/my_projects.css";

const MyProjetcs = ({
  image,
  work,
  company,
  age,
  id,
  handleAction,
  imageClass,
}) => {
  return (
    <li className="my_projects__container">
      <picture
        className="my_projects__image--container"
        onClick={() => handleAction(id)}
      >
        <img
          className={`my_projects__image--image ${imageClass}`}
          src={image}
        />
      </picture>
      <div className="my_projects__information--container">
        <h3 className="my_projects__information--title">{`${work}`}</h3>
        <div className="my_projects__information--company-container">
          <p className="my_projects__information--company-paragraph">
            {company}
          </p>
          <p className="my_projects__information--company-paragraph text-end">
            {age}
          </p>
        </div>
      </div>
    </li>
  );
};

export default MyProjetcs;
