import "../styles/card.css";

export const Card = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <li key={item.name} className="card_main__container">
            <div className="mt-1 w-full flex justify-between">
              <h3 className="w-3/4 text-lg font-semibold">{item.position}</h3>
              <p>{item.years}</p>
            </div>
            <h4 className="mt-1">{item.name}</h4>
            <p className="mt-1">{item.description}</p>
          </li>
        );
      })}
    </>
  );
};
