import "./product-information-page.scss";
import { useParams } from "react-router-dom";
import { ProductInformationContainer } from "../product-information-Container/product-information-container";

const ProductInformationPage = ({
  handleAddToCartAmount,
  groups,
  products,
  children,
}) => {
  const { id } = useParams();
  const product = products[id];
  const group = groups.find((item) => {
    if (item.id === product?.group) return item;
  });

  function onAddToCartAmount(item) {
    handleAddToCartAmount(item);
  }

  return (
    <>
      {children}
      {product ? (
        <ProductInformationContainer
          product={product}
          group={group}
          item={id}
          key={id}
          handleAddToCartAmount={onAddToCartAmount}
        />
      ) : (
        "Loading...."
      )}
    </>
  );
};

export default ProductInformationPage;
