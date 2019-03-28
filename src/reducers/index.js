import { combineReducers } from "redux";

import {ProductReducer as Products} from './product.reducer';

const rootReducer = combineReducers({
  Products
});

export default rootReducer;
