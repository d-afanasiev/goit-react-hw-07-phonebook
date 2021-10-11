import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
// import { ADD, DELETE, FILTER } from "./types";

export const addContacts = createAction("app/add", (value) => ({
  payload: {
    id: uuidv4(),
    name: value.name,
    number: value.number,
  },
}));

export const deleteContacts = createAction("app/delete");

export const filterContacts = createAction("app/filter");

// export const addContacts = (value) => ({
//   type: ADD,
//   payload: {
//     id: uuidv4(),
//     name: value.name,
//     number: value.number,
//   },
// });

// export const deleteContacts = (value) => ({
//   type: DELETE,
//   payload: value,
// });
// export const filterContacts = (value) => ({
//   type: FILTER,
//   payload: value,
// });
