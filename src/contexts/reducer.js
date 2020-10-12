export const initialState = [
  {
    category: 'series',
  },
];

export const actionTypes = {
  SET_CATEGORY: 'SET_CATEGORY',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORY:
      return {
        ...state,
        category: action.category,
      };

    default:
      return state;
  }
};

export default reducer;
