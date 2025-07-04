import React, { useState, useEffect } from "react";
import {
  About,
  Contact,
  Experineces,
  Footer,
  Header,
  Hero,
  Projects,
} from "./components";
import useDarkMode from "./hooks/useDarkMode";
import { ArrowUp } from "lucide-react";
import ScrollProgressBar from "./components/ScrollProgressBar";

function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] text-black dark:text-white transition-colors duration-300">
      <ScrollProgressBar/>
      <Header isDark={isDark} />
      <Hero />
      <About />
      <Projects />
      <Experineces />
      <Contact />
      <Footer />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="h-10 w-10 darkModeBTN flex items-center justify-center fixed bottom-4 right-4 cursor-pointer rounded-[10px]"
      >
        <ArrowUp />
      </button>
    </div>
  );
}

export default App;
