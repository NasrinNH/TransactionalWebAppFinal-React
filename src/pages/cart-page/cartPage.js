import "./cart-page.scss";
import { Link } from "react-router-dom";

const CartPage = ({ cartItems }) => {

  console.log('cartItems: ', cartItems);

  return (
    <div className="wrapping-cart">
      <div className="header-cart">
        <h2>Shopping Cart</h2>
      </div>

      <div className="wraper-left-cart-page">
        <ul className="container-ItemInfo-cart-page">
          {cartItems.length > 0 &&cartItems.map((cartItem, index) => {
            const { name, reducedPrice, pricePreFix, imageUrl, id } =
              cartItem.item;
            return (
              <li className="card-container-cart-page" key={index}>
                <div className="wrapper-filed-cart">
                  <h2 className="field-title-text">{name}</h2>
                </div>

                <div className="wrapper-filed-cart">
                  <span className="field-title-text"> Price : </span>
                  <span className="field-des-text">
                    {pricePreFix} {reducedPrice}
                  </span>
                </div>
                <div className="wrapper-image-cart">
                  <Link to={`/products/${id}`}>
                    <img src={imageUrl} className="image-cart" />
                  </Link>
                </div>
                <div className="wrapper-filed-cart">
                  <span className="field-title-text">X </span>
                  <span className="field-des-text"> {cartItem.count}</span>
                </div>
                <div className="wrapper-filed-cart">
                  <span className="field-title-text">TotalPrice: </span>
                  <span className="field-des-text">
                    {pricePreFix} {cartItem.totalPrice}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <div className="wraper-right-cart-page">
        <div className="header-cart">
          <h2>Order Summary</h2>
        </div>
        <div></div>
      </div> */}
    </div>
  );
};

export default CartPage;
