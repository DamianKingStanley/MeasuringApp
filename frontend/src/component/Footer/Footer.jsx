import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section className="Footer">
        <p>&copy; Copyright 2024</p>
        <p>
          Designed and Built by: <br />
          <Link to="https://kingdamian.netlify.app/">Damian King Stanley</Link>
        </p>
      </section>
    </div>
  );
};

export default Footer;
