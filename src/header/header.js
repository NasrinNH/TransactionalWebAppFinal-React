import "./header.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import translate from "../i18nProvider/translate";
import { useIntl } from "react-intl";
import { LOCALES } from "../i18nProvider";


import SearchBar from "../search-bar/search-bar";


const Header = ({
  cartItemsCount,
  products,
  signInUser,
  onLanguageChange,
  onSignOut,
  onSearchItemChange
}) => {
  const intl = useIntl();

  const term = Object.values(products);
  const [searchItem, setSearchItem] = useState("");

  function handleSearchItem(data) {
    onSearchItemChange(data);
  }

  function onLangChage(lang) {
    onLanguageChange(lang);
  }

  function handleSignOut() {
    if (signInUser.userName) {
      onSignOut();
    }
  }

  const handleChange = (e) => {
    setSearchItem(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchedList = term.filter((product) => {
      return product?.name.toLowerCase().includes(searchItem.toLowerCase());
    });
    console.log(`Searching for ${searchedList.name}...`);
  };

  return (
    <header>
      <div className="header-container">
        <div className="header-grocery-name">
          <div className="header-logo">
            <Link to="/">
              <img
                src="https://www.wexfordbaseball.com/wp-content/uploads/2018/05/logo-metro.png"
                alt="image-logo"
              />
            </Link>
          </div>
        </div>
        <SearchBar onSearchItemChange={handleSearchItem} />
        <div className="header-right-side">
          <div className="cart">
            <Link to="/cart">
              <a className="btn-cart">
                <div className="item-Count"> {cartItemsCount}</div>
                {translate("cart")}
                <i className="header-cart-icon lni lni-cart"></i>
              </a>
            </Link>
          </div>
          <div>
            <Link to="/sign-in">
              <a onClick={handleSignOut}>
                {signInUser.userName
                  ? translate("signout")
                  : translate("signin")}
              </a>
            </Link>
          </div>

          {signInUser.userName && (
            <div className="sign-in-user">
              <div className="user-image">
                <img src={signInUser.imageUrl} />
              </div>
              <div className="user-name">
                {signInUser.isManager && (
                  <span>{translate("youAreAdmin")}</span>
                )}
                <span>{signInUser.userName}</span>
                <span>{signInUser.email}</span>
              </div>
            </div>
          )}
          <div className="language-container">
            <a
              className="language"
              onClick={() => onLangChage(LOCALES.ENGLISH)}
            >
              English
            </a>
            <a className="language" onClick={() => onLangChage(LOCALES.FRENCH)}>
              French
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
