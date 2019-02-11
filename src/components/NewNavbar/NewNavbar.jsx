import React from "react";


import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import "./NewNavbar.css";

const NewNavbar = props =>
(
    <div>
        
      <nav className="navContainer">
      <DrawerToggleButton click={props.drawerClickHandler}/>
          <ul className="">
            <li>
              <a href="./">
                <img
                  src="https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/matter.png"
                  alt=""
                />
              </a>
            </li>
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
      </nav>
    </div>
  );

   

export default NewNavbar;
