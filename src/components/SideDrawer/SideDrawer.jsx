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
          <a className="" href="./">
            Home
          </a>
        </li>
        <li>
          <a className="" href="./shop">
            Shop
          </a>
        </li>
        <li>
          <a className="" href="./fabric">
           Fabric
          </a>
        </li>
        <li>
          <a className="" href="./journal">
           Journal
          </a>
        </li>
        <li>
          <a className="" href="./about">
           About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
