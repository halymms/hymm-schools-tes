import React from "react";

const Header = () => {
  return (
    <header class="padding-default header-di">
      <div class="div-logo">
        <a class="link-logo" href={`${window.location.origin}/`}>
          <p class="logo-hymm">
            Hyym<span class="schools-span">Schools</span>
          </p>
        </a>
      </div>
      <div class="links-header">
        <ul class="list-links-header">
          <li class="list-header">
            <a href={`${window.location.origin}/get-started`} class="list-links">
              Get Started
            </a>
          </li>
          <li class="list-header">
            <a href={`${window.location.origin}/the-plataform`} class="list-links">
              The Plataform
            </a>
          </li>
        </ul>
        <div class="register-or-enter">
          <a href={`${window.location.origin}/sign-in`} class="button sign-in">
            Sign In
          </a>
          <a href={`${window.location.origin}/sign-up`} class="button sign-up">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
