import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import { cartState } from "../context/Context";

const SingleProduct = ({ prd }) => {
  const {
    state: { cart },
    dispatch,
  } = cartState();
  // console.log(cart);
  return (
    <div className="product">
      <Card>
        <Card.Img variant="top" src={prd.image} alt={prd.name} />
        <Card.Body>
          <Card.Title>{prd.name}</Card.Title>

          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>{prd.price.split(".")[0]} RS</span>
            {prd.fastDely ? (
              <div>Fast Deleivery </div>
            ) : (
              <div> 4 day Deleivery</div>
            )}
            <Rating rating={prd.rating} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prd.id) ? (
            <Button
              variant="danger"
              onClick={() => dispatch({ type: "Remove", payload: prd })}
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              disabled={!prd.instock}
              onClick={() => dispatch({ type: "Add", payload: prd })}
            >
              {!prd.instock ? "Out of stock" : "Add cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
