import React, { Component } from "react";
import './homepage.css'
import Footer from "../components/Footer/Footer.jsx";
import Slider from "../components/Slider/slider"
import Featured from "../components/Featured/featured";
import About from "../components/About/about"
import Explore from "../components/Explore/explore"
import ShopNow from "../components/ShopNow/shopNow"
import Video from "../components/Vid/video"
import Seen from "../components/Seen/seen"
import Navbar from "../components/Navbar/navbar"


class Homepage extends Component {
 


  render() {
    
    return (
      <div>

        <Navbar />
<div className="content">
        <Slider />
        <Featured />
        <About />
        <Explore />
        <ShopNow />
        <Video />
        <Seen />
        <Footer />
        </div>
      </div>
    );
  }
}

export default Homepage;
