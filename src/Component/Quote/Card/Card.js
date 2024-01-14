import "./card.css";

const Card = (props) => {
  return (
    <div
      className="card_container"
      style={{ backgroundColor: props.color }}
      data-aos="zoom-in"
    >
      <h1>{props.title}</h1>
      <span>{props.subtitle}</span>
    </div>
  );
};
export default Card;
