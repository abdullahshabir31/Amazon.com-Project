import "./css/Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="title-div">
        <h2 className="title">{props.title}</h2>
      </div>
      <div className="product-div">
        <img
          className="product-image"
          src={props.image}
          alt="Game Controller"
        />
        <span className="shop-link">{props.link}</span>
      </div>
    </div>
  );
}
