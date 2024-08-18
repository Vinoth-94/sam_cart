import React from "react";
import {
  Container,
  FormControl,
  Navbar,
  Nav,
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { cartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";

const Header = () => {
  const {
    state: { cart },
    dispatch,
    prdstdispatch,
  } = cartState();
  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
        <Navbar.Brand>
          <Link to="/"> Shopping Cart</Link>
        </Navbar.Brand>

        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder="Search for product"
            className="m-auto"
            onChange={(e) => {
              prdstdispatch({ type: "fl_shr", payload: e.target.value });
            }}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              <FaCartShopping fontSize={26} color="White" />
              <Badge>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {cart.length > 0 ? (
                <>
                  {cart.map((prd) => (
                    <span className="cartitem">
                      <img className="crtimg" src={prd.image} alt={prd.name} />
                      <div className="cartdetail">
                        <span> {prd.name}</span>
                        <span>{prd.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch({ type: "Remove", payload: prd });
                        }}
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{ width: "90%", margin: "0 10px" }}>
                      Go to cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span> cart is empty </span>
              )}
              {/* Action
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
