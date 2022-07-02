import React from "react";

const GetStarted = () => {
  return (
    <section class="padding-default design-thinking">
      <div class="design-thinking-text">
        <h1>Get Started</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          tincidunt nisi vel est hendrerit hendrerit. Duis et suscipit eros, at
          consectetur massa. Integer fringilla nulla maximus.
        </p>
        <div class="get-buttons">
          <a
            class="button sign-up"
            href={`${window.location.origin}/get-started/lessons`}
          >
            Grades Data
          </a>
          <a
            class="button sign-up"
            href={`${window.location.origin}/get-started/grades`}
          >
            Student's Data
          </a>
        </div>
      </div>
      <div class="design-thinking-image">
        <img
          src={require("../../assets/marketer/marketer.png")}
          class="img-get-started"
          alt="Hero Img"
        />
      </div>
    </section>
  );
};

export default GetStarted;
