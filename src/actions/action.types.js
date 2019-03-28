import { createAPIActions } from '../lib/utils';

// Product
export const PRODUCT_LIST_API = createAPIActions('product_list', 'api');
export const PRODUCT_DETAILS_API = createAPIActions('product_details', 'api');

// Cart
export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';
