import React, { Component } from "react";
import Slider from "./components/Slider";
import SideDrawer from "./components/SideDrawer/SideDrawer.jsx";
import Backdrop from "./components/Backdrop/backdrop.jsx";
import Toolbar from "./components/Toolbar/Toolbar";
import Footer from "./components/Footer/Footer.jsx";

class Homepage extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer show={this.state.sideDrawerOpen} />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
        <main style={{ paddingTop: "80px" }} />

        <Slider />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
