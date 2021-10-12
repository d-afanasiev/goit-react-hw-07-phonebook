import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const addContacts = createAction("app/add", (value) => ({
  payload: {
    id: uuidv4(),
    name: value.name,
    number: value.number,
  },
}));

export const deleteContacts = createAction("app/delete");

export const filterContacts = createAction("app/filter");
