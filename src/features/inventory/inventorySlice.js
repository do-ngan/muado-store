import { inventoryData } from '../../data.js';

const initialInventory = [];

export const loadData = () => {
  return {
    type: 'inventory/loadData',
    payload: inventoryData,
  };
};

export const inventoryReducer = (inventory = initialInventory, action) => {
  switch (action.type) {
    case 'inventory/loadData': {
      return action.payload;
    }
    default: {
      return inventory;
    }
  }
};
