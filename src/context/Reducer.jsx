import React from "react";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return { ...state, cart: [...state.cart, { ...action.payload, qt: 1 }] };

    case "Remove":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    case "qyt":
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qt = action.payload.qt) : c.qt
        ),
      };

    default:
      return state;
  }
};

export default cartReducer;

export const productReducer = (state, action) => {
  switch (action.type) {
    case "sr_pr":
      return { ...state, sort: action.payload };
    case "fl_st":
      return { ...state, bystk: !state.bystk };
    case "dr":
      return { ...state, byfd: !state.byfd };
    case "fl_rt":
      return { ...state, byrt: action.payload };
    case "fl_shr":
      return { ...state, srh: action.payload };
    case "clr":
      return {
        bystk: false,
        byfd: false,
        byrt: 0,
        srh: "",
      };

    default:
      return state;
  }
};
