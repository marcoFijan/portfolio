import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Section from "../molecules/Section";
import ContactForm from "../molecules/ContactForm";

export default function SkillsSection() {
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
    <article className="max-w-wrapper mx-auto w-full h-screen px-8 bg-bgColorLight">
      <Section
        title={"Interesse?"}
        subTitle={"Neem gerust contact met me op!"}
        extraContent={<ContactForm />}
      ></Section>
      {/* <article className="py-10 h-full box-border">
        <h1 className="">Interesse?</h1>
        <h2 className="">Neem gerust contact met me op!</h2>
        <p className="py-8 text-bgColorLight">Wat is uw naam?</p>
        <form
          onSubmit={sendEmail}
          ref={form}
          className="w-full h-full max-w-xl max-h-60 mx-auto flex flex-col"
        >
          <label htmlFor="name">Uw naam</label>
          <input
            type="name"
            id="name"
            name="name"
            required
            className="mb-8 rounded-md border border-bgColorDark p-2"
          />
          <label htmlFor="email">Uw mail</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mb-8 rounded-md border border-bgColorDark p-2"
          />
          <label htmlFor="message">Uw bericht</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            required
            className="mb-8 rounded-md border border-bgColorDark p-2"
          ></textarea>
          <button
            className="mb-8 text-bgColorLight font-bold bg-CTAColor p-2 rounded-full"
            type="submit"
          >
            Verstuur bericht
          </button>
          {succes && "Uw bericht is succesvol verzonden!"}
        </form>
      </article> */}
    </article>
  );
}
