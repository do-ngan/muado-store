import React, { useEffect } from "react";
import { addItem } from "../cart/cartSlice.js";
import { loadData } from "./inventorySlice";
import { addFavorite, removeFavorite } from "../favorite/favoriteSlice.js";

export const Inventory = ({ inventory, dispatch, favorites }) => {
  const onMount = () => {
    dispatch(loadData());
  };
  useEffect(onMount, [dispatch]);

  const onClickHandler = (inventoryItem) => {
    dispatch(addItem(inventoryItem));
  };
  const isFavorite = (item) =>
    favorites.some((favItem) => favItem.name === item.name);

  const toggleFavorite = (item) => {
    if (isFavorite(item)) dispatch(removeFavorite(item));
    else dispatch(addFavorite(item));
  };
  if (inventory.length === 0) {
    return <p> Sorry, no products are currently available... </p>;
  }

  return <ul id="inventory-container">{inventory.map(createInventoryItem)}</ul>;

  function createInventoryItem(inventoryItem) {
    const { price, name, img } = inventoryItem;
    return (
      <li key={name} className="item">
        <img src={img} alt={""} />
        <i
          class={`${
            isFavorite(inventoryItem)
              ? "fa-solid fa-heart fa-lg"
              : "fa-regular fa-heart fa-lg"
          }`}
          onClick={() => toggleFavorite(inventoryItem)}
        ></i>
        <h3 className="itemName">{name}</h3>
        <h3 className="price">${price}</h3>
        <button
          onClick={() => onClickHandler(inventoryItem)}
          className="add-to-cart-button"
        >
          Add to Cart
        </button>
      </li>
    );
  }
};
