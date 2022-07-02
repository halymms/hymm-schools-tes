import React from "react";

const ThePlataform = () => {
  return (
    <section>
      <h1 class="title-benefits">
        We teaching tools to have
        <br />
        your superpowers
      </h1>
      <div class="benefits-container">
        <ul class="benefits-ul">
          <li class="benefits-list">
            <img src={require("../../assets/category/icon1.png")} alt="Icon 1" />
            <div class="benefits-list">
              <b>Lorem Ipsum</b>
              <p>
                Lorem ipsum dolor sit
                <br /> consectetur{" "}
              </p>
            </div>
          </li>
          <li class="benefits-list">
            <img src={require("../../assets/category/icon2.png")} alt="Icon 1" />
            <div class="benefits-list">
              <b>Lorem Ipsum</b>
              <p>
                Lorem ipsum dolor sit
                <br /> consectetur{" "}
              </p>
            </div>
          </li>
          <li class="benefits-list">
            <img src={require("../../assets/category/icon3.png")} alt="Icon 1" />
            <div class="benefits-list">
              <b>Lorem Ipsum</b>
              <p>
                Lorem ipsum dolor sit
                <br /> consectetur{" "}
              </p>
            </div>
          </li>
          <li class="benefits-list">
            <img src={require("../../assets/category/icon4.png")} alt="Icon 1" />
            <div class="benefits-text">
              <b>Lorem Ipsum</b>
              <p>
                Lorem ipsum dolor sit
                <br /> consectetur{" "}
              </p>
            </div>
          </li>
        </ul>
        <div class="button-container">
          <a class="button-main" href={`${window.location.origin}/sign-up`}>
            Sign up now
          </a>
        </div>
      </div>
    </section>
  );
};

export default ThePlataform;
