import React from "react";
import { useState, useEffect } from "react";
import "./AddContact.css";

const AddContact = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setState({ ...state, [name]: value });
  };
  const add = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("All fields are mandatory!");
      return;
    }

    props.addContactHandler(state);
    console.log(state);
    setState({ name: "", email: "" });
    props.history.push("/");
  };
  return (
    <div className="mainbox">
      <h2>Add Contact</h2>
      <form className="form" onSubmit={add}>
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
        <button className="button">Add</button>
      </form>
    </div>
  );
};
export default AddContact;
