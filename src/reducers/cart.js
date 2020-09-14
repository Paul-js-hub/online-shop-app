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
        //if individual item matches action.id then it will not be returned in the new array
        items: state.items.filter((item) => item.id !== action.id),
      };

    case "INCREASE":
      let tempCart = state.items.map((item) => {
        if (item.id === action.id) {
          item = { ...item, count: item.count + 1 };
        }
        return item;
      });
      return { ...state, items: tempCart };

    case "DECREASE":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? {
                ...item,
                count: item.count !== 1 ? item.count - 1 : 1
              }
            : item
        ),
      };

    case "CLEAR_CART":
      return { ...state, items: [] };
    default:
      return state;
  }
};

export default cart;
