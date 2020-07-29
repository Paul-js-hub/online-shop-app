
const initialState = {
  items: []
};

const cart = (state = initialState, action) => {
  const { payload } = action;
  console.log('pay:', payload)
  switch (action.type) {
    case 'UPDATE_CART':
      return { ...state, ...payload };
    case 'REMOVE_FROM_CART':
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default cart;