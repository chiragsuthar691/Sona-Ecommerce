import { AiFillStar, AiOutlineHeart, AiOutlineStar } from "react-icons/ai";

const Card = ({ alt, addToCart, addToFavourites, data }) => {
  return (
    <>
      <div className="card">
        <img src={data?.img} className="card-img-top" alt={alt} />
        <span className="card-heart" onClick={() => addToFavourites(data)}>
          <AiOutlineHeart color={"rgb(79, 50, 103)"} size={"22px"} />
        </span>
        <div className="card-body">
          <p className="card-title">{data?.title}</p>
          <p className="card-text rate-star">
            {[1, 2, 3, 4, 5].map((y, j) => {
              if (y <= data?.rating)
                return <AiFillStar color={"#fbc531"} key={j} />;
              else return <AiOutlineStar color={"#fbc531"} key={j} />;
            })}
          </p>
          <p className="card-text card-price">
            <span className="small">from</span> ₹ {data?.price}{" "}
            <span className="small text-decoration-line-through">
              {data?.orgPrice}
            </span>
          </p>
          <p className="card-text card-discount">Save {data?.discount}%</p>
          <button className="cstm-btn" onClick={() => addToCart(data)}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
