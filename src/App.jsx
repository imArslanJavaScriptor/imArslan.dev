import React, { useState, useEffect } from "react";
import { About, Contact, Experineces, Footer, Header, Hero, Projects } from "./components";
import useDarkMode from "./hooks/useDarkMode";

function App() {
 const { isDark, toggle } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-black dark:text-white transition-colors duration-300">
      
      <Header isDark={isDark}/>
      <Hero />
      <About />
      <Projects />
      <Experineces />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
