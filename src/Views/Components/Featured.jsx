import { Col, Container, Row } from "react-bootstrap";
import banner1 from "../../Assets/Images/Grid_banner.webp";
import banner2 from "../../Assets/Images/Grid_banner_2.webp";
import banner3 from "../../Assets/Images/Grid_banner_3.webp";
import banner4 from "../../Assets/Images/Grid_banner_4.webp";

const Featured = () => {
  return (
    <>
      <section className="featured">
        <Container>
          <Row lg={2} md={2} sm={1} xs={1}>
            <Col>
              <img src={banner1} alt="featured" className="img-fluid" />
            </Col>
            <Col>
              <img src={banner2} alt="featured" className="img-fluid" />
            </Col>
          </Row>
          <Row lg={2} md={2} sm={1} xs={1}>
            <Col>
              <img src={banner3} alt="featured" className="img-fluid" />
            </Col>
            <Col>
              <img src={banner4} alt="featured" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Featured;
