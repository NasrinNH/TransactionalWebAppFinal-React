import "./groupItems.scss";

const GroupItems = ({ groupOfProduct }) => {
  const { name, id, image_Group } = groupOfProduct;
  return (
    <div className="wrapper-GroupItems ">
      <img src={image_Group} alt="groups-image" className="image-GroupItems" />
    <h1>

        {name}
        {/* <span>
          <i></i>
        </span> */}
   
      </h1>
    
    </div>
  );
};
export default GroupItems;
