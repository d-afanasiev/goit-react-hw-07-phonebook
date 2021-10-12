import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
// import { connect } from "react-redux";
// import * as actions from "../../redux/actions";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/operations";
import css from "./ContactList.module.css";
import { getContacts, getFilter } from "../../redux/selector";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  console.log(contacts);

  const visibleList = () => {
    const normalizeFilter = filter.toLowerCase();
    console.log(contacts);
    if (contacts) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizeFilter)
      );
    }
    return;
  };
  // const deleteContact = (value) => dispatch(fetchContacts.fetchContacts(value));
  return (
    <ul className={css.listContacts}>
      {visibleList() &&
        visibleList().map((contact) => (
          <li key={contact.id} className={css.item}>
            {contact.name}: {contact.number}
            <button
              type="submit"
              className={css.button}
              // onClick={() => deleteContact(contact)}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   deleteContact: (value) => dispatch(actions.deleteContacts(value)),
// });

// export default connect(null, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  getVisibleContacts: PropTypes.func,
  deleteContact: PropTypes.func,
};
