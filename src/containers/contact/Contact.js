import React from "react";
import "./Contact.css";
import edouard5 from "../../assets/edouard5.png";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import location from "../../assets/location.png";

function Contact() {
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
          {/* <form action="">
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" name="message"></textarea>
            <button>Submit</button>
          </form> */}
          <form action="">
            <div class="form__group field">
              <input
                type="input"
                class="form__field"
                placeholder="Name"
                name="name"
                id="name"
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
                name="subject"
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
                name="email"
                id="email"
                required
              />
              <label for="email" class="form__label">
                Email
              </label>
            </div>
            <textarea rows="5" name="message"></textarea>
            <button className="button-pink">Submit</button>
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
