import "./css/Carousel.css";

export default function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="src\images\Carousel (2).jpg"
            className="d-block w-100"
            alt="Image 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="src\images\Carousel (3).jpg"
            className="d-block w-100"
            alt="Image 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="src\images\Carousel (4).jpg"
            className="d-block w-100"
            alt="Image 3"
          />
        </div>
        <div className="carousel-item">
          <img
            src="src\images\Carousel (5).jpg"
            className="d-block w-100"
            alt="Image 4"
          />
        </div>
        <div className="carousel-item">
          <img
            src="src\images\Carousel (1).jpg"
            className="d-block w-100"
            alt="Image 5"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
