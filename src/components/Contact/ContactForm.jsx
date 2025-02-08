import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import styles from "../../pages/Contact/Contact.module.css";
import Button from "../Button/Button";

const ContactForm = ({ onSubmit }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_a0cywz6";
    const templateID = "template_suwayiu";
    const publicKey = "llNXzzcf4zkcU217g";

    const emailParams = {
      from_name: formData.name || t("contact.namePlaceholder"),
      from_email: formData.email || t("contact.emailPlaceholder"),
      message: formData.message || t("contact.messagePlaceholder"),
    };

    emailjs
      .send(serviceID, templateID, emailParams, publicKey)
      .then(() => {
        setStatus(t("contact.statusSuccess"));
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus(t("contact.statusError"));
      });

    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder={t("contact.namePlaceholder")}
        className={styles.input}
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder={t("contact.emailPlaceholder")}
        className={styles.input}
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder={t("contact.messagePlaceholder")}
        className={styles.textarea}
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <div className={styles.buttonContainer}>
        <Button label={t("contact.buttonLabel")} size="medium" type="submit" />
      </div>
      {status && <p className={styles.statusMessage}>{status}</p>}
    </form>
  );
};

export default ContactForm;
