import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
// import * as types from "./types";
import { addContacts, deleteContacts, filterContacts } from "./actions";

const itemsReducer = createReducer([], {
  [addContacts]: (state, { payload }) => {
    const findContacts = state.find((contact) => contact.name === payload.name);

    if (!findContacts) {
      return [...state, payload];
    } else {
      alert(`${payload.name} is already in contacts.`);
      return state;
    }
  },

  [deleteContacts]: (state, { payload }) => {
    return state.filter((contact) => contact.id !== payload.id);
  },
});

const filterReducer = createReducer("", {
  [filterContacts]: (_, { payload }) => {
    return payload;
  },
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

// Этап 1

// const itemsReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       const findContacts = state.find(
//         (contact) => contact.name === payload.name
//       );

//       if (!findContacts) {
//         return [...state, payload];
//       } else {
//         alert(`${payload.name} is already in contacts.`);
//         return state;
//       }

//     case types.DELETE:
//       return state.filter((contact) => contact.id !== payload.id);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };
