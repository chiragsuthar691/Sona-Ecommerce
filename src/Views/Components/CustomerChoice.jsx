import Card from "./Card";
import { Col, Container, Row } from "react-bootstrap";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  addItemToFavourites,
  getCart,
  getFavouriteList,
} from "../../Services/JewelsService";
import Loader from "./Loader";

const CustomerChoice = () => {
  const dispatch = useDispatch();
  const { loading, customerChoices } = useSelector(({ jewels }) => jewels);

  const addToCart = useCallback(
    async (payload) => {
      if (payload) {
        const res = await dispatch(addItemToCart(payload));
        if (res) dispatch(getCart());
      }
    },
    [dispatch]
  );

  const addToFavourites = useCallback(
    async (payload) => {
      if (payload) {
        const res = await dispatch(addItemToFavourites(payload));
        if (res) dispatch(getFavouriteList());
      }
    },
    [dispatch]
  );

  return (
    <>
      <div className="m-5 d-flex flex-wrap choice">
        <Container>
          <Row
            xs={1}
            sm={2}
            md={4}
            lg={5}
            xxl={6}
            className="d-flex justify-content-center"
          >
            {loading ? (
              <Loader />
            ) : (
              customerChoices?.map((x, i) => {
                return (
                  <Col xs={10} sm={6} md={4} key={i}>
                    <div className="my-2">
                      <Card
                        alt=""
                        data={x}
                        addToCart={addToCart}
                        addToFavourites={addToFavourites}
                      />
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

export default CustomerChoice;
