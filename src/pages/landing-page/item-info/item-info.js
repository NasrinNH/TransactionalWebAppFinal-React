import { useNavigate } from "react-router-dom";
import "./item-infos.scss";

const ItemInfos = ({ nameOfItem, PriceOfItem, imageOfItem, idOfItem }) => {
  const navigate = useNavigate();

  return (
    <div
      className="card-content-ItemInfos"
      id="test"
      onClick={() => {
        navigate(`/products/${idOfItem}`);
      }}
    >
      <div className="card-body-ItemInfos">
        <div>
          <h3>{nameOfItem}</h3>
        </div>
        <div>
          <p>Price : {PriceOfItem}</p>
        </div>
      </div>
      <img
        className="card-image-ItemInfos"
        src={imageOfItem}
        alt="product-Image"
      />
    </div>
  );
};

export default ItemInfos;
