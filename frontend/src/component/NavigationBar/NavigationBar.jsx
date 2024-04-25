import React from "react";
import "./NavigationBar.css";
import logo from "../../assest/kinglogo.png";

const NavigationBar = () => {
  return (
    <div>
      <section className="NavigationBarSection">
        <div>
          <img id="logo" src={logo} alt="" />
        </div>
      </section>
    </div>
  );
};

export default NavigationBar;
