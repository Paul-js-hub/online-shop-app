
export const addToCart = (payload) => ({
  type: 'ADD_TO_CART',
  payload
});

export const removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  id
})

export const increase = id => ({
  type: 'INCREASE',
  id
})

export const decrease = id => ({
  type: 'DECREASE',
  id
})

export const clearCart = payload => ({
  type: 'CLEAR_CART',
  payload
})


