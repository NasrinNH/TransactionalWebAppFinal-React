import { Link } from "react-router-dom";
import "./carousel.scss";
import translate from "../i18nProvider/translate";

const Carousel = ({ promotionProducts }) => {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 700;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 700;
  };

  return (
    <div className="carousel-container">
      <div className="carousel-icon-prev">
        <i className="lni lni-chevron-left" onClick={slideLeft}></i>
      </div>

      <div id="slider" className="carousel-slide-container">
        {promotionProducts &&
          promotionProducts.map((product, index) => {
            return (
              <Link to={`/products/${product.id}`}>
                <div className="carousel-slide-card" key={index}>
                  <div className="carousel-item">
                    <img className="carousel-image" src={product.imageUrl} />
                    <div className="carousel-description">
                      <span>{product.name}</span>
                      <span>
                        Was:{" "}
                        <span className="original-price">{product.price}</span>
                      </span>
                      <span>
                        Now: {product.reducedPrice}
                        <span className="save-price">
                          {translate("save")}{" "}
                          {(product.price - product.reducedPrice).toFixed(2)}!
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>

      <div className="carousel-icon-next">
        <i className="lni lni-chevron-right" onClick={slideRight}></i>
      </div>
    </div>
  );
};

export default Carousel;
