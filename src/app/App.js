import React from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Inventory } from "../features/inventory/Inventory.js";
import { Cart } from "../features/cart/Cart";
import { SearchTerm } from "../features/searchTerm/SearchTerm.js";
import { Favorites } from "../features/favorite/Favorite";
import Slider from "../components/MainPage/Slider";
import Banner from "../components/banner/Banner";
import Wrapper from "../components/wrapper/Wrapper";
import Footer from "../common/footer/Footer";

export const App = ({ state, dispatch }) => {
  return (
    <>
      <Router>
        <SearchTerm
          searchTerm={state.searchTerm}
          dispatch={dispatch}
          favorites={state.favorites}
          cart={state.cart}
        />

        <Switch>
          <Route path="/" exact>
            <Slider />
            <Banner />
            <Wrapper />
          </Route>

          <Route path="/home" exact>
            <Inventory
              inventory={getFilteredItems(state.inventory, state.searchTerm)}
              dispatch={dispatch}
              favorites={state.favorites}
            />
          </Route>

          <Route path="/cart" exact>
            <Cart cart={state.cart} dispatch={dispatch} />
          </Route>

          <Route path="/favorites" exact>
            <Favorites favorites={state.favorites} dispatch={dispatch} />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
};
function getFilteredItems(items, searchTerm) {
  return items.filter((items) =>
    items.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}
