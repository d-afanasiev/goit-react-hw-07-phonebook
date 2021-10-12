import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts, deleteContacts } from "../../redux/operations";
import css from "./ContactList.module.css";
import { getContacts, getFilter } from "../../redux/selector";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const visibleList = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };
  const deleteContact = (value) => dispatch(deleteContacts(value));
  return (
    <ul className={css.listContacts}>
      {visibleList() &&
        visibleList().map((contact) => (
          <li key={contact.id} className={css.item}>
            {contact.name}: {contact.number}
            <button
              type="submit"
              className={css.button}
              onClick={() => deleteContact(contact)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  getVisibleContacts: PropTypes.func,
  deleteContact: PropTypes.func,
};
