import React, { Component } from "react";
import SideDrawer from "../SideDrawer/SideDrawer.jsx";
import Backdrop from "../Backdrop/Backdrop";
import Toolbar from "../Toolbar/Toolbar";

class Navbar extends Component {
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
      <div style={{paddingBottom:'80px'}}>

        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        {sideDrawer}
        {backdrop}
        </div>
    );
  }
}

export default Navbar;

