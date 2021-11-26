// configureStore.js

import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import toDoReducer from "./buyListReducer";

const persistConfig = {
  key: "todoAPP",
  storage,
};

const rootReducer = combineReducers({
  toDoReducer: toDoReducer,
});

let persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
let persistor = persistStore(store);
export { store, persistor };
// export const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
