import React from "react";
import styles from "./Footer.module.scss";
import "../app/App.scss";
import logo from "../images/logo.svg";
import twitter from "../images/socials/twitter.svg";
import tiktok from "../images/socials/tiktok.svg";
import instagram from "../images/socials/instagram.svg";
import google from "../images/platforms/google-podcast.svg";
import spotify from "../images/platforms/spotify.svg";
import youtube from "../images/platforms/youtube.svg";
import appStore from "../images/platforms/app_store.svg";
import googlePlay from "../images/platforms/google_play.svg";

export function Footer() {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <div className={styles["footer-left"]}>
            <img className={styles.logo} src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
              necessitatibus?
            </p>
            <ul className={styles.socials}>
              <li>
                <img src={instagram} alt="" />
              </li>
              <li>
                <img src={twitter} alt="" />
              </li>
              <li>
                <img src={tiktok} alt="" />
              </li>
            </ul>
          </div>
          <ul className={styles["footer-nav"]}>
            <li>About</li>
            <li className="text-red-700">Testimonials</li>
            <li>Features</li>
          </ul>
          <ul className={styles["footer-nav"]}>
            <li className="text-red-600">Episodes</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
          <div className={styles["footer-right"]}>
            <p>Listen to episodes on your favorite platform:</p>
            <SocialLogos />
            <p>App available on</p>
            <AppStores />
          </div>
        </div>
        <hr />
      </div>
    </footer>
  );
}

function AppStores() {
  return (
    <ul className={styles["app-stores"]}>
      <li>
        <img src={appStore} alt="" />
      </li>
      <li>
        <img src={googlePlay} alt="" />
      </li>
    </ul>
  );
}

function SocialLogos() {
  return (
    <ul className={styles["social-logos"]}>
      <li>
        <img
          className={styles["streaming-platform"]}
          src={google}
          alt="Google"
        />
      </li>
      <li>
        <img
          className={styles["streaming-platform"]}
          src={spotify}
          alt="Google"
        />
      </li>
      <li>
        <img
          className={styles["streaming-platform"]}
          src={youtube}
          alt="Google"
        />
      </li>
    </ul>
  );
}
