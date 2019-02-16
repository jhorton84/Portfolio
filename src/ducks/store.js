import { createStore, applyMiddleware, combineReducers } from "redux";
import reduxPromiseMiddleware from "redux-promise-middleware";
import ProfileReducer from './ProfileReducer';


const reducer = combineReducers({
    ProfileReducer: ProfileReducer
  });
  
  const store = createStore(reducer, applyMiddleware(reduxPromiseMiddleware));
  
  export default store;