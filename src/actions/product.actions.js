import CommonApi from '../api/common.api';
import { CONSTANTS } from '../constants';
import { PRODUCT_LIST_API } from './action.types';

export const getProductList = () => {
  return (dispatch, getState) => {
    const config = {
      method: "GET",
      headers: {
        Accept: "application/json"
      },
      retryOn: [403]
    };
    return dispatch(CommonApi.fetch(`${CONSTANTS.API_URL}${CONSTANTS.PHOTOS}?_page=1&_limit=10`,
      config,
      PRODUCT_LIST_API))
  }

};

