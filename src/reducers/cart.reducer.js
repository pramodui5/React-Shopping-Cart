import {remove as _remove} from 'lodash';
import { ADD_TO_CART, DELETE_FROM_CART } from '../actions/action.types';

export function CartReducer(
  state = {
    cartList: [],
    cartId: 1000
  },
  action
) {
  switch (action.type) {
    case ADD_TO_CART:
      const cartListArr = [...state.cartList];
      cartListArr.push(action.item);
      return { ...state, cartList:  cartListArr};

    case DELETE_FROM_CART:
      _remove(state.cartList, (currentObject) => {
        return currentObject.cartId === action.item.cartId;
      });
      return {...state, cartList: state.cartList};

    default:
      return state;
  }
}
