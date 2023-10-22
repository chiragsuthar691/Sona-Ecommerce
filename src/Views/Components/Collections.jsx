import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const Collections = () => {
  const { loading, collectionList } = useSelector(({ jewels }) => jewels);

  return (
    <>
      <div className="m-5 d-flex flex-wrap justify-content-center align-items-center">
        <Container className="d-flex flex-wrap justify-content-center">
          <Row xs={2} sm={3} md={4} lg={5} xxl={6}>
            {loading ? (
              <Loader />
            ) : (
              collectionList?.map((x, i) => {
                return (
                  <Col key={i}>
                    <div className="my-2">
                      <img src={x} alt="" className="img-fluid" />
                    </div>
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

export default Collections;
