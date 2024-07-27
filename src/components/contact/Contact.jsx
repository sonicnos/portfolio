import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);
    console.log("log");

    emailjs
      .sendForm(
        "service_dy5pddd",
        "template_7h2x6ss",
        form.current,
        "xEpo1dURXJitTk3QH"
      )
      .then(
        (result) => {
          console.log("ok");
          toast.success("Email sent successfully", {
            style: {
              borderRadius: "10px",
              background: "#4db5ff",
              color: "#1f1f38",
              fontSize: "1.34rem",
            },
          });
        },
        (error) => {
          console.log("error");
          toast.error("Email not sent", {
            style: {
              borderRadius: "10px",
              background: "#4db5ff",
              color: "#1f1f38",
              fontSize: "1.34rem",
            },
          });
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Type Your Message Here."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary" onClick={""}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
