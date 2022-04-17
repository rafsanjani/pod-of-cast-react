import "./About.scss";
import React, { Fragment, useState } from "react";
import { LandingHero } from "../landing/Landing";
import ic_topic from "../../images/ic-topic.svg";
import { Footer } from "../../footer/Footer";

export function About() {
  return (
    <section className="about">
      <LandingHero
        title="About"
        subtitle="Pod of Cast"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit,  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis."
      >
        <div className="about-buttons">
          <button className="button outline-button">BECOME SPONSOR</button>
          <button className="button filled-button">SUBSCRIBE</button>
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
    <div className="about-grid">
      {count.map((count) => {
        return (
          <div className="card" key={count}>
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

function handleClick(e: React.MouseEvent) {
  e.preventDefault();
  console.log(`(${e.clientX}, ${e.clientY})`);
}

function GetInTouch() {
  return (
    <Fragment>
      <div className="contact-us">
        <h1>Get in touch</h1>
        <img className="header" src={ic_topic} alt="" />
        <h3>Send your message to us</h3>
      </div>
      <hr />
      <ContactUsForm />
    </Fragment>
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
      <div className="input-field">
        <label htmlFor="fullName">
          Full name <span>*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          onInput={(e) => setFullName(e.currentTarget.value)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          onInput={(e) => setEmail(e.currentTarget.value)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="phone">
          Phone <span>*</span>
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          onInput={(e) => setPhone(e.currentTarget.value)}
        />
      </div>
      <div className="input-field">
        <label htmlFor="subject">
          Subject <span>*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          onInput={(e) => setSubject(e.currentTarget.value)}
        />
      </div>
      <div className="input-field message-area">
        <label htmlFor="subject">
          Message <span>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          onInput={(e) => setMessage(e.currentTarget.value)}
        />
      </div>
      <div className="form-footer">
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
