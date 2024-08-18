import React from "react";
import { cartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import Filter from "./Filter";

const Home = () => {
  const {
    state: { products },
    psrdst: { bystk, byfd, byrt, srh, sort },
  } = cartState();

  console.log(bystk, byfd, byrt, srh, sort);

  const trsprd = () => {
    let srtpd = products;

    if (sort) {
      srtpd = srtpd.sort((a, b) => {
        return sort === "lth" ? a.price - b.price : b.price - a.price;
      });
    }
    if (!bystk) {
      srtpd = srtpd.filter((prd) => {
        return prd.instock;
      });
    }
    if (byfd) {
      srtpd = srtpd.filter((prd) => {
        return prd.fastDely;
      });
    }

    if (byrt) {
      srtpd = srtpd.filter((prd) => prd.rating >= byrt);
    }

    if (srh) {
      srtpd = srtpd.filter((prd) => prd.name.toLowerCase().includes(srh));
    }

    return srtpd;
  };
  return (
    <div className="home">
      <Filter />

      <div className="product-container">
        {trsprd().map((prd) => (
          <SingleProduct prd={prd} key={prd.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
