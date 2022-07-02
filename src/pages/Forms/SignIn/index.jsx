import React from "react";

const SignIn = () => {
  return (
    <section class="padding-default design-thinking">
      <form class="form-login">
        <h3>Log in</h3>
        <input placeholder="Add your email" type="text" />
        <input placeholder="Add your password" type="password" />
        <div class="button-container">
          <a class="button-main" href={`${window.location.origin}/get-started`}>
            Log in
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

export default SignIn;
