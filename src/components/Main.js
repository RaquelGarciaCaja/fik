import React, { useState } from "react";
import "../stylesheets/Main.scss";
import Products from "./Products";
import Filters from "./Filters";
import products from "../data/products.json";

const Main = (props) => {
  const [filterColor, setFilterColor] = useState(products);

  // change state
  const handlerFilter = (ev) => {
    const clickColorId = ev.id;
    setFilterColor(clickColorId);
  };

  const allFilters = products.filter((product) => {
    if (filterColor === "") {
      return true;
    } else {
      return product.color === filterColor;
    }
  });

  return (
    <section className="main">
      <Filters handlerFilter={handlerFilter} />
      <Products data={allFilters} />
    </section>
  );
};
export default Main;
