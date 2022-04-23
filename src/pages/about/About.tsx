import styles from "./About.module.scss";
import React, { useState } from "react";
import { LandingHero } from "../../components/landing/Landing";
import ic_topic from "../../icons/ic-topic.svg";
import { Footer } from "../../footer/Footer";

export function About() {
  return (
    <section className={styles.about}>
      <LandingHero
        title="About"
        subtitle="Pod of Cast"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis."
      >
        <div className={styles["about-buttons"]}>
          <button
            className={`button outline-button ${styles["outline-button"]}`}
          >
            Become Sponsor
          </button>
          <button className="button filled-button">Subscribe</button>
        </div>
      </LandingHero>
      <AboutGrid />
      <GetInTouch />
      <Footer />
    </section>
  );
}

function AboutGrid() {
  const count = [76, 128, 59];

  return (
    <div className={styles["about-grid"]}>
      {count.map((count) => {
        return (
          <div className={styles.card} key={count}>
            <h2>
              {count}
              <span>K</span>
            </h2>
            <p>Community members</p>
          </div>
        );
      })}
    </div>
  );
}

function GetInTouch() {
  return (
    <>
      <div className={styles["contact-us"]}>
        <h1>Get in touch</h1>
        <img className={styles.header} src={ic_topic} alt="" />
        <h3>Send your message to us</h3>
      </div>
      <hr />
      <ContactUsForm />
    </>
  );
}

function ContactUsForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <form>
      <div className={styles["input-field"]}>
        <label htmlFor="fullName">
          Full name <span>*</span>
        </label>
        <input
          className={styles["text-input"]}
          type="text"
          placeholder="John Doe"
          id="fullName"
          name="fullName"
          onInput={(e) => setFullName(e.currentTarget.value)}
        />
      </div>
      <div className={styles["input-field"]}>
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          className={styles["text-input"]}
          type="email"
          placeholder="john@doe.com"
          id="email"
          name="email"
          onInput={(e) => setEmail(e.currentTarget.value)}
        />
      </div>
      <div className={styles["input-field"]}>
        <label htmlFor="phone">
          Phone <span>*</span>
        </label>
        <input
          className={styles["text-input"]}
          type="text"
          placeholder="07438166633"
          id="phone"
          name="phone"
          onInput={(e) => setPhone(e.currentTarget.value)}
        />
      </div>
      <div className={styles["input-field"]}>
        <label htmlFor="subject">
          Subject <span>*</span>
        </label>
        <input
          className={styles["text-input"]}
          type="text"
          id="subject"
          placeholder="Hello World!"
          name="subject"
          onInput={(e) => setSubject(e.currentTarget.value)}
        />
      </div>
      <div className={`${styles["input-field"]} ${styles["message-area"]}`}>
        <label htmlFor="subject">
          Message <span>*</span>
        </label>
        <textarea
          className={styles["text-input"]}
          id="message"
          placeholder="Start typing something..."
          name="message"
          onInput={(e) => setMessage(e.currentTarget.value)}
        />
      </div>
      <div className={styles["form-footer"]}>
        <p>
          <span>*</span> Required
        </p>
        <button
          className="button filled-button"
          onClick={(e) => {
            e.preventDefault();
            console.log(`${fullName} ${subject} ${phone} ${email} ${message}`);
          }}
        >
          Send Message
        </button>
        <p>Viverra at port accumsan. Orci non</p>
      </div>
    </form>
  );
}
