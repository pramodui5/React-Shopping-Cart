import { ADD_TO_CART, DELETE_FROM_CART } from './action.types';
const uuidv4 = require('uuid/v4');

const addCartItemId = (item) => {
  const cartItemId = uuidv4();
  const tempItem = Object.create(null);
  tempItem['cartId'] = cartItemId;
  tempItem['id'] = item.id;
  tempItem['albumId'] = item.albumId;
  tempItem['title'] = item.title;
  tempItem['url'] = item.url;
  tempItem['thumbnailUrl'] = item.thumbnailUrl;
  return tempItem;
};

export const addToCart = (item) => {
  return (dispatch, getState) => {
    return dispatch({ type: ADD_TO_CART, item: addCartItemId(item) });
  }
};

export const removeFromCart = (item) => {
  return (dispatch, getState) => {
    return dispatch({ type: DELETE_FROM_CART, item });
  }
};

