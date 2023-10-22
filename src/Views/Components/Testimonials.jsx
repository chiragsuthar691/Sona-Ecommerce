import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const Testimonials = () => {
  const { loading, reviewsList } = useSelector(({ jewels }) => jewels);

  return (
    <>
      <div
        id="testimoni"
        className="carousel slide text-center carousel-dark testimonials my-5"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {loading ? (
            <Loader />
          ) : (
            reviewsList?.map((x, i) => {
              return (
                <div className="carousel-item active" key={i}>
                  <img
                    className="rounded-circle shadow-1-strong mb-4"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                    alt="avatar"
                    style={{ width: "150px" }}
                  />
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                      <h5 className="mb-3">{x?.name}</h5>
                      <div className="d-flex justify-content-center text-warning mb-4">
                        {[1, 2, 3, 4, 5].map((y, j) => {
                          if (y <= x?.ratings)
                            return <AiFillStar color={"#fbc531"} key={j} />;
                          else
                            return <AiOutlineStar color={"#fbc531"} key={j} />;
                        })}
                      </div>
                      <p className="text-muted">
                        <i className="fas fa-quote-left pe-2"></i>
                        {x?.desc}
                      </p>
                    </div>
                  </div>
                  <button className="bdr-btn">Read More</button>
                </div>
              );
            })
          )}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testimoni"
          data-bs-slide="prev"
        >
          <BsArrowLeftCircle size={"32px"} color="rgb(35, 21, 53)" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testimoni"
          data-bs-slide="next"
        >
          <BsArrowRightCircle size={"32px"} color="rgb(35, 21, 53)" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Testimonials;
