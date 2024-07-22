import React, { useRef, useState } from "react";
import { transitionLeftRight } from "../utils/transition";
import "../css/Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [isValidEmail, setIsValidaEmail] = useState(true);

  const handleFormSubmission = (e) => {
    e.preventDefault();

    if (isValidEmail) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          {
            publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            e.target.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    } else {
    }
  };

  const validateEmail = (e) => {
    setIsValidaEmail(
      e.target.value
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    );
  };

  return (
    <div className="contact-form">
      <form ref={formRef} onSubmit={(e) => handleFormSubmission(e)}>
        <fieldset>
          <label htmlFor="">Full Name</label>
          <input type="text" name="from_name" id="" required />
        </fieldset>
        <fieldset>
          <label htmlFor="">Email</label>
          <input
            type="text"
            name="email"
            id=""
            required
            onChange={validateEmail}
          />
          {!isValidEmail ? (
            <p className="invalid-email">Please enter a valid email</p>
          ) : (
            <></>
          )}
        </fieldset>
        <fieldset>
          <label htmlFor="">Message</label>
          <textarea name="message" id="" required></textarea>
        </fieldset>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default transitionLeftRight(Contact);
