import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactForm from "../collections/ContactForm";

export default function ContactSection({ homePage }) {
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

  return <ContactForm />;
}
