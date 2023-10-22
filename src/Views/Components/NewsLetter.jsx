import send from "../../Assets/Images/send.png";

const NewsLetter = () => {
  return (
    <>
      <section className="newsletter">
        <img src={send} alt="" />
        <h4 className="mb-4">Sign up to be a SONA Insider</h4>
        <form>
          <div className="mb-3">
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                placeholder={``}
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <button className="cstm-btn">SUBMIT</button>
            </div>
          </div>
          <div className="d-flex justify-content-between mx-auto">
            <div className="pe-3">
              <input
                type="radio"
                placeholder=""
                id="male"
                name="gender"
                className="me-2"
                defaultChecked
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="pe-3">
              <input
                id="female"
                type="radio"
                placeholder=""
                className="me-2"
                name="gender"
              />
              <label htmlFor="female">Female</label>
            </div>
            <div className="pe-3">
              <input
                id="other"
                type="radio"
                placeholder=""
                className="me-2"
                name="gender"
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        </form>
      </section>
      <p className="p-link">
        <span>Know More</span> about Sona Jewels
      </p>
    </>
  );
};

export default NewsLetter;
