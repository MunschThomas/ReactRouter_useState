import { useState } from "react";

import Input from "../components/Input";

import "./Contact.css";

const Contact = () => {
  const [userInput, setUserInput] = useState("");
  const [userEmail, setUserEmail] = useState("");

  return (
    <div className="contact__container">
      <div className="contact__wrapper">
        <h1>Contact Us</h1>
        <Input
          userInput={userInput}
          setUserInput={setUserInput}
          nameInput="Name"
        />
        <Input
          userEmail={userEmail}
          setUserEmail={setUserEmail}
          nameInput="Email"
        />
      </div>
    </div>
  );
};

export default Contact;
