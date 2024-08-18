import React, { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import cartReducer, { productReducer } from "./Reducer";
import context from "react-bootstrap/esm/AccordionContext";
const Cart = createContext({});
faker.seed(99);

const CartProvider = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    fastDely: faker.datatype.boolean(),
    instock: faker.helpers.arrayElement([0, 3, 5, 7]),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  // console.log(product);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [psrdst, prdstdispatch] = useReducer(productReducer, {
    bystk: false,
    byfd: false,
    byrt: 0,
    srh: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, psrdst, prdstdispatch }}>
      {" "}
      {children}{" "}
    </Cart.Provider>
  );
};

export default CartProvider;

export const cartState = () => {
  const cart = useContext(Cart);
  // console.log(cart);

  return cart;
};
