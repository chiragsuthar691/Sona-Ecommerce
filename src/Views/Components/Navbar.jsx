import { BiSearch } from "react-icons/bi";
import { MdShoppingCart } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import logo from "../../Assets/Images/logo-2.png";
import { useSelector } from "react-redux";

const catList = ["RelationShip", "Category", "Price", "Occassion"];

const Navbar = () => {
  const [categories, setCategories] = useState(catList[0]);
  const [loopNum, setLoopNum] = useState(0);

  const { cart, favouriteList } = useSelector(({ jewels }) => jewels);

  useEffect(() => {
    let ticker = setInterval(() => {
      setLoopNum(loopNum + 1);
      const i = loopNum > 3 ? loopNum % 4 : loopNum;
      setCategories(catList[Math.round(i)]);
    }, 1200);

    return () => clearInterval(ticker);
  }, [loopNum]);

  return (
    <>
      <div className="sub-nav">
        Introducing Sona PoP! Plan your purchase{" "}
        <span className="link">here</span>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="!#">
            <img src={logo} alt="logo" className="img-fluid" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
              style={{ "--bs-scroll-height": "100px" }}
            >
              <li className="nav-item ">
                <a className="nav-link active" aria-current="page" href="!#">
                  Rings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="!#">
                  Earrings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="!#">
                  Bracelets and Bangles
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="!#">
                  Solitaires
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="!#">
                  Other Jewellery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="!#">
                  Gifting
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="input-group">
                <input
                  type="search"
                  className="form-control"
                  placeholder={`Search by ${categories}`}
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                {/* <span>{categories}</span> */}
                <button type="button" className="cstm-btn">
                  <BiSearch size={"20px"} />
                </button>
              </div>
            </form>
            <ul className="d-flex justify-content-center nav-btn">
              <li className="p-2">
                <BsPersonFill size={"22px"} />
              </li>
              <li className="p-2">
                <BsSuitHeartFill size={"20px"} />
                <span className="badge">{favouriteList?.length}</span>
              </li>
              <li className="p-2">
                <MdShoppingCart size={"22px"} />
                <span className="badge">{cart?.length}</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
