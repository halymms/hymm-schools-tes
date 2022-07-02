import React from "react";

const Home = () => {
  return (
    <section class="padding-default design-thinking">
      <div class="design-thinking-text">
        <h1>The Design Thinking Superpowers</h1>
        <p>
          Tools tutorials, design and innovation experts, all <br />
          in one place! The most intuitive way for <br />
          your learning.
        </p>
        <div class="design-thinking-buttons">
          <a class="button-main" href={`${window.location.origin}/get-started`}>
            Get started
          </a>
          <a class="watch-button" href={`${window.location.origin}/the-plataform`}>
            <svg
              class="svg-inline--fa fa-play fa-w-14 me-2"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="play"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="currentColor"
                d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
              ></path>
            </svg>
            The Plataform
          </a>
        </div>
      </div>
      <div class="design-thinking-image">
        <img src={require("../../assets/hero/hero-img.png")} alt="Hero Img" />
      </div>
    </section>
  );
};

export default Home;
