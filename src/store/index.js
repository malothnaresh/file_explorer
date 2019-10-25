import { createStore, compose } from "redux";

import rootReducers from "./rootReducer";

// Dev Tools for development and enhancement.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store object
const store = createStore(rootReducers, composeEnhancers());

export default store;
