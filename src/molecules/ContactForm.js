import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function ContactForm({ darkBackground }) {
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
      className="w-full max-w-xl  mx-auto flex flex-col"
    >
      <label
        htmlFor="name"
        className={darkBackground ? "text-white" : "text-black"}
      >
        Uw naam
      </label>
      <Input type={"name"} darkBackground={darkBackground} />
      <label
        htmlFor="email"
        className={darkBackground ? "text-white" : "text-black"}
      >
        Uw mail
      </label>
      <Input type={"email"} darkBackground={darkBackground} />
      <label
        htmlFor="message"
        className={darkBackground ? "text-white" : "text-black"}
      >
        Uw bericht
      </label>
      <textarea
        id="message"
        name="message"
        rows="4"
        cols="50"
        required
        // className="mb-8 mt-2 rounded-md shadow-inputField bg-bgColorLight p-2 valid:shadow-inputFieldValid focus:bg-white focus:border-2 focus:outline-none focus:border-accentColor focus:p-2 box-border"
        className={`mb-8 mt-2 rounded-md ${
          darkBackground
            ? "shadow-inputField bg-bgColorLight valid:shadow-inputFieldDarkValid "
            : "shadow-inputField bg-bgColorLight valid:shadow-inputFieldValid "
        } p-2 border-2 border-white focus:bg-white focus:border-2 focus:outline-none focus:border-accentColor box-border`}
      ></textarea>
      <Button text={"Verstuur bericht"} type={"submit"} cta={true} />
      {succes && "Uw bericht is succesvol verzonden!"}
    </form>
  );
}
