import ItemInfos from "../item-info/item-info";

const GroupItemsList = ({ index, products }) => {
  const filteredGroup = products?.filter((product) => product?.group === index);
  return (
    <>
      {filteredGroup?.map((item) => {
        const { name, price, imageUrl, id } = item;

        return (
          <div className="card-container-GroupItemsList" key={id}>
            <ItemInfos
              nameOfItem={name}
              PriceOfItem={price}
              imageOfItem={imageUrl}
              idOfItem={id}
            />
          </div>
        );
      })}
    </>
  );
};

export default GroupItemsList;
