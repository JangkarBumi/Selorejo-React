import React from "react";
import "./journal.css";
import Footer from "../components/Footer/Footer.jsx";
import Navbar from "../components/Navbar/navbar";
import JournalSum from "../components/JournalSum/journalSum"

const Journal = () => {
  return (
    <div className="journal-wrapper">
      <Navbar />
      <JournalSum />
      <Footer />
    </div>
  );
};

export default Journal;
