import React from "react";

function Hero() {
  return (
    <div>
      <section className="hero-section">
        <div className="wrapper">
          <div className="flex">
            <span className="hero-title">Apparels</span>
            <span className="hero-desc">
              White Gold began gaining popularity in the early 1900’s as an
              alternative to platinum.{" "}
            </span>
            <img src={require("../images/hero.png")} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
