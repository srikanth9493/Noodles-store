export const initialState = {
  basket: [],
  images: [],
};

export const actionTypes = {
  SORT_BY_RATING: "SORT_BY_RATING",
  SORT_BY_FILTER: "SORT_BY_FILTER",
  FILL_DATA: "FILL_DATA",
};

const reduce = (state, action) => {
  console.log("state,action", state, action);
  switch (action.type) {
    case actionTypes.SORT_BY_FILTER:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case action.SORT_BY_RATING:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case action.FILL_DATA:
      return {
        ...state,

        basket: [...state.basket, action.item],
        images: [...state.images, action.images],
      };

    default:
      return state;
  }
};

export default reduce;
