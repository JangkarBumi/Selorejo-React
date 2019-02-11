import React from "react";

function AboutSection() {
  return (
    <div>
      <section className="about-section">
        <h1 className="center about-title">About Matter</h1>

        <div className="wrapper">
          <div className="about-me">
            <img
              src="https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Background.png"
              alt=""
              className="about-img"
            />

            <div className="about-text">
              <span className="mission">
                Our mission is threefold - to foster designer-artisan
                collaborations, inspire consumers to value provenance and
                process, and pioneer industry change and sustainability for
                rural textile communities.
              </span>

              <span className="artisan">Artisan Employment Days Created</span>
              <span className="artisan-number">123456</span>
              <span className="countries">Countries Involved To Date</span>
              <ul className="country-list">
                <li>India</li>
                <li>China</li>
                <li>Sri Lanka</li>
              </ul>

              <span className="tribe">#MatterTribe </span>

              <ul className="designers-list">
                <li>12 designers</li>
                <li>12 Factories</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSection;
