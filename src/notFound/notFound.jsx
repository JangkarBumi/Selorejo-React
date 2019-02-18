import React from "react";
import "./notFound.css";
import Footer from "../components/Footer/Footer.jsx";
import Navbar from "../components/Navbar/navbar";

const notFound = () => {
  return (
    <div>
      <Navbar />
      <h1>404 Not Found</h1>
      <Footer />
    </div>
  );
};

export default notFound;
