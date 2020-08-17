
export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: {
    product
  }
});

export const removeFromCart = productId => ({
  type: 'REMOVE_FROM_CART',
  payload: {
    productId: productId
  }
})

export const increase = id => ({
  type: 'INCREASE',
  payload: {
    id
  }
})

export const decrease = id => ({
  type: 'DECREASE',
  payload: {
    id
  }
})

