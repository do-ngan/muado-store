const initialFavorite = [];

export const addFavorite = (itemToAdd) => {
    return {
        type: 'favorites/addFavorite',
        payload: itemToAdd,
    }
}

export const removeFavorite = (itemToRemove) => {
    return {
        type: 'favorites/removeFavorite',
        payload: itemToRemove,
    }
}

export const favoriteReducer = (favorites = initialFavorite, action) => {
  switch (action.type) {
    case 'favorites/addFavorite': {
        const existingItem = favorites.find(item => item.name === action.payload.name);
        if (!existingItem) {
            favorites.push(action.payload);
        }
        return favorites;
    }
    case 'favorites/removeFavorite': {
        return favorites.filter(item => item.name !== action.payload.name)
    }
    default: {
      return favorites;
    }
  }
};


