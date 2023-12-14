// styles
import "../styles/my_arts.css";

const MyArts = ({ image, work, id, handleAction, imageClass }) => {
  return (
    <li className="my_arts__container">
      <picture
        className="my_arts__image--container"
        onClick={() => handleAction(id)}
      >
        <img className={`my_arts__image--image ${imageClass}`} src={image} />
      </picture>
      <div className="my_arts__information--container">
        {work && <h3 className="my_arts__information--title">{`${work}`}</h3>}
      </div>
    </li>
  );
};

export default MyArts;
