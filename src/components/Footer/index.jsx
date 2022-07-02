import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="footer-di">
        <div class="logo-footer">
          <a class="link-logo" href={`${window.location.origin}/`}>
            <p class="logo-hymm">
              Hyym<span class="schools-span">Schools</span>
            </p>
          </a>
        </div>
        <div>
          <ul class="list-footer">
            <span class="title-newsletter">Quick Links</span>
            <li class="links-footer-list">
              <a href={`${window.location.origin}/the-plataform`} class="links-footer">
                The Plataform
              </a>
            </li>
            <li class="links-footer-list">
              <a href={`${window.location.origin}/get-started`} class="links-footer">
                Get Started
              </a>
            </li>
          </ul>
        </div>
        <div class="input-newsletter-container">
          <span class="title-newsletter">
            For view new news, insert your email.
          </span>
          <input
            type="number"
            class="input-newsletter"
            placeholder="Insert your email"
          />
          <button type="submit" class="button-newsletter">
            Create Alert
          </button>
        </div>
      </footer>
      <div class="credits">
        <p>© 2022 Hymm Schools Inc</p>
        <p>
          Made with dedication <span>by halymms</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
