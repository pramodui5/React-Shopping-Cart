import { combineReducers } from "redux";

import {ProductReducer as Products} from './product.reducer';
import {CartReducer as Cart} from './cart.reducer';

const rootReducer = combineReducers({
  Products,
  Cart
});

export default rootReducer;
