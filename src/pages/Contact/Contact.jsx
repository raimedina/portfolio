import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import Text from "../../components/Text/Text";
import Popup from "../../components/Popup/Popup";
import Button from "../../components/Button/Button";
import styles from "./Contact.module.css";
import PyramidProgress from "../../features/PyramidProgress/PyramidProgress";


const Contact = () => {
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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_a0cywz6";
    const templateID = "template_suwayiu";
    const publicKey = "llNXzzcf4zkcU217g";

    const emailParams = {
      from_name: formData.name || t("contact.nameLabel"),
      from_email: formData.email || t("contact.emailLabel"),
      message: formData.message || t("contact.messageLabel"),
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
  };

  return (
    <div className={styles.pageContainer}>
      <main className={styles.contactContainer}>
        <Text as="h1" className={styles.title}>{t("contact.title")}</Text>
        <Text as="p" className={styles.description}>  {t("contact.description")}</Text>

        <form onSubmit={handleFormSubmit} className={styles.contactForm}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="name"
              required
              placeholder={t("contact.nameLabel")}
              className={styles.input}
              value={formData.name}
              onChange={handleChange}
            />
           
          </div>

          <div className={styles.inputContainer}>
            <input
              type="email"
              name="email"
              required
              placeholder={t("contact.emailLabel")}
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
            />
           
          </div>

          <div className={styles.inputContainer}>
            <textarea
              name="message"
              required
              placeholder={t("contact.messageLabel")}
              className={styles.textarea}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            
          </div>

          <div className={styles.buttonContainer}>
            <Button label={t("contact.buttonLabel")} type="submit" className={styles.sendButton} />
          </div>
        </form>

        {status && <p className={styles.statusMessage}>{status}</p>}
      </main>
      <PyramidProgress></PyramidProgress>
      <Popup />
    </div>
  );
};

export default Contact;
