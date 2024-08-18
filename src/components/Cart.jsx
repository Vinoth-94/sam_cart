import React, { useEffect, useState } from "react";
import { cartState } from "../context/Context";
import { Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = cartState();
  const [total, settotal] = useState();

  useEffect(() => {
    settotal(cart.reduce((a, c) => a + Number(c.price) * c.qt, 0));
  }, [cart]);
  return (
    <div className="home">
      <div className="product-container">
        <ListGroup>
          {cart.map((prd) => {
            return (
              <ListGroup.Item key={prd.id}>
                <Row>
                  <Col md={2}>
                    <Image src={prd.image} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <span>{prd.name}</span>
                  </Col>
                  <Col md={2}>
                    <span>{prd.price}</span>
                  </Col>
                  <Col md={2}>
                    <Rating>{prd.rating}</Rating>
                  </Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={prd.qt}
                      onChange={(e) => {
                        dispatch({
                          type: "qyt",
                          payload: { id: prd.id, qt: e.target.value },
                        });
                      }}
                    >
                      {[...Array(prd.instock).keys()].map((x) => (
                        <option key={x + 1}>{x + 1}</option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <AiFillDelete
                      fontSize="20px"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dispatch({ type: "Remove", payload: prd });
                      }}
                    />
                  </Col>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
      <div className="filter summary">
        <span className="title">Subtotal {cart.length} items</span>
        <span style={{ fontSize: 20 }}>Total {total}</span>
      </div>
    </div>
  );
};

export default Cart;
