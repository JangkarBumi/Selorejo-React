import React, { Component } from "react";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import NewNavbar from "./components/NewNavbar/NewNavbar.jsx";
import SideDrawer from "./components/SideDrawer/SideDrawer.jsx";
import Backdrop from "./components/Backdrop/Backdrop.jsx";
import Toolbar from './components/Toolbar/Toolbar'


class Homepage extends Component {
  state = {
    sideDrawerOpen: false
  };



  render() {
    let backdrop

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div style={{ height: "100%" }}>
        <Toolbar />

        <main style={{marginTop: '64px'}}></main>
        <Slider />

        <section className="featured">
          <h1 className="center featured-text">Featured</h1>
          <div className="wrapper">
            <div className="featured-product">
              <ul>
                <li>
                  <img
                    className="product-img-featured"
                    src="https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png"
                    alt=""
                  />
                  <span className="product-title">
                    Pueria Mirifica And Study Photo Esrogens
                  </span>
                  <span className="price">$599</span>
                </li>

                <li>
                  <img
                    className="product-img-featured"
                    src="https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png"
                    alt=""
                  />
                  <span className="product-title">
                    Pueria Mirifica And Study Photo Esrogens
                  </span>
                  <span className="price">$599</span>
                </li>

                <li>
                  <img
                    className="product-img-featured"
                    src="https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png"
                    alt=""
                  />
                  <span className="product-title">
                    Pueria Mirifica And Study Photo Esrogens
                  </span>
                  <span className="price">$599</span>
                </li>

                <li>
                  <img
                    className="product-img-featured"
                    src="https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png"
                    alt=""
                  />
                  <span className="product-title">
                    Pueria Mirifica And Study Photo Esrogens
                  </span>
                  <span className="price">$599</span>
                </li>

                <li>
                  <img
                    className="product-img-featured"
                    src="https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png"
                    alt=""
                  />
                  <span className="product-title">
                    Pueria Mirifica And Study Photo Esrogens
                  </span>
                  <span className="price">$599</span>
                </li>

                <li>
                  <img
                    className="product-img-featured"
                    src="https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png"
                    alt=""
                  />
                  <span className="product-title">
                    Pueria Mirifica And Study Photo Esrogens
                  </span>
                  <span className="price">$599</span>
                </li>

                <li>
                  <img
                    className="product-img-featured"
                    src="https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png"
                    alt=""
                  />
                  <span className="product-title">
                    Pueria Mirifica And Study Photo Esrogens
                  </span>
                  <span className="price">$599</span>
                </li>

                <li>
                  <img
                    className="product-img-featured"
                    src="https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/Product_Card.png"
                    alt=""
                  />
                  <span className="product-title">
                    Pueria Mirifica And Study Photo Esrogens
                  </span>
                  <span className="price">$599</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

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

        <section className="explore">
          <h1 className="center explore-section-title">Explore</h1>
          <div className="wrapper">
            <div className="explore-container">
              <div className="second-piece">
                <div className="line-one" />
                FIELDTESTED . JANUARY 19, 2017
                <div className="explore-title">
                  Connected Clothing: Raye Padit
                </div>
                <div className="explore-content">
                  As a voice for conscious fashion, Raye Padit is motivated by
                  the belief that one person’s actions, no matter how small,
                  holds great impact. This core ideal has driven him to start
                  his three passion projects: Connected Threads Asia, PeyaR, and
                  Swagalls.{" "}
                </div>
                <img
                  src="https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/rect1.png"
                  alt=""
                  className="explore-img"
                />
              </div>

              <div className="first-piece">
                <div className="line-two" />
                FIELDTESTED . JANUARY 19, 2017
                <div className="explore-title-mini">
                  Kérastase: A Collaboration
                </div>
                <img
                  className="small-bag"
                  src="https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/task2.png"
                  alt=""
                />
                <div className="line-middle-two" />
                <div>FIELDTESTED . JANUARY 19, 2017</div>
                <div className="explore-title-mini">
                  Remarkable Resilience: Grace Kim
                </div>
                <div className="explore-content-mini">
                  A woman in my life who has shown remarkable resilience is my
                  best friend Grace. Since she was a kid, she struggled with
                  general anxiety disorder and panic disorder.
                </div>
              </div>

              <div className="first-piece">
                <div className="line-two" />
                FIELDTESTED . JANUARY 19, 2017
                <div className="explore-title-mini">Jaclynn Seah</div>
                <div className="explore-content-mini">
                  Jaclynn’s wandering spirit has brought her from the lush
                  greenery of South America to the craters of Indonesia.
                </div>
                <div className="line-middle-two" />
                <div>FIELDTESTED . JANUARY 19, 2017</div>
                <div className="explore-title-mini">
                  How To Wear The Lounge Lunghi
                </div>
                <img
                  src="https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/task3.png"
                  alt=""
                  className="task3"
                />
              </div>
            </div>
          </div>
          <div className="see-journal">SEE THE JOURNAL</div>
        </section>

        <section className="shop">
          <h1 className="center shop-section-title">Shop</h1>
          <div className="wrapper">
            <div className="product">
              <ul>
                <li>
                  <img
                    className="product-img"
                    src="https://github.com/JangkarBumi/Selorejo/blob/master/images/shop.png?raw=true"
                    alt=""
                  />
                </li>

                <li>
                  <img
                    className="product-img"
                    src="https://github.com/JangkarBumi/Selorejo/blob/master/images/shop.png?raw=true"
                    alt=""
                  />
                </li>

                <li>
                  <img
                    className="product-img"
                    src="https://github.com/JangkarBumi/Selorejo/blob/master/images/shop.png?raw=true"
                    alt=""
                  />
                </li>

                <li>
                  <img
                    className="product-img"
                    src="https://github.com/JangkarBumi/Selorejo/blob/master/images/shop.png?raw=true"
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="recommended">
          <h1 className="center recommended-section-title">
            Recommended Videos
          </h1>
          <div className="wrapper">
            <div className="rec-product">
              <ul>
                <li>
                  <img
                    className="video-thumb"
                    src="https://github.com/JangkarBumi/Selorejo/blob/master/images/video.png?raw=true"
                    alt=""
                  />
                  <span className="video-title">Jamdani</span>
                </li>

                <li>
                  <img
                    className="video-thumb"
                    src="https://github.com/JangkarBumi/Selorejo/blob/master/images/video.png?raw=true"
                    alt=""
                  />
                  <span className="video-title">
                    Lorem ipsum dolor sit amet
                  </span>
                </li>

                <li>
                  <img
                    className="video-thumb"
                    src="https://github.com/JangkarBumi/Selorejo/blob/master/images/video.png?raw=true"
                    alt=""
                  />
                  <span className="video-title">
                    Lorem ipsum dolor sit amet
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="show-more">SHOW MORE</div>
        </section>

        <section className="seen">
          <h1 className="center seen-section-title">As Seen On</h1>
        </section>

        <Footer />
      </div>
    );
  }
}

export default Homepage;
