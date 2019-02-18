import React from "react";
import "./fabric.css";

import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/Footer.jsx";
import Partner from "../components/Partners/partners";

const Fabric = () => {
  return (
    <div>
      <Navbar />
      <Partner />
      <Footer />
    </div>
  );
};

export default Fabric;
