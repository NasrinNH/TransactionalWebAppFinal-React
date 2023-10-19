import "./product-list-page.scss";
import PIPItemInfos from "./PLP-ItemInfos/PLP-ItemInfos";
import PIPGroupItems from "../landing-page/groupItems/groupItems";
import { useParams } from "react-router-dom";

const ProductListPage = ({ groups, products, children }) => {
  const { code } = useParams();

  const temp = Object.values(products);
  const productsKeys = Object.keys(products);
  const productsInfo = temp.map((element, index) => {
    return { ...element, id: `${productsKeys[index]}` };
  });

  const filteredProducts = productsInfo?.filter((productInfo) => {
    if (productInfo.group === +code) {
      return productInfo;
    }
  });


  const filteredGroup = groups.find((group) => {
    const { name, id, image_Group } = group;
    if (id === +code) return group;
  });

  return (
    <div className="PLP-border-wrapper">
      {children}
      <div className="PLP-container">
        <div className="container-GroupItems">
          {filteredGroup && <PIPGroupItems groupOfProduct={filteredGroup} />}
        </div>

        <section className="PLP-wrapper">
          <div
            key={filteredProducts.id}
            className="PLP-container-GroupItemsList"
          >
            {filteredProducts.map((filteredProduct) => {
              const { name, price, imageUrl, id, canBeSold } = filteredProduct;

              return (
                <div className="PLP-card--container" key={id}>
                  <PIPItemInfos
                    key={filteredProducts.id}
                    nameOfItem={name}
                    PriceOfItem={price}
                    imageOfItem={imageUrl}
                    idOfItem={id}
                    ItemCanBeSold={canBeSold}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
export default ProductListPage;
