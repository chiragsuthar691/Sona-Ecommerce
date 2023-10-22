import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const Categories = () => {
  const { loading, categoriesList } = useSelector(({ jewels }) => jewels);

  return (
    <>
      <div className="m-5">
        <Container className="d-flex flex-wrap justify-content-center text-center categories">
          <Row
            xs={2}
            sm={2}
            md={4}
            lg={5}
            xxl={6}
            className="d-flex justify-content-center"
          >
            {loading ? (
              <Loader />
            ) : (
              categoriesList?.map((x, i) => {
                return (
                  <Col
                    key={i}
                    className="d-flex flex-column align-items-center justify-content-center"
                  >
                    <div className="rounded-circle">
                      <img src={x?.img} alt="" className="img-fluid" />
                    </div>
                    <p className="mt-3">{x?.name}</p>
                  </Col>
                );
              })
            )}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Categories;
