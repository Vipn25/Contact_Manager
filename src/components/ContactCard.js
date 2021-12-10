import React from "react";
import ContactList from "./ContactList";
import { Link } from "react-router-dom";
import user from "../images/user.png";
import { MdDeleteForever } from "react-icons/md";
import { MdMode } from "react-icons/md";
import "./ContactCard.css";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item-container">
      <div className="sub-container">
        <img className="avatar image" src={user} alt="usr" />
        <div className="content">
          <div className="username">{name}</div>
          <div className="usermail">{email}</div>
        </div>
      </div>
      <div className="iconbox">
        <MdDeleteForever
          size="1.5rem"
          className="trash alternate outline icon "
          style={{ color: "red", marginTop: "7px", marginleft: "10px" }}
          onClick={() => props.clickHandler(id)}
        />
        <Link to={{ pathname: "/edit", state: { contact: props.contact } }}>
          <MdMode
            size="1.5rem"
            className="edit alternate outline icon "
            style={{ color: "blue", marginTop: "7px" }}
          />
        </Link>
      </div>
    </div>
  );
};
export default ContactCard;
