import React from "react";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="wrapper">
          <ul className="main-nav">
            <li>
              <a href="./">
                <img
                  src="https://raw.githubusercontent.com/JangkarBumi/Selorejo/master/images/matter.png"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a className="nav-word" href="./shop">
                SHOP
              </a>
            </li>
            <li>
              <a className="nav-word" href="./fabric">
                FABRIC
              </a>
            </li>
            <li>
              <a className="nav-word" href="./journal">
                JOURNAL
              </a>
            </li>
            <li>
              <a className="nav-word" href="./about">
                ABOUT
              </a>
            </li>

            <li>
              <a className="nav-word" href="/">
                LOGIN
              </a>
            </li>

            <li>
              <a href="/search">
                <img
                  src={require("../images/002-magnifying-glass.png")}
                  alt=""
                />
              </a>
            </li>

            <li>
              <a href="/wishlist">
                <img src={require("../images/001-heart-outline.png")} alt="" />
              </a>
            </li>

            <li>
              <a href="/cart">
                <img
                  style={{ position: "relative", bottom: "10px" }}
                  src={require("../images/shopping-bag.png")}
                  alt=""
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
