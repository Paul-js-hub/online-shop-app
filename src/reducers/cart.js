
const initialState = {
  basketNumbers: 0,
  items: []
};

const cart = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, 
        ...payload,
        basketNumbers: state.basketNumbers + 1 
      };
    case 'REMOVE_FROM_CART':
      return { ...state };
    default:
      return state;
  }
};

export default cart;