import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

function About() {
  return (
    <div>
      <Navbar />
      <div className="about">
        <div className="use">
          YourTwitchClips generates compilation of top clips from your Twitch
          account’s follow list. You can filter top clips from when they are
          created (all time, month, week or past 24 hours).
        </div>
        <div className="privacy">
          YourTwitchClips connects your Twitch account via the official
          authentication domain dedicated to Twitch in https://id.twitch.tv. No
          privacy information like username and password is collected or
          retained in the server.
        </div>
        <div className="disclaimer">
          YourTwitchClips is designed and created by Calvin Chu in Aug, 2020. It
          is not affiliated with Twitch and is only used for non-profit purpose.
          All clips are properties of their respective broadcaster or Twitch,
          YourTwitchClips do not moderate content of any of clips.
        </div>
        <div className="github">
          At YourTwitchClips we believe "Together is Stronger", therefore, we
          invite all of you with any ideas or suggestions to improve
          YourTwitchClips to visit our Github repository and join our community.
        </div>
        <a
          href="https://github.com/calvinhychu/YourTwitchClips"
          class="btn btn-dark"
        >
          GitHub
        </a>
      </div>
      <Footer />
    </div>
  );
}

export default About;
