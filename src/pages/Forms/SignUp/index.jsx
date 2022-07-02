import React from "react";

const SignUp = () => {
  return (
    <section class="padding-default design-thinking">
      <form class="form-login">
        <h3>Register Now</h3>
        <input placeholder="First Name" type="text" />
        <input placeholder="Last Name" type="text" />
        <input placeholder="Type" type="text" />
        <input placeholder="E-mail" type="email" />
        <input placeholder="Password" type="password" />
        <div class="button-container">
          <a class="button-main" href={`${window.location.origin}/sign-in`}>
            Sign Up
          </a>
        </div>
      </form>
      <div class="design-thinking-image">
        <img
          src={require("../../../assets/manager/manager.png")}
          class="img-get-started"
          alt="Hero Img"
        />
      </div>
    </section>
  );
};

export default SignUp;
