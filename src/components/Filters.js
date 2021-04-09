import React from "react";
import "../stylesheets/Filters.scss";

const Filters = (props) => {
  const handlerFilterClick = (ev) => {
    const inputName = ev.target.name;
    const inputId = ev.target.id;
    props.handlerFilter({ name: inputName, id: inputId });
  };

  const colorList = [
    { id: "1", name: "Black" },
    { id: "2", name: "Blue" },
    { id: "3", name: "Red" },
  ];

  return (
    <section className="main__containerText">
      <h3 className="main__mainTitle">Woman</h3>
      <form className="main__form" action="#">
        <label className="main__name" htmlFor="">
          Color:
        </label>
        {colorList.map((color) => (
          <label key={color.id} className="main__labelOptions" htmlFor="">
            <input
              className="main__color js-colors"
              type="checkbox"
              name="colors"
              id={color.id}
              onClick={handlerFilterClick}
            />
            {color.name}
          </label>
        ))}
      </form>
    </section>
  );
};
export default Filters;
