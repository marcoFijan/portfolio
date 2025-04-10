import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../elements/Input";
import Button from "../elements/Button";
import H3 from "@/elements/H3";

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
          setSuccess(true);
        },
        (error) => {
          setSuccess(false);
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      autocomplete="off"
      className="w-full max-w-xl  mx-auto flex flex-col p-8 rounded-xl mt-20"
    >
      <H3 className={"mb-6"}>Voer hier je gegevens in</H3>
      <Input type={"text"} label={"Uw naam"} value={"name"} />
      <Input type={"email"} value={"email"} label={"Uw email"} />
      <Input type={"textarea"} value={"message"} label={"Uw bericht"} />
      <Button text={"Verstuur bericht"} type={"submit"} cta={true} />
      {succes && "Uw bericht is succesvol verzonden!"}
    </form>
  );
}
