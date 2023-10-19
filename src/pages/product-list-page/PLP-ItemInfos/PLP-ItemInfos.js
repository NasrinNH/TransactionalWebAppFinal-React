import "./PLP-ItemInfos.scss";
import { useNavigate } from "react-router-dom";

const PLPItemInfos = ({
  nameOfItem,
  PriceOfItem,
  imageOfItem,
  idOfItem,
  ItemCanBeSold,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="card-content-ItemInfos"
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

export default PLPItemInfos;
