import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  fetchContacts,
  filterContacts,
  addContacts,
  deleteContacts,
} from "../redux/operations";

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContacts.fulfilled]: (state, action) => [...state, action.payload],
  [deleteContacts.fulfilled]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
});

const filter = createReducer("", {
  [filterContacts]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  items,
  isLoading,
  error,
  filter,
});

// import { combineReducers } from "redux";
// import { createReducer } from "@reduxjs/toolkit";
// import { addContacts, deleteContacts, filterContacts } from "./actions";

// const itemsReducer = createReducer([], {
//   [addContacts]: (state, { payload }) => {
//     const findContacts = state.find((contact) => contact.name === payload.name);

//     if (!findContacts) {
//       return [...state, payload];
//     } else {
//       alert(`${payload.name} is already in contacts.`);
//       return state;
//     }
//   },

//   [deleteContacts]: (state, { payload }) => {
//     return state.filter((contact) => contact.id !== payload.id);
//   },
// });

// const filterReducer = createReducer("", {
//   [filterContacts]: (_, { payload }) => {
//     return payload;
//   },
// });

// export default combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });
