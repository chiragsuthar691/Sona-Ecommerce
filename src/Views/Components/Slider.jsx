import img1 from "../../Assets/Images/hero-img.webp";
import img2 from "../../Assets/Images/hero-img-2.webp";
import img3 from "../../Assets/Images/hero-img-3.webp";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Slider = () => {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <button className="cstm-btn mb-4">View All Collections</button>
              <h6>
                Some representative placeholder content for the first slide.
              </h6>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <button className="cstm-btn mb-4">View All Collections</button>
              <h6>
                Some representative placeholder content for the first slide.
              </h6>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <button className="cstm-btn mb-4">View All Collections</button>
              <h6>
                Some representative placeholder content for the first slide.
              </h6>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <BsArrowLeftCircle size={"32px"} />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <BsArrowRightCircle size={"32px"} />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Slider;
