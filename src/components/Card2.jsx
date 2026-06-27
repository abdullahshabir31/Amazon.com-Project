import "./css/Card 2.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="title-div">
        <h2 className="title">{props.title}</h2>
      </div>
      <div className="product-div">
        <div className="image-product-div">
          <div className="img-div">
            <div className="img-1">
              <img
                className="product-image-1"
                src={props.image}
                alt="Game Controller"
              />
              <span className="img-title-1">{props.imgTitle}</span>
            </div>
            <div className="img-2">
              <img
                className="product-image-2"
                src={props.image2}
                alt="Game Controller"
              />
              <span className="img-title-2">{props.imgTitle2}</span>
            </div>
          </div>
          <div className="img-title-div"></div>
        </div>
        <div className="image-product-div">
          <div className="img-div">
            <div className="img-1">
              <img
                className="product-image-1"
                src={props.image3}
                alt="Game Controller"
              />
              <span className="img-title-1">{props.imgTitle3}</span>
            </div>
            <div className="img-2">
              <img
                className="product-image-2"
                src={props.image4}
                alt="Game Controller"
              />
              <span className="img-title-2">{props.imgTitle4}</span>
            </div>
          </div>
          <div className="img-title-div"></div>
        </div>
        <span className="shop-link">{props.link}</span>
      </div>
    </div>
  );
}
