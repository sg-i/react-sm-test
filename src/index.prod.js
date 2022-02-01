import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { App } from './components/app';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

function red(state = {}, action) {
  switch (action.type) {
    case 'ADD_DATA':
      return action.data;
    default:
      return state;
  }
}
function typesReducer(
  state = {
    arr: [],
  },
  action,
) {
  switch (action.type) {
    case 'TYPES_ADD':
      if (state.arr == undefined) {
        state.arr = [];
      }
      return {
        ...state,
        arr: [...state.arr, action.data],
      };
    case 'TYPES_DEL':
      if (state.arr == undefined) {
        state.arr = [];
      }
      return {
        ...state,
        arr: state.arr.filter((elem) => elem !== action.data),
      };
    default:
      return state;
  }
}

function brandsReducer(
  state = {
    arr: [],
  },
  action,
) {
  switch (action.type) {
    case 'BRANDS_ADD':
      if (state.arr == undefined) {
        state.arr = [];
      }
      return {
        ...state,
        arr: [...state.arr, action.data],
      };
    case 'BRANDS_DEL':
      if (state.arr == undefined) {
        state.arr = [];
      }
      return {
        ...state,
        arr: state.arr.filter((elem) => elem !== action.data),
      };
    default:
      return state;
  }
}

const reducer = combineReducers({
  data: red,
  types: typesReducer,
  brands: brandsReducer,
});

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

const store = createStore(reducer, window.REDUX_DATA, applyMiddleware(thunkMiddleware));

ReactDOM.hydrate(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>,
  document.getElementById('app'),
);
