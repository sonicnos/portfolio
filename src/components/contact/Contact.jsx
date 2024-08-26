import React, { useState } from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formSubmit = useRef();
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(formSubmit.current);
    console.log("log");

    emailjs
      .sendForm(
        "service_dy5pddd",
        "template_7h2x6ss",
        formSubmit.current,
        "xEpo1dURXJitTk3QH"
      )
      .then(
        (result) => {
          toast.success("Email sent successfully", {
            style: {
              borderRadius: "10px",
              background: "#4db5ff",
              color: "#1f1f38",
              fontSize: "1.34rem",
            },
          });
          setFormData({
            name: "",
            email: "",
            message: "",
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
      <h2>{t("subtitleContact")}</h2>
      <div className="container contact__container">
        <form ref={formSubmit} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder={t("placeholderName")}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("placeholderEmail")}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder={t("placeholderMessage")}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary" onClick={""}>
            {t("sendBtn")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
