import products from '../reducers/products'
const initialState = {
  basketNumbers: 0,  
};

const cart = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'ADD_TO_CART':
      let addQuantity = {products}
      console.log('AddQuantity: ', addQuantity)
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