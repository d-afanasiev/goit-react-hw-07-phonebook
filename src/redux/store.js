// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "../redux/reducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const todosPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(todosPersistConfig, reducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);

// const rootReducer = combineReducers({
//   contacts: reducer,
// });

// function saveToLocalStorage(state) {
//   const serialisedState = JSON.stringify(state);
//   localStorage.setItem("contacts", serialisedState);
// }

// function loadFromLocalStorage() {
//   const serialisedState = localStorage.getItem("contacts");
//   if (serialisedState === null) return undefined;
//   return JSON.parse(serialisedState);
// }

// const store = createStore(
//   rootReducer,
//   loadFromLocalStorage(),
//   composeWithDevTools()
// );

// store.subscribe(() => saveToLocalStorage(store.getState()));

// export default store;
