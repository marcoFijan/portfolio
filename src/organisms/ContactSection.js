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
    <>
      <div id="splitterStart"></div>
      <article className="h-screen bg-bgColorLight">
        <div className="max-w-wrapper mx-auto w-full px-8">
          <Section
            title={"Interesse?"}
            subTitle={"Neem gerust contact met me op!"}
            extraContent={<ContactForm />}
          ></Section>
        </div>
      </article>
    </>
  );
}
