import React from "react";
import { Link } from "react-router-dom";
import "./ContactList.css";

import ContactCard from "./ContactCard";
const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main">
      <div className="subhead">
        <h2>Contact List</h2>
        <Link to="/add">
          <button className="uiblue right">Add Contact</button>
        </Link>
      </div>
      <div className="ui celled list ">{renderContactList}</div>
    </div>
  );
};
export default ContactList;
