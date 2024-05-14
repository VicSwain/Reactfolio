import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function ContactForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // get the value and the name of the input that caused state change
    const { name, value } = e.target;

    // update the state based on the input
    if (name === "email") {
      setEmail(value);
      if (!value.trim()) {
        setErrorMessage("Email is required");
      } else if (!validateEmail(value)) {
        setErrorMessage("Please enter a valid email");
      } else if (value.trim().lenght !== 0 ? "" : "Email is required") {
      } else {
        setErrorMessage("");
      }
    } else if (name === "userName") {
      setUserName(value);
      setErrorMessage(value.trim().length !== 0 ? "" : "Name is required");
    } else if (name === "message") {
      setMessage(value);
      setErrorMessage(value.trim().length !== 0 ? "" : "Message is required");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // validate username
    if (userName.trim()) {
      setErrorMessage("");
      return;
    }
    // validate message
    if (!message.trim()) {
      setErrorMessage("Message is required");
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email");
      return;
    }
    alert(`Thank you ${userName} for getting in touch with me`);

    setUserName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="col">
        <h1 className="text-center">Contact Me</h1>
        <form className="form" onSubmit={handleFormSubmit}>
          <div className=" form-group">
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              className="form-control"
              placeholder="Name"
              onBlur={handleInputChange}
            />
          </div>
          <p>{errorMessage}</p>
          <div className="form-group">
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              className="form-control"
              placeholder="Email"
              onBlur={handleInputChange}
            />
          </div>
          <div className="form-group">
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              className="form-control"
              placeholder="message"
              onBlur={handleInputChange}
            />
          </div>
          <div className="text-center form-group">
            <button
              type="submit"
              className="btn"
              style={{ backgroundColor: "#4CDA29", color: "black" }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
