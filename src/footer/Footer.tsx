import React, { Fragment } from "react";
import "./Footer.scss";
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
      <div className="wrapper">
        <div className="top">
          <div className="footer-left">
            <img className="logo" src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
              necessitatibus?
            </p>
            <ul className="socials">
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
          <ul>
            <li>About</li>
            <li className="text-red-700">Testimonials</li>
            <li>Features</li>
          </ul>
          <ul>
            <li className="text-red-600">Episodes</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
          <div className="footer-right">
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
    <ul className="app-stores">
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
    <Fragment>
      <ul className="social-logos">
        <li>
          <img className="streaming-platform" src={google} alt="Google" />
        </li>
        <li>
          <img className="streaming-platform" src={spotify} alt="Google" />
        </li>
        <li>
          <img className="streaming-platform" src={youtube} alt="Google" />
        </li>
      </ul>
    </Fragment>
  );
}
