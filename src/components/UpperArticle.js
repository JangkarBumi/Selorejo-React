import React from "react";

function UpperArticle() {
  return (
    <div>
      <section className="back-to-journal">
        <p>> BACK TO JOURNAL</p>
      </section>

      <section className="upper-article">
        <h1 className="center featured-text">
          Lasik Eye Surgery Are You Ready
        </h1>
        <p className="date">FIELDTESTED . JANUARY 19, 2017</p>
        <div className="wrapper">
          <img
            className="article-img-up"
            src={require("../images/article-img-up.png")}
            alt=""
          />
          <p className="first-part-article">
            “Quote 1 Lorem Ipsum is simply dummy text of the printing and
            typesetting industry has been the industry’s standard dummy text
            ever since the 1500s”
          </p>

          <p className="second-part-article">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <div className="wrapper">
            <div className="rec-product">
              <ul>
                <li>
                  <img src={require("../images/ads-article.png")} alt="" />
                  <span className="ads-title">Jamdani</span>
                </li>

                <li>
                  <img src={require("../images/ads-article.png")} alt="" />
                  <span className="ads-title">Jamdani</span>
                </li>

                <li>
                  <img src={require("../images/ads-article.png")} alt="" />
                  <span className="ads-title">Jamdani</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="third-part-article">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <img src={require("../images/article-img-down.png")} alt="" />

          <p className="last-part-article">
            I have taste grilled meats around the world. Before i will guide you
            to the various technologies (gas barbecues, charcoal barbecues,
            Mongolian, sauces, recipes ) i will tell you about the Greek way.
          </p>
        </div>
      </section>
    </div>
  );
}

export default UpperArticle;
