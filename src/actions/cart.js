
export const addToCart = (payload) => ({
  type: 'ADD_TO_CART',
  payload
});

export const removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  id
})

export const increase = payload => ({
  type: 'INCREASE',
  payload
})

export const decrease = payload => ({
  type: 'DECREASE',
  payload
})

export const clearCart = payload => ({
  type: 'CLEAR_CART',
  payload
})


