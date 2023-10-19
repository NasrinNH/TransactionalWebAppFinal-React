import "../search-bar/search-bar.scss";
import { useState } from "react";
import { useIntl } from "react-intl";


const SearchBar = ({ onSearchItemChange }) => {

  const intl = useIntl();

  const [searchItem, setSearchItem] = useState("");

  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchItemChange(searchItem);
  };
  return (
    <form className="header-searchBar" onSubmit={handleSubmit}>
      <input
        className="header-searchBar-productName"
        type="search"
        value={searchItem}
        onChange={handleChange}
        placeholder={intl.formatMessage({ id: "searchProdName" })}
      />
      <button type="submit" className="header-searchBar-icon">
        <i className=" lni lni-search-alt "></i>
      </button>
    </form>
  );
};

export default SearchBar;
