import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from "./Rating";
import { cartState } from "../context/Context";
const Filter = () => {
  const {
    psrdst: { bystk, byfd, byrt, sort },
    prdstdispatch,
  } = cartState();

  return (
    <div className="filter">
      <span className="title">Filter Product</span>
      <span>
        <Form.Check
          inline
          label="Assending"
          name="group1"
          type="radio"
          id={"inline-1"}
          onChange={() => {
            prdstdispatch({
              type: "sr_pr",
              payload: "lth",
            });
          }}
          checked={sort === "lth" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Desending"
          name="group1"
          type="radio"
          id={"inline-2"}
          onChange={() => {
            prdstdispatch({
              type: "sr_pr",
              payload: "htl",
            });
          }}
          checked={sort === "htl" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Include out of stock"
          name="group1"
          type="checkbox"
          id={"inline-3"}
          onChange={() => {
            prdstdispatch({ type: "fl_st" });
          }}
          checked={bystk}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Fast Delivery"
          name="group1"
          type="checkbox"
          id={"inline-4"}
          onChange={() => {
            prdstdispatch({ type: "dr" });
          }}
          checked={byfd}
        />
      </span>
      <span>
        <label style={{ padding: 10 }}> Rating:</label>
        <Rating
          rating={byrt}
          onClick={(i) =>
            prdstdispatch({
              type: "fl_rt",
              payload: i,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>
      <Button
        onClick={() => {
          prdstdispatch({ type: "clr" });
        }}
      >
        {" "}
        Clear Filter{" "}
      </Button>
    </div>
  );
};

export default Filter;
