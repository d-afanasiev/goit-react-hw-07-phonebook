import axios from "axios";
import { v4 as uuidv4 } from "uuid";

axios.defaults.baseURL = "http://localhost:3001";

export async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function saveContact(value) {
  console.log(value);
  const { data } = await axios({
    method: "post",
    url: "/contacts",
    data: {
      id: uuidv4(),
      name: value.name,
      number: value.number,
    },
  });
  return data;
}
