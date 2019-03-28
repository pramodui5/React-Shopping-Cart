import { PRODUCT_LIST_API } from '../actions/action.types';

export function ProductReducer(
  state = {
    isFetching: false,
    productList: []
  },
  action
) {
  switch (action.type) {
    case PRODUCT_LIST_API.REQUEST:
      return { ...state, isFetching: true };

    case PRODUCT_LIST_API.SUCCESS:
      return {
        ...state,
        productList: action.data,
        isFetching: false
      };

    case PRODUCT_LIST_API.FAILURE:
      return { ...state, isFetching: false };

    default:
      return state;
  }
}
