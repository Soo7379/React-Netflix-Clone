export const initialState = [
  {
    category: "series",
  },
  {
    favorites: "",
  },
];

export const actionTypes = {
  SET_CATEGORY: "SET_CATEGORY",
  SET_FAVORITES: "SET_FAVORITES",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };

    case actionTypes.SET_FAVORITES:
      return {
        ...state,
        favorites: action.favorites,
      };

    default:
      return state;
  }
};

export default reducer;
