import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import twitchicon from "./assets/image/icon.png";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5 ">
      <a class="navbar-brand" href="https://twitch.tv/">
        <img
          src={twitchicon}
          width="40"
          height="40"
          alt="twitch-icon"
          loading="lazy"
        ></img>
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav pl-2">
          <li class="nav-item pr-3">
            <a class="nav-link" href="/">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
