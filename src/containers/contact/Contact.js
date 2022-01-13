import React, { useRef, useState } from "react";
import "./Contact.css";
import edouard5 from "../../assets/edouard5.png";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import location from "../../assets/location.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef();
  const [name, setName] = useState("");
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f8fbxir",
        "template_gm5vadb",
        formRef.current,
        "user_l8s8B8JbKBef0uIaiKcFu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="portfolio__contact contact" id="contact">
      <div className="bg-contact"></div>
      <div className="portfolio__contact-container section__padding">
        <div className="portfolio__contact-container-info">
          <h1>Let's discuss</h1>
          <div className="portfolio__contact-container-info-item">
            <img src={phone} alt="phone" />
            <p>(+33) 06 27 13 57 23</p>
          </div>
          <div className="portfolio__contact-container-info-item">
            <img src={email} alt="email" />
            <p>edtoulet@gmail.com</p>
          </div>
          <div className="portfolio__contact-container-info-item">
            <img src={location} alt="location" />
            <p>Asnières sur Seine, 92600</p>
          </div>
        </div>
        <div className="portfolio__contact-container-form">
          <p>
            <strong> What 's your story ?</strong> Get in touch. Always
            available for freelancing if the project comes along me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div class="form__group field">
              <input
                type="input"
                class="form__field"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                name="user_name"
                id="name"
                autoComplete="off"
                required
              />
              <label for="name" class="form__label">
                Name
              </label>
            </div>
            <div class="form__group field">
              <input
                type="input"
                class="form__field"
                placeholder="Subject"
                autoComplete="off"
                name="user_subject"
                id="subject"
                required
              />
              <label for="subject" class="form__label">
                Subject
              </label>
            </div>
            <div class="form__group field">
              <input
                type="input"
                class="form__field"
                placeholder="Email"
                name="user_email"
                autoComplete="off"
                id="email"
                required
              />
              <label for="email" class="form__label" >
                Email
              </label>
            </div>
            <textarea rows="5" name="message"></textarea>
            <button className="button-pink">Submit</button>
            {done && (
              <h2 className="contact__message">
                Thank you {name} ! I m gonna joining you quickly !{" "}
              </h2>
            )}
          </form>
        </div>
      </div>
      <div className="portfolio__contact-image">
        <img src={edouard5} alt="" />
      </div>
    </div>
  );
}

export default Contact;
