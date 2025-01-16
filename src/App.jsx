import React from "react";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <main className="mainContainer">
        <Navbar/>
        <ServicesSection/>
        <AboutSection/>
        <PortfolioSection/>
        <ContactForm/>
      </main>
    </>
  );
}

export default App;
