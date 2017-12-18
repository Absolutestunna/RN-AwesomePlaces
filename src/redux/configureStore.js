import { createStore, combineReducers, compose } from 'redux';


import placesReducer from './reducers/places-reducer';

const rootReducer = combineReducers({
  places: placesReducer
});

let composeEnhancers = compose();


if (__DEV__){
  // composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose;

}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers())
};


export default configureStore;
