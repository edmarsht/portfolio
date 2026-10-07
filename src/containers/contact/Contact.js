import React, { useState } from "react";
import "./Contact.css";
import Reveal from "../../components/reveal/Reveal";
import { Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react";

const CONTACT_EMAIL = "edtoulet@gmail.com";

function Contact() {
  const [form, setForm] = useState({ name: "", subject: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = form.subject || `Contact depuis le portfolio - ${form.name}`;
    const body = `${form.message}\n\n${form.name} (${form.email})`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container contact__inner">
        <Reveal as="div" className="contact__info">
          <h2>Discutons de votre projet.</h2>
          <p className="contact__lead">
            Mission de conseil, audit ou simple échange sur la gouvernance de
            la sécurité : je réponds rapidement.
          </p>

          <div className="contact__item">
            <Phone size={18} />
            <p>(+33) 06 27 13 57 23</p>
          </div>
          <div className="contact__item">
            <EnvelopeSimple size={18} />
            <p>{CONTACT_EMAIL}</p>
          </div>
          <div className="contact__item">
            <MapPin size={18} />
            <p>Paris, 75017</p>
          </div>
        </Reveal>

        <Reveal as="form" delay={0.1} className="contact__form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="name">Nom</label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={handleChange("name")}
              autoComplete="name"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="subject">Sujet</label>
            <input
              id="subject"
              type="text"
              value={form.subject}
              onChange={handleChange("subject")}
              autoComplete="off"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="email">Votre email</label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              autoComplete="email"
              required
            />
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              value={form.message}
              onChange={handleChange("message")}
              required
            />
          </div>

          <button type="submit" className="btn btn--primary">
            Envoyer
          </button>

          {sent && (
            <p className="contact__confirmation" role="status">
              Votre messagerie va s'ouvrir avec le message pré-rempli, vers {CONTACT_EMAIL}.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
