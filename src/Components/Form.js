import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [nameText, setNameText] = useState("");

  const [email, setEmail] = useState("");
  const [emailText, setEmailText] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneText, setPhoneText] = useState("");

  const nameChangeHandler = (e) => {
    const nameInput = e.target.value;
    setName(nameInput);
  };
  const emailChangeHandler = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
  };
  const phoneChangeHandler = (e) => {
    const phoneInput = e.target.value;
    setPhone(phoneInput);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setNameText(name);
    setEmailText(email);
    setPhoneText(phone);
  };

  return (
    <>
      <h2> {nameText} </h2>
      <p>{emailText}</p>
      <p>{phoneText}</p>
      <form className="wrapper" onSubmit={submitHandler}>
        <div>
          <input
            onChange={nameChangeHandler}
            type="text"
            placeholder="enter your name"
          />
        </div>
        <div>
          <input
            onChange={emailChangeHandler}
            type="email"
            placeholder="enter your email"
          />
        </div>
        <div>
          <input
            onChange={phoneChangeHandler}
            type="tel"
            placeholder="enter your phone"
          />
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
