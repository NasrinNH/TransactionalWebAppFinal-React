import { useEffect, useState } from "react";
import ProductInformationPage from "./pages/product-information-page/product-information-page";
import LandingPage from "./pages/landing-page/landing-page";
import Header from "./header/header";
import Footer from "./footer/footer";
import ProductListPage from "./pages/product-list-page/product-list-page";
import NotFound from "./pages/not-found/not-found";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/cart-page/cartPage";
import SignInPage from "./pages/signIn-page/signInPage";
import Carousel from "./carousel/carousel";
import { useNavigate } from "react-router-dom";

import { I18nPropvider, LOCALES } from "./i18nProvider";

const App = () => {
  const URL_GROUPS_API = "http://localhost:4000/groups";
  const URL_PRODUCTS_API = "http://localhost:4000/products";

  const [locale, setLocale] = useState(LOCALES.ENGLISH);
  const [signInUser, setSignInUser] = useState({});
  const [groups, setGroups] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItemsList, setCartItemsList] = useState([]);

  const navigate = useNavigate();
  const [showSearchComponent, setShowSearchComponent] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const onAddToCartAmount = (data) => {
    setCartItemsList([...cartItemsList, data]);
  };

  console.log('cartItemsList: ', cartItemsList);

  const cartItemsTotalCount = cartItemsList.reduce(
    (prev, cur) => prev + cur.count,
    0
  );

  const handleSearchItem = (data) => {
    if (data.length > 3) {
      setShowSearchComponent(true);
      setSearchValue(data);
    } else {
      setShowSearchComponent(false);
    }
  };

  const temp = Object.values(products);
  const productsKeys = Object.keys(products);
  const productsInfo = temp.map((element, index) => {
    return { ...element, id: `${productsKeys[index]}` };
  });

  const filteredProducts = productsInfo.filter((product) =>
    product.name.includes(searchValue)
  );


  const promotionProducts = productsInfo.filter((p) => p.isOnPromotion);

  function handleUserSignedIn(data) {
    setSignInUser(data);
    navigate("/");
  }

  function onLanguageChange(lang) {
    setLocale(lang);
  }

  function onSignOut() {
    setSignInUser({});
  }

  useEffect(() => {
    fetch(URL_PRODUCTS_API)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });

    fetch(URL_GROUPS_API)
      .then((response) => response.json())
      .then((groups) => {
        setGroups(groups);
      });
  }, []);

  return (
    <I18nPropvider locale={locale}>
      <>
        <Header
          cartItemsCount={cartItemsTotalCount}
          products={products}
          signInUser={signInUser}
          onLanguageChange={onLanguageChange}
          onSignOut={onSignOut}
          onSearchItemChange={handleSearchItem}
        />

{showSearchComponent && (
          <LandingPage groups={groups} products={filteredProducts}>
          </LandingPage>
      )}
        {!showSearchComponent && (

          <Routes>
            <Route
              path="/"
              element={
                <LandingPage groups={groups} products={productsInfo}>
                  <Carousel promotionProducts={promotionProducts} />
                </LandingPage>
              }
            />
            <Route
              path="/products/:id"
              element={
                <ProductInformationPage
                  handleAddToCartAmount={onAddToCartAmount}
                  groups={groups}
                  products={productsInfo}
                >
                  <Carousel promotionProducts={promotionProducts} />
                </ProductInformationPage>
              }
            />
            <Route
              path="/sign-in"
              element={<SignInPage onUserSignedIn={handleUserSignedIn} />}
            />

            <Route path="/cart" element={<CartPage cartItems={cartItemsList} />} />
            <Route
              path="/groups/:code"
              element={
                <ProductListPage groups={groups} products={productsInfo}>
                  <Carousel promotionProducts={promotionProducts} />
                </ProductListPage>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>)}
        <Footer />
      </>
    </I18nPropvider>
  );
};

export default App;
