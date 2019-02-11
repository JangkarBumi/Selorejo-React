import React from "react";

function Promo() {
  return (
    <div>
      <section className="promo-bar">
        <span className="promo-text">
          {" "}
          Be the first to get best offers by Matterprints{" "}
        </span>

        <input
          className="promo-container"
          type="text"
          placeholder="ENTER YOUR EMAIL"
        />
        <button className="sub">SUBSCRIBE</button>
      </section>
    </div>
  );
}

export default Promo;
