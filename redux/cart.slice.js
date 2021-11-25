import { createSlice } from '@reduxjs/toolkit';
import { setProductCart } from '../pages/api/cart/index';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((item) => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1});
      }
      setProductCart(state);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart
} = cartSlice.actions;