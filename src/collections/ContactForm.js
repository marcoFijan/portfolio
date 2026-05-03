import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "../elements/Input";
import Button from "@/elements/Button";
import H3 from "@/elements/H3";

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
        "82Kmqh7RQh-GfNBXd",
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setSuccess(false);
        },
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      ref={form}
      autocomplete="off"
      className="w-full max-w-xl mx-auto flex flex-col gap-4 p-0 md:p-8 lg:p-12 md:rounded-4xl mb-10 valid:border-1 valid:border-white invalid:border-1 invalid:border-color-border transition-all duration-500 md:shadow-lg md:shadow-black/10"
    >
      <H3 className={"mb-4 mt-0!"}>Voer hier je gegevens in</H3>
      <Input type={"text"} label={"Uw naam"} />
      <Input type={"email"} label={"Uw email"} />
      <Input type={"textarea"} label={"Uw bericht"} />
      <Button type="submit">Verstuur bericht</Button>
      {succes && "Uw bericht is succesvol verzonden!"}
    </form>
  );
}
