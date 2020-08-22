import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Error.css";

function Error() {
  return (
    <div>
      <Navbar />
      <div className="Error_page">
        <h1>Page Error.</h1>
        <p>
          Go back to <a href="/">homepage</a>
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
