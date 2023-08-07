import React from "react";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Banji");
  const [email, setEmail] = useState("ay.com");
  const handleSubmit = (e) => {
    alert(`SUCCESS! name: ${name}, email: ${email}`);
    e.preventDefault();
  };
  return (
    <form action="" method="get" onSubmit={handleSubmit}>
      <label htmlFor="name">
        {" "}
        Name
        <input
          type="text"
          name="fullname"
          id="name"
          placeholder="Please enter your full name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor="email">
        {" "}
        Email
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Please enter your email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label className="textlabel" htmlFor="message">
        Message
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="Enter your message here"
        ></textarea>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
