import React from "react";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import DownloadCV from "./components/DownloadCV";

function App() {
  return (
    <>
      <main className="mainContainer">
        <Navbar/>
        <HeroSection/>
        <ServicesSection/>
        <AboutSection/>
        <PortfolioSection/>
        <ContactForm/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
