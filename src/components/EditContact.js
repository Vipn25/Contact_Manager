import React from "react";
import { useState, useEffect } from "react";
import "./AddContact.css";

const EditContact = (props) => {
  const { id, name, email } = props.location.state.contact;
  const [state, setState] = useState({
    id: id,
    name: name,
    email: email,
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setState({ ...state, [name]: value });
  };
  const update = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("All fields are mandatory!");
      return;
    }

    props.editContactHandler(state);
    console.log(state);
    setState({ name: "", email: "" });
    props.history.push("/");
  };
  return (
    <div className="mainbox">
      <h2>Update Contact</h2>
      <form className="form" onSubmit={update}>
        <div className="field">
          <label>Name </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={handlechange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="abc@gmail.com"
            value={state.email}
            onChange={handlechange}
          />
        </div>
        <button className="button">Update</button>
      </form>
    </div>
  );
};
export default EditContact;
