import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function ContactForm() {
  const form = useRef();
  const [succes, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s4iwgms",
        "template_26bx8nk",
        form.current,
        "82Kmqh7RQh-GfNBXd"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      className="w-full h-full max-w-xl max-h-60 mx-auto flex flex-col"
    >
      <label htmlFor="name">Uw naam</label>
      <Input type={"name"} />
      <label htmlFor="email">Uw mail</label>
      <Input type={"email"} />
      <label htmlFor="message">Uw bericht</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        cols="50"
        required
        className="mb-8 mt-2 rounded-md shadow-inputField bg-bgColorLight p-2 valid:shadow-inputFieldValid focus:bg-white focus:border-2 focus:outline-none focus:border-accentColor focus:p-2 box-border"
      ></textarea>
      <Button text={"Verstuur bericht"} type={"submit"} cta={true} />
      {succes && "Uw bericht is succesvol verzonden!"}
    </form>
  );
}
