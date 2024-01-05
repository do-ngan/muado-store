import React from "react";
import logo from "../../components/assets/images/logo.svg";
import { setSearchTerm, clearSearchTerm } from "./searchTermSlice.js";
import { Link } from "react-router-dom";

export const SearchTerm = (props) => {
  const { searchTerm, dispatch, favorites, cart } = props;

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };

  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  const onNumberChange = () => {
    let numberOfItems = Object.keys(cart).length;
    let valueOfQuantity = Object.values(cart);
    for (let value of valueOfQuantity) {
      if (value.quantity === 0) numberOfItems--;
    }
    return numberOfItems;
  };

  return (
    <div className="searchTerm_header">
      <Link to="/">
        <img id="logo" src={logo} alt="" />
      </Link>

      <ul className="f_flex capitalize">
        {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/men">men's</Link>
        </li>
        <li>
          <Link to="/woman">woman's</Link>
        </li>
        <li>
          <Link to="/kids">kids</Link>
        </li>
        <li>
          <Link to="/jeans">jeans</Link>
        </li>
      </ul>

      <div id="search-container">
        <i id="search-icon" class="fa-solid fa-magnifying-glass"></i>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={onSearchTermChangeHandler}
          placeholder="Search products"
        />
        {searchTerm.length > 0 && (
          <button
            onClick={onClearSearchTermHandler}
            type="button"
            id="search-clear-button"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        )}
      </div>
      <div className="icon f_flex width">
        <Link to="/favorites">
          <i
            class={`${
              favorites.length > 0
                ? "fa-solid fa-heart fa-lg"
                : "fa-regular fa-heart fa-lg"
            }`}
          ></i>
        </Link>
        <div className="cart">
          <Link to="/cart">
            <i class="fa-solid fa-bag-shopping fa-lg"></i>
            <i
              class={`${onNumberChange() > 0 ? "fa badge fa-lg" : ""}`}
              value={onNumberChange()}
            ></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
