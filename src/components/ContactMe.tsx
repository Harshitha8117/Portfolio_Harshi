'use client';
import React, { useState } from 'react';
import styles from './ContactMe.module.css';

const ContactMe: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can hook this to your backend or email service here
    setSubmitted(true);
  };

  return (
    <section className={styles.contactSection}>
      <h2 className={styles.heading}>Get In Touch</h2>
      <p className={styles.subheading}>Whether it’s a project, collaboration, or just to say hi, I’m all ears!</p>

      {submitted ? (
        <div className={styles.thankYou}>Thanks for reaching out! I’ll get back to you soon.</div>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className={styles.textarea}
          />
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form>
      )}

      <div className={styles.socials}>
        <a href="mailto:harshitha02012005@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          Email
        </a>
        <a href="https://www.linkedin.com/in/harshitha-k-905a97257/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          LinkedIn
        </a>
        <a href="https://github.com/Harshitha8117/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          GitHub
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
