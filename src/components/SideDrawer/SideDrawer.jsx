import React from "react";

import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = ["side-drawer"];
  if (props.show) {
    drawerClasses = ["side-drawer open"];
  }

  return (
    <nav className={drawerClasses}>
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
      </ul>
    </nav>
  );
};

export default sideDrawer;
