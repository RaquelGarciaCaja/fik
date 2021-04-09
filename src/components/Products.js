import React from "react";
import "../stylesheets/Products.scss";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
import image6 from "../images/image6.jpg";
import image7 from "../images/image7.jpg";
import image8 from "../images/image8.jpg";

const Products = (props) => {
  props.data.map((product) => {
    // con esto aparecen los productos filtrados en la consola
    console.log(product);
    return Products;
  });
  return (
    <section className="main__container js-container">
      <div className="main__containerImg main__containerImg1">
        <img className="main__img imgg" src={image1} alt="image1" />
        <div className="main__text">
          <h3 className="main__title">Bottega Veneta</h3>
          <p className="main__description">Bottega Veneta bold oval femenine havana sunglasses</p>
          <p className="main__price">270,00 EUR</p>
        </div>
      </div>

      <div className="main__containerImg main__containerImg2">
        <img className="main__img" src={image2} alt="image2" />
        <div className="main__text">
          <h3 className="main__title">Bottega Veneta</h3>
          <p className="main__description">Bottega Veneta bold oval black sunglasses</p>
          <p className="main__price">270,00 EUR</p>
        </div>
      </div>

      <div className="main__containerImg main__containerImg3">
        <img className="main__img" src={image3} alt="image3" />
        <div className="main__text">
          <h3 className="main__title">Gucci</h3>
          <p className="main__description">Gucci squa3 havana violet acetate sunglasses</p>
          <p className="main__price">260,00 EUR</p>
        </div>
      </div>

      <div className="main__containerImg main__containerImg4">
        <img className="main__img imgMovil" src={image4} alt="image4" />
        <div className="main__text">
          <h3 className="main__title">Gucci</h3>
          <p className="main__description">Gucci squared havana acetate sunglasses</p>
          <p className="main__price">260,00 EUR</p>
        </div>
      </div>

      <div className="main__containerImg main__containerImg5">
        <img className="main__img" src={image5} alt="image5" />
        <div className="main__text">
          <h3 className="main__title">Gucci</h3>
          <p className="main__description">Gucci oversized round havana femenine sunglasses</p>
          <p className="main__price">290,00 EUR</p>
        </div>
      </div>

      <div className="main__containerImg main__containerImg6">
        <img className="main__img" src={image6} alt="image6" />
        <div className="main__text">
          <h3 className="main__title">Gucci</h3>
          <p className="main__description">Gucci oversized vintage burgundy sunglasses</p>
          <p className="main__price">290,00 EUR</p>
        </div>
      </div>

      <div className="main__containerImg main__containerImg7">
        <img className="main__img" src={image7} alt="image7" />
        <div className="main__text">
          <h3 className="main__title">Gucci</h3>
          <p className="main__description">Gucci black cat-eye sunglasses with matalasse temple</p>
          <p className="main__price">280,00 EUR</p>
        </div>
      </div>

      <div className="main__containerImg main__containerImg8">
        <img className="main__img imgMovil" src={image8} alt="image8" />
        <div className="main__text">
          <h3 className="main__title">Gucci</h3>
          <p className="main__description">Gucci black sunglasses with matalasse temple</p>
          <p className="main__price">280,00 EUR</p>
        </div>
      </div>
    </section>
  );
};
export default Products;
