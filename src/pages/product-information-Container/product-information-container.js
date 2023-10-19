import "./product-information-container.scss";
import "../../sass/_variables.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export const ProductInformationContainer = ({
  item,
  handleAddToCartAmount,
  product,
  group,
}) => {
  const [itemCount, setItemCount] = useState(1);

  function handleChange(e) {
    setItemCount(e.target.value);
  }

  const handleAddToCart = () => {
    const temp = {
      item: product,
      count: +itemCount,
      totalPrice: product.reducedPrice * itemCount,
    };
    handleAddToCartAmount(temp);
  };

  const { price, name, pricePreFix, canBeSold, imageUrl } = product;

  return (
    <>
      <div className="container-PIC">
        <div>
          <div>
            <h2>
              <p className="productPrice-PIC">
                Product Category :
                <span>
                  <Link
                    to={`/groups/${group?.id}`}
                    className="productPrice-PIC-LinkedText"
                  >
                    {group?.name}
                  </Link>
                </span>
              </p>
            </h2>
          </div>
          <br />
          <div>
            <h1 className="productName-PIC">
              <span> Product :</span> {name}
            </h1>
          </div>
          <br />

          <br />

          {}
          <h2 className="productPrice-PIC">
            <span>Price({pricePreFix}) :</span> {price}
          </h2>
          <br />
          <br />
          <div className="input-btn-container-PIC">
            <input
              className="counter-PIC"
              type="number"
              onChange={handleChange}
              value={itemCount}
              placeholder="1"
              min={0}
            />
            {canBeSold ? (
              <button className="btn-addToCart" onClick={handleAddToCart}>
                Add to cart
              </button>
            ) : (
              <button
                className="btn-addToCart-disabled"
                onClick={handleAddToCart}
                disable
              >
                Add to cart
              </button>
            )}
          </div>
        </div>

        <div className="wrapper-image-PIC">
          <img src={imageUrl} alt="product-image" className="image-PIC" />
        </div>
      </div>
      <div>
        <p className="image-PIC"></p>
      </div>
    </>
  );
};

// const productsArr = Object.keys(product);
// const key = productsArr[0];

//***render***:
// product[key] ? product[key].name : "Loading...."
