import React from "react";

import "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/">
          <img
            src="https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/matter.png"
            alt=""
          />
        </a>
      </div>

      <div className="toolbar_navigation-items">
        <ul>
         <li>
              <a className="" href="./shop">
                SHOP
              </a>
            </li>
            <li>
              <a className="" href="./fabric">
                FABRIC
              </a>
            </li>
            <li>
              <a className="" href="./journal">
                JOURNAL
              </a>
            </li>
            <li>
              <a className="" href="./about">
                ABOUT
              </a>
            </li>

            <li>
              <a className="" href="/">
                LOGIN
              </a>
            </li>

            <li>
              <a href="/search">
                <img
                  src={require("../../images/002-magnifying-glass.png")}
                  alt=""
                />
              </a>
            </li>

            <li>
              <a href="/wishlist">
                <img
                  src={require("../../images/001-heart-outline.png")}
                  alt=""
                />
              </a>
            </li>

            <li>
              <a href="/cart">
                <img
                  src={require("../../images/shopping-bag.png")}
                  alt=""
                />
              </a>
            </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
