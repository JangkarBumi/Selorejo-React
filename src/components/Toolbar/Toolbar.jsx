import React from "react";

import './Toolbar.css'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
     <div></div>
      <div className="toolbar__logo">
        <a href="/">The LOGO</a>
      </div>
      <div className="spacer"></div>
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/Products">Products</a>
          </li>
          <li>
            <a href="/Users">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar