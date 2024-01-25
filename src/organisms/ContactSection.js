import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Section from "../molecules/Section";
import ContactForm from "../molecules/ContactForm";

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

  return (
    <>
      {homePage && <div id="splitterStart"></div>}
      <article
        className={`py-16 box-border min-h-screen z-50  ${
          homePage && "bg-bgColorLight"
        } md:mt-0`}
      >
        <div className="max-w-wrapper mx-auto w-full px-articlePaddingMobile md:px-articlePadding">
          <Section
            title={"Interesse?"}
            subTitle={"Neem gerust contact met me op!"}
            extraContent={<ContactForm darkBackground={true} />}
            darkBackground={true}
          ></Section>
        </div>
      </article>
    </>
  );
}
