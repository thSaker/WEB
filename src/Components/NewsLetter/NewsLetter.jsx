import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Get Exclusion Offers On Your Email</h1>
      <p>Subcribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id" id="" />
        <button>Subcribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
