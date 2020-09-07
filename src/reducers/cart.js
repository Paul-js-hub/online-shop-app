const initialState = {
  items: [],
};

const cart = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, ...payload };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      };

    case "INCREASE":
      return { ...state, ...payload };

    case "DECREASE":
      return { ...state, ...payload };

    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
};

export default cart;
