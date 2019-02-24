import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';

const logMiddleware = (store) => (next) => (action) => {
  console.log(action.type);
  return next(action);
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logMiddleware));

const myAction = (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAYED_ACTION'
  }), 2000);
};

const myActionCreator = () => (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAYED_ACTION'
  }), 2000);
};

store.dispatch(myAction);

export default store;